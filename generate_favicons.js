const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Create directories if they don't exist
const publicDir = path.join(__dirname, 'public');
const appDir = path.join(__dirname, 'app');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

// SVG content matching the user profile avatar icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="avatarGrad" x1="10%" y1="10%" x2="90%" y2="90%">
      <stop offset="0%" stop-color="#E052F5" />
      <stop offset="45%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#00D5FF" />
    </linearGradient>
  </defs>
  <circle cx="256" cy="140" r="130" fill="url(#avatarGrad)" />
  <path d="M 0 512 L 0 420 C 0 360 48 330 115 330 L 397 330 C 464 330 512 360 512 420 L 512 512 Z" fill="url(#avatarGrad)" />
</svg>`;

// Write SVG files
fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent);
fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent);
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
console.log('SVG files created successfully.');

// PNG generator in pure Node
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = (crcTable[(crc ^ buf[i]) & 0xFF]) ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(8 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crc = crc32(buf.subarray(4, 8 + len));
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

function createPNGBuffer(width, height, getRGBA) {
  const rawData = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;

  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter type 0
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getRGBA(x, y);
      rawData[offset++] = r;
      rawData[offset++] = g;
      rawData[offset++] = b;
      rawData[offset++] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    signature,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressedData),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

function createICOBuffer(pngBuffer, width, height) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry[0] = width >= 256 ? 0 : width;
  entry[1] = height >= 256 ? 0 : height;
  entry[2] = 0;
  entry[3] = 0;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

function getAvatarPixel(x, y, size) {
  const normX = (x + 0.5) / size * 512;
  const normY = (y + 0.5) / size * 512;

  // Head circle
  const headCx = 256;
  const headCy = 140;
  const headR = 130;
  const distHead = Math.sqrt((normX - headCx) ** 2 + (normY - headCy) ** 2);

  // Shoulders path
  let insideShoulders = false;
  let distShouldersEdge = 999;

  if (normY >= 330 && normY <= 512 && normX >= 0 && normX <= 512) {
    let topY = 330;
    if (normX < 115) {
      const r = 90;
      const cx = 115;
      const cy = 420;
      const dx = normX - cx;
      topY = cy - Math.sqrt(Math.max(0, r * r - dx * dx));
    } else if (normX > 397) {
      const r = 90;
      const cx = 397;
      const cy = 420;
      const dx = normX - cx;
      topY = cy - Math.sqrt(Math.max(0, r * r - dx * dx));
    }

    if (normY >= topY) {
      insideShoulders = true;
      distShouldersEdge = normY - topY;
    } else {
      distShouldersEdge = topY - normY;
    }
  }

  const scale = 512 / size;
  let headAlpha = 0;
  if (distHead <= headR - scale * 0.5) {
    headAlpha = 1;
  } else if (distHead >= headR + scale * 0.5) {
    headAlpha = 0;
  } else {
    headAlpha = 0.5 + (headR - distHead) / scale;
  }

  let shoulderAlpha = 0;
  if (insideShoulders) {
    if (distShouldersEdge >= scale * 0.5) shoulderAlpha = 1;
    else shoulderAlpha = 0.5 + distShouldersEdge / scale;
  } else {
    if (distShouldersEdge <= scale * 0.5) shoulderAlpha = 0.5 - distShouldersEdge / scale;
    else shoulderAlpha = 0;
  }
  shoulderAlpha = Math.max(0, Math.min(1, shoulderAlpha));

  const alpha = Math.max(headAlpha, shoulderAlpha);
  if (alpha <= 0) return [0, 0, 0, 0];

  const t = Math.max(0, Math.min(1, (normX / 512 + normY / 512) / 2));
  
  let r, g, b;
  if (t < 0.5) {
    const localT = t / 0.5;
    r = Math.round(224 + (139 - 224) * localT);
    g = Math.round(82 + (92 - 82) * localT);
    b = Math.round(245 + (246 - 245) * localT);
  } else {
    const localT = (t - 0.5) / 0.5;
    r = Math.round(139 + (0 - 139) * localT);
    g = Math.round(92 + (213 - 92) * localT);
    b = Math.round(246 + (255 - 246) * localT);
  }

  return [r, g, b, Math.round(alpha * 255)];
}

// Generate sizes
const png32 = createPNGBuffer(32, 32, (x, y) => getAvatarPixel(x, y, 32));
const ico32 = createICOBuffer(png32, 32, 32);

const png180 = createPNGBuffer(180, 180, (x, y) => getAvatarPixel(x, y, 180));
const png512 = createPNGBuffer(512, 512, (x, y) => getAvatarPixel(x, y, 512));

fs.writeFileSync(path.join(appDir, 'favicon.ico'), ico32);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32);

fs.writeFileSync(path.join(appDir, 'icon.png'), png512);
fs.writeFileSync(path.join(publicDir, 'icon.png'), png512);
fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), png180);
fs.writeFileSync(path.join(appDir, 'apple-icon.png'), png180);

console.log('PNG and ICO favicons generated successfully.');
