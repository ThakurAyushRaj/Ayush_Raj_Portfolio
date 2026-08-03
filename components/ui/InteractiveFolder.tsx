"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export interface FolderProps {
  /** Main color of the folder */
  color?: string;
  /** Scale factor for the folder */
  size?: number;
  /** Array of React elements to display as "papers" inside the folder */
  items?: React.ReactNode[];
  /** Optional CSS class for the wrapper */
  className?: string;
  /** Title or label to display on the folder */
  label?: string;
  /** Main description information displayed when open */
  description?: string;
  /** Optional title for the info popover */
  infoTitle?: string;
  /** Detailed information per paper item when hovered */
  infoDetails?: string[];
  /** Optional controlled open state */
  isOpen?: boolean;
  /** Optional toggle callback */
  onToggle?: (open: boolean) => void;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

export function InteractiveFolder({ 
  color = '#FF3000', 
  size = 1, 
  items = [], 
  className = '',
  label,
  description,
  infoTitle,
  infoDetails = [],
  isOpen: isOpenProp,
  onToggle
}: FolderProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = isOpenProp !== undefined ? isOpenProp : internalIsOpen;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle) {
      onToggle(!isOpen);
    } else {
      setInternalIsOpen(!isOpen);
    }
  };

  const maxVisibleItems = 3;
  const displayItems = items.slice(0, maxVisibleItems);
  while (displayItems.length < maxVisibleItems) {
    displayItems.push(null);
  }

  const folderBackColor = darkenColor(color, 0.15);
  const paperColors = [
    '#F8FAFC',
    '#F1F5F9',
    '#FFFFFF'
  ];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (!isOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    setMousePos({ x, y });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredIndex(null);
  };

  const getPaperTransform = (index: number) => {
    if (!isOpen) return { x: '-50%', y: '10%', rotate: 0 };
    
    const baseTransforms = [
      { x: '-120%', y: '-75%', rotate: -15 },
      { x: '10%', y: '-75%', rotate: 15 },
      { x: '-50%', y: '-105%', rotate: 5 }
    ];

    const base = baseTransforms[index] || { x: '-50%', y: '-50%', rotate: 0 };
    
    if (hoveredIndex === index) {
      return {
        x: `calc(${base.x} + ${mousePos.x}px)`,
        y: `calc(${base.y} + ${mousePos.y}px)`,
        rotate: base.rotate,
        scale: 1.12,
      };
    }
    
    return base;
  };

  const currentInfoText = hoveredIndex !== null && infoDetails && infoDetails[hoveredIndex]
    ? infoDetails[hoveredIndex]
    : description || (infoDetails && infoDetails.length > 0 ? infoDetails.join(" • ") : null);

  return (
    <div 
      className={`relative flex items-center justify-center transition-all ${isOpen ? 'z-50' : 'z-10'} ${className}`}
      style={{ transform: `scale(${size})`, width: 120, height: 100 }}
    >
      {/* Animated Information Popover Modal */}
      <AnimatePresence>
        {isOpen && currentInfoText && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-16 w-52 sm:w-60 p-3 rounded-xl bg-[#0F172A] text-[#F9F6F0] border-2 border-black shadow-2xl z-50 text-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#D97706] mb-1 flex items-center justify-center gap-1">
              <Info size={12} />
              <span>{infoTitle || label || "Folder Details"}</span>
            </div>
            <p className="text-xs font-semibold leading-relaxed text-[#CBD5E1]">
              {currentInfoText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="relative cursor-pointer group select-none"
        onClick={toggleOpen}
      >
        {/* Folder Back */}
        <div
          className="relative w-[110px] h-[85px] transition-all duration-500 rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] border-2 border-black"
          style={{ 
            backgroundColor: folderBackColor,
            boxShadow: isOpen ? '0 12px 32px -4px rgba(0,0,0,0.25)' : '0 4px 12px -2px rgba(0,0,0,0.1)'
          }}
        >
          {/* Tab */}
          <div
            className="absolute bottom-full left-0 w-[40px] h-[12px] rounded-t-[6px] border-t-2 border-l-2 border-r-2 border-black"
            style={{ backgroundColor: folderBackColor }}
          />

          {/* Papers */}
          {displayItems.map((item, i) => (
            <motion.div
              key={i}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={handleMouseLeave}
              animate={getPaperTransform(i)}
              transition={{ 
                type: 'spring', 
                stiffness: 260, 
                damping: 20,
                mass: 1 
              }}
              className="absolute left-1/2 flex items-center justify-center overflow-hidden border-2 border-black shadow-lg"
              style={{
                zIndex: 20 + i,
                backgroundColor: paperColors[i],
                borderRadius: '4px',
                width: i === 0 ? '80px' : i === 1 ? '90px' : '100px',
                height: i === 0 ? '70px' : i === 1 ? '75px' : '80px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              {item || (
                <div className="w-full h-full p-2 flex flex-col gap-1.5 opacity-40 text-black">
                  <div className="w-3/4 h-1 bg-current rounded-full" />
                  <div className="w-1/2 h-1 bg-current rounded-full" />
                  <div className="w-2/3 h-1 bg-current rounded-full" />
                </div>
              )}
            </motion.div>
          ))}

          {/* Folder Front Flap - Left Side */}
          <motion.div
            animate={{
              skewX: isOpen ? 15 : 0,
              scaleY: isOpen ? 0.6 : 1,
              translateY: isOpen ? 4 : 0
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute inset-0 z-40 origin-bottom border-2 border-black"
            style={{
              backgroundColor: color,
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
            }}
          />

          {/* Folder Front Flap - Right Side */}
          <motion.div
            animate={{
              skewX: isOpen ? -15 : 0,
              scaleY: isOpen ? 0.6 : 1,
              translateY: isOpen ? 4 : 0
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute inset-0 z-40 origin-bottom border-2 border-black flex items-center justify-center"
            style={{
              backgroundColor: color,
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
            }}
          >
             {label && !isOpen && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black text-[10px] tracking-widest uppercase whitespace-nowrap px-2 pointer-events-none drop-shadow-sm">
                {label}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveFolder;
