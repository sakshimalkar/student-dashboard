'use client'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.section
      className="col-span-2 rounded-2xl bg-gradient-to-br from-violet-900/40 to-[#111] border border-violet-500/20 p-8 relative overflow-hidden"
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <p className="text-white/50 text-sm mb-1">Good morning 👋</p>
      <h1 className="text-white text-3xl font-bold mb-6">Welcome back, Alex</h1>
      <div className="flex items-center gap-2 bg-white/5 w-fit px-4 py-2 rounded-full">
        <Flame size={16} className="text-orange-400" />
        <span className="text-white text-sm font-medium">7 Day Streak</span>
      </div>
    </motion.section>
  )
}