import React, { useId } from 'react'
import { ArrowRight, FolderOpen } from 'lucide-react'

export interface FolderFileItem {
  name: string
  tag?: string
  icon?: React.ReactNode
  onClick?: () => void
}

export interface FolderCardProps {
  id?: string
  title?: string
  description?: string
  techStack?: string[]
  files?: FolderFileItem[]
  hintText?: string
  showViewDetails?: boolean
  onFileClick?: (file: FolderFileItem, index: number) => void
  onViewDetails?: () => void
}

const defaultFiles: FolderFileItem[] = [
  { name: 'Source Code', tag: 'React.js' },
  { name: 'Backend API', tag: 'Express' },
  { name: 'Database Schema', tag: 'MongoDB' },
  { name: 'System Design', tag: 'AWS' },
  { name: 'Project Docs', tag: 'Vite' }
]

export const FolderCard: React.FC<FolderCardProps> = ({
  id,
  title = 'Project Vault',
  techStack = ['React.js', 'Node.js', 'MongoDB'],
  files = defaultFiles,
  showViewDetails = true,
  onFileClick,
  onViewDetails
}) => {
  const generatedId = useId()
  const toggleId = id || `folder-toggle-${generatedId}`

  const displayFiles = files.slice(0, 5)
  const fileClasses = ['file-1', 'file-2', 'file-3', 'file-4', 'file-5']

  const shouldRenderViewDetails = showViewDetails && Boolean(onViewDetails)

  return (
    <div className="folder-card my-12 mx-auto">
      <input type="checkbox" id={toggleId} className="folder-toggle" />

      <div className="folder-container">
        {/* Folder Back Graphic */}
        <div className="folder-back">
          <svg viewBox="0 0 230 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 20C0 8.9543 8.9543 0 20 0H80C88 0 94 6 100 13L108 23C112 28 118 31 125 31H210C221.046 31 230 39.9543 230 51V150C230 161.046 221.046 170 210 170H20C8.9543 170 0 161.046 0 150V20Z" fill="#1e293b"/>
            <path d="M0 40C0 28.9543 8.9543 20 20 20H210C221.046 20 230 28.9543 230 40V150C230 161.046 221.046 170 210 170H20C8.9543 170 0 161.046 0 150V40Z" fill="#0f172a" opacity="0.85"/>
          </svg>
        </div>

        {/* Secret Files inside Folder */}
        {displayFiles.map((file, index) => {
          const fileClass = fileClasses[index] || 'file-5'
          const isFrontCard = index === 0

          return (
            <div
              key={index}
              className={`file ${fileClass}`}
              onClick={(e) => {
                e.stopPropagation()
                if (file.onClick) file.onClick()
                if (onFileClick) onFileClick(file, index)
                if (onViewDetails && shouldRenderViewDetails) onViewDetails()
              }}
            >
              <div className="shine"></div>
              
              <div className="file-text font-bold leading-tight">
                <div className="text-[11px] text-white font-extrabold pr-5 drop-shadow-sm">{file.name}</div>
                
                {isFrontCard ? (
                  <div className="mt-1.5 flex flex-wrap gap-1 max-w-[170px]">
                    {techStack.slice(0, 6).map(tech => (
                      <span key={tech} className="text-[7.5px] font-mono font-extrabold bg-black/60 text-cyan-300 border border-cyan-400/40 px-1.5 py-0.5 rounded shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  file.tag && (
                    <div className="text-[8.5px] font-semibold text-white/80 mt-1 tracking-tight">
                      {file.tag}
                    </div>
                  )
                )}
              </div>
              
              <div className="file-icon">
                {file.icon || (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                )}
              </div>
              
              {isFrontCard && shouldRenderViewDetails ? (
                <button
                  type="button"
                  className="view-details-front-btn flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/75 hover:bg-black/95 text-white text-[9px] font-extrabold border border-white/35 shadow-md backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer absolute bottom-2.5 right-2.5 z-30"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (onViewDetails) onViewDetails()
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 text-cyan-300" />
                </button>
              ) : (
                file.tag && <div className="file-tag">{file.tag}</div>
              )}
            </div>
          )
        })}

        {/* Folder Front Cover with Open Sign Badge */}
        <label htmlFor={toggleId} className="folder-front-wrapper block cursor-pointer group">
          <svg viewBox="0 0 230 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <path d="M0 20C0 8.9543 8.9543 0 20 0H210C221.046 0 230 8.9543 230 20V110C230 121.046 221.046 130 210 130H20C8.9543 130 0 121.046 0 110V20Z" fill="url(#folderGradient)"/>
          </svg>
          
          <div className="folder-label"></div>
          
          <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white drop-shadow">
            <span className="text-[12px] font-black uppercase tracking-wider opacity-95">
              {title}
            </span>
            
            <span className="folder-open-badge flex items-center gap-1 text-[9px] font-extrabold bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md transition-all group-hover:scale-105">
              <span>OPEN</span>
              <FolderOpen className="w-3 h-3 text-cyan-300" />
            </span>
          </div>
        </label>
      </div>
    </div>
  )
}

export default FolderCard
