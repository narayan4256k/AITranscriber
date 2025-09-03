import { FollowingPointerDemo1 } from '@/app/_components/cards1'
import { FollowingPointerDemo2 } from '@/app/_components/cards2'
import { FollowingPointerDemo3 } from '@/app/_components/cards3'
import { StatefulButtonDemo } from '@/app/_components/submitbutton'
import LampDemo from '@/components/ui/lamp'
import Link from 'next/link'
import React from 'react'

function optionsPage() {
  return (
    <div>
    <div>
      <Link href={"/"}>
        <StatefulButtonDemo/>
      </Link>
    </div>
    <div className='min-h-screen flex flex-row items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4 space-y-8 '>
    <FollowingPointerDemo1/>
    <FollowingPointerDemo2/>
    <FollowingPointerDemo3/>
    </div>
  
  </div>
  )
}

export default optionsPage