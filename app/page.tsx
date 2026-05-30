 import { supabase } from '@/lib/supabase'
import Sidebar from '@/components/Sidebar'
import BentoGrid from '@/components/BentoGrid'
import { Course } from '@/types'

export default async function Home() {
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0a0a0a] text-red-400">
        Failed to load data. Please check your Supabase connection.
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar />
      <BentoGrid courses={courses as Course[]} />
    </div>
  )
}