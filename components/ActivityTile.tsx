 'use client'
import { motion } from 'framer-motion'

const weeks = Array.from({ length: 12 }, (_, wi) =>
  Array.from({ length: 7 }, (_, di) => {
    const seed = (wi * 7 + di) * 9301 + 49297
    return (seed % 233280) / 233280
  })
)

export default function ActivityTile() {
  return (
    <motion.section
      className="rounded-2xl bg-[#111] border border-white/5 p-5"
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <h2 className="text-white/70 text-sm font-medium mb-4">Activity</h2>
      <div className="flex gap-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((val, di) => (
              <div
                key={di}
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: val > 0.7
                    ? '#7c3aed'
                    : val > 0.4
                    ? '#4c1d95'
                    : '#1f1f2e'
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  )
}