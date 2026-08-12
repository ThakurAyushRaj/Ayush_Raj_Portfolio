import React, { Suspense, lazy, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-950/80 rounded-2xl border border-zinc-800">
        <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xl mb-3">
          🤖
        </div>
        <p className="text-xs font-semibold text-zinc-300">3D Interactive Robot Scene</p>
        <p className="text-[11px] text-zinc-500 mt-1 max-w-xs">Interactive Spline WebGL canvas</p>
      </div>
    )
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full min-h-[350px] flex flex-col items-center justify-center bg-zinc-950/60 rounded-2xl border border-zinc-800/60 p-6 text-center space-y-3">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs text-zinc-400 font-mono">Loading 3D Robot Interactive Canvas...</span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onError={() => setHasError(true)}
      />
    </Suspense>
  )
}
