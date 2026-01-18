'use client'
import { motion, AnimatePresence } from 'motion/react'
import { BorderTrail } from '@/components/motion-primitives/border-trail'
import { XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type WorkDetailModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  company: string
  start: string
  end: string
  description: string
}

export function WorkDetailModal({
  isOpen,
  onClose,
  title,
  company,
  start,
  end,
  description,
}: WorkDetailModalProps) {
  const [mounted, setMounted] = useState(false)

  // Mount portal only on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = '' // Restore scroll
    }
  }, [isOpen, onClose])

  // Don't render on server
  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - blurred background */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal card */}
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* BorderTrail effect */}
              <BorderTrail
                className="bg-gradient-to-l from-white via-white/80 to-transparent dark:from-zinc-400 dark:via-zinc-500/50"
                size={120}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'linear',
                }}
              />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                <XIcon className="h-5 w-5" />
              </button>
              
              {/* Content */}
              <div className="pr-8">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{company}</p>
                <p className="mt-1 text-sm text-zinc-500">
                  {start} - {end}
                </p>
              </div>
              
              {/* Description - scrollable */}
              <div className="mt-4 max-h-[300px] overflow-y-auto pr-2">
                <p className="whitespace-pre-line text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
