import React from 'react'

export interface GlassIconsItem {
  icon: React.ReactNode
  color: string
  label: string
  customClass?: string
  href?: string
  onClick?: () => void
}

export interface GlassIconsProps {
  items: GlassIconsItem[]
  className?: string
}

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
  cyan: 'linear-gradient(hsl(188, 90%, 50%), hsl(173, 90%, 50%))',
  emerald: 'linear-gradient(hsl(158, 90%, 40%), hsl(143, 90%, 40%))',
  amber: 'linear-gradient(hsl(38, 90%, 50%), hsl(23, 90%, 50%))',
  rose: 'linear-gradient(hsl(343, 90%, 50%), hsl(328, 90%, 50%))',
  sky: 'linear-gradient(hsl(198, 90%, 50%), hsl(183, 90%, 50%))',
  pink: 'linear-gradient(hsl(320, 90%, 50%), hsl(305, 90%, 50%))',
  teal: 'linear-gradient(hsl(168, 90%, 45%), hsl(153, 90%, 45%))',
}

export const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] }
    }
    return { background: color }
  }

  return (
    <div className={`grid gap-[4em] sm:gap-[5em] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-auto py-[3em] overflow-visible justify-items-center ${className || ''}`}>
      {items.map((item, index) => {
        const isLink = Boolean(item.href)
        const Component = isLink ? 'a' : 'button'
        const extraProps = isLink
          ? { href: item.href, target: '_blank', rel: 'noreferrer' }
          : { type: 'button' as const }

        return (
          <Component
            key={index}
            {...extraProps}
            onClick={item.onClick}
            aria-label={item.label}
            className={`relative bg-transparent outline-none border-none cursor-pointer w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group flex flex-col items-center justify-center ${
              item.customClass || ''
            }`}
          >
            <span
              className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] [will-change:transform] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)] pointer-events-none"
              style={{
                ...getBackgroundStyle(item.color),
                boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)'
              }}
            ></span>

            <span
              className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] [will-change:transform] transform group-hover:[transform:translate3d(0,0,2em)] pointer-events-none"
              style={{
                boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'
              }}
            >
              <span className="m-auto w-[1.75em] h-[1.75em] flex items-center justify-center text-white font-bold" aria-hidden="true">
                {item.icon}
              </span>
            </span>

            <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)] pointer-events-none drop-shadow-md">
              {item.label}
            </span>
          </Component>
        )
      })}
    </div>
  )
}

export default GlassIcons
