 # Student Dashboard

A futuristic learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Setup

1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in your Supabase keys
3. Run `npm install`
4. Run `npm run dev`

## Architecture

- **Server Components**: `app/page.tsx` fetches Supabase data server-side (no API exposure to client)
- **Client Components**: Only animation/interactive parts (`'use client'`) — Sidebar, BentoGrid, tiles
- **Suspense**: `loading.tsx` shows skeleton UI while server fetches data

## Env Variables Required

See `.env.example`