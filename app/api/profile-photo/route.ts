import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  const filePaths = [
    "C:/Users/rajay/.gemini/antigravity-ide/brain/f5744dab-b707-4266-ad25-f962f456b56c/media__1785414703050.jpg",
    "C:/Users/rajay/.gemini/antigravity-ide/brain/f5744dab-b707-4266-ad25-f962f456b56c/media__1785414231357.jpg"
  ];
  
  try {
    for (const filePath of filePaths) {
      if (fs.existsSync(filePath)) {
        const buffer = fs.readFileSync(filePath);
        return new NextResponse(buffer, {
          headers: {
            "Content-Type": "image/jpeg",
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        });
      }
    }
  } catch (error) {
    console.error("Error reading profile photo:", error);
  }

  return new NextResponse("Photo not found", { status: 404 });
}
