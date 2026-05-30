'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen, BarChart, Settings, User } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart, label: 'Progress' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard')

  return (
    <nav className="hidden md:flex flex-col w-16 lg:w-56 h-screen bg-[#0d0d0d] border-r border-white/5 py-6 px-2 lg:px-4 shrink-0">
      <div className="text-violet-400 font-bold text-lg mb-8 hidden lg:block px-2">
        LearnOS
      </div>
      <div className="flex flex-col gap-1">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors"
          >
            {active === label && (
              <motion.div
                layoutId="sidebar-highlight"
                className="absolute inset-0 bg-violet-500/15 rounded-xl"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Icon
              size={18}
              className={active === label ? 'text-violet-400 relative z-10' : 'text-white/30 relative z-10'}
            />
            <span className={`hidden lg:block relative z-10 ${active === label ? 'text-white' : 'text-white/30'}`}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}