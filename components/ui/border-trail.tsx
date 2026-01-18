'use client'
import { cn } from '@/lib/utils'

type BorderTrailProps = {
  className?: string
  size?: number
  style?: React.CSSProperties
  duration?: number
}

export function BorderTrail({
  className,
  size = 60,
  style,
  duration = 5,
}: BorderTrailProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div
        className={cn('absolute rounded-full bg-white', className)}
        style={{
          width: size,
          height: size,
          animation: `border-trail ${duration}s linear infinite`,
          ...style,
        }}
      />
    </div>
  )
}
