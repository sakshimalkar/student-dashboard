export default function Loading() {
  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      <div className="w-16 h-screen bg-[#111] animate-pulse" />
      <main className="flex-1 p-6 grid grid-cols-3 gap-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-[#1a1a1a] animate-pulse h-48"
          />
        ))}
      </main>
    </div>
  )
}