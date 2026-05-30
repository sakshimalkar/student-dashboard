'use client'
import { motion } from 'framer-motion'
import HeroTile from './HeroTile'
import CourseTile from './CourseTile'
import ActivityTile from './ActivityTile'
import { Course } from '@/types'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } }
}

export default function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="flex-1 p-4 lg:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto"
    >
      <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-2">
        <HeroTile />
      </motion.div>

      <motion.div variants={item}>
        <ActivityTile />
      </motion.div>

      {courses.map((course) => (
        <motion.div key={course.id} variants={item}>
          <CourseTile course={course} />
        </motion.div>
      ))}
    </motion.main>
  )
}