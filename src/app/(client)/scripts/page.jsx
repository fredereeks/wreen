
import { scripts } from '@/data'
// import Image from 'next/image'
import React from 'react'
import ScriptList from './ScriptList'

export default function page() {
  return (
    <main className="relative after-overlay">
      <ScriptList key={836} data={scripts} />
    </main>
  )
}
