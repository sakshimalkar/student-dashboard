'use client'
import { motion } from 'framer-motion'

export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-3">
      <motion.div
        className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      />
    </div>
  )
}