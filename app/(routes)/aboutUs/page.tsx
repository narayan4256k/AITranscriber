import { NavbarDemo1 } from '@/app/_components/navbar1'
import { AnimatedTestimonialsDemo } from '@/app/_components/testimonals'
import React from 'react'

function aboutUs() {
  return (
    <div className="min-h-screen flex flex-row bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4 space-y-8">
        <NavbarDemo1/>
        <div className='fixed top-40 min-w-7xl justify-center items-center'>
            <AnimatedTestimonialsDemo/>
        </div>
    </div>
  )
}

export default aboutUs