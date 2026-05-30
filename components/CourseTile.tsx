'use client'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import ProgressBar from './ProgressBar'
import { Course } from '@/types'

export default function CourseTile({ course }: { course: Course }) {
  const Icon = (Icons as any)[course.icon_name] ?? Icons.BookOpen

  return (
    <motion.article
      className="relative rounded-2xl bg-[#111] border border-white/5 p-5 overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(139,92,246,0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-cyan-900/10 pointer-events-none" />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3">
          <Icon size={20} className="text-violet-400" />
        </div>
        <h3 className="text-white font-semibold text-sm">{course.title}</h3>
        <p className="text-white/40 text-xs mt-1">{course.progress}% complete</p>
        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  )
}