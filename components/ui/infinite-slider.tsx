'use client'
import { cn } from '@/lib/utils'
import { useMotionValue, animate, motion } from 'motion/react'
import { useState, useEffect, useRef, useCallback } from 'react'
import React from 'react'

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentSize, setContentSize] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const isHorizontal = direction === 'horizontal'

  // Measure the content size
  useEffect(() => {
    if (contentRef.current) {
      const measureSize = () => {
        if (contentRef.current) {
          const size = isHorizontal
            ? contentRef.current.scrollWidth / 2 // We duplicate content, so divide by 2
            : contentRef.current.scrollHeight / 2
          setContentSize(size)
          setIsReady(true)
        }
      }
      
      // Wait for fonts and images to load
      const timer = setTimeout(measureSize, 100)
      return () => clearTimeout(timer)
    }
  }, [children, isHorizontal, gap])

  // Animate the slider
  useEffect(() => {
    if (!isReady || contentSize === 0) return

    const motionValue = isHorizontal ? x : y
    const from = reverse ? -contentSize : 0
    const to = reverse ? 0 : -contentSize
    const duration = contentSize / currentSpeed

    const controls = animate(motionValue, [from, to], {
      duration,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    })

    return () => controls.stop()
  }, [isReady, contentSize, currentSpeed, reverse, isHorizontal, x, y])

  const handleMouseEnter = useCallback(() => {
    if (speedOnHover !== undefined) {
      setCurrentSpeed(speedOnHover)
    }
  }, [speedOnHover])

  const handleMouseLeave = useCallback(() => {
    if (speedOnHover !== undefined) {
      setCurrentSpeed(speed)
    }
  }, [speed, speedOnHover])

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={contentRef}
        className={cn(
          'flex w-max',
          isHorizontal ? 'flex-row' : 'flex-col'
        )}
        style={{
          x: isHorizontal ? x : 0,
          y: isHorizontal ? 0 : y,
          gap,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
