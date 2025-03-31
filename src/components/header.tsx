'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkData = [
  { name: 'Perfermance', href: '/perfermance' },
  { name: 'Reliability', href: '/reliability' },
  { name: 'Scale', href: '/scale' }
]

// const accessLink = ['/', '/perfermance', '/reliability', '/scale']

export default function Header() {
  const pathname = usePathname()
  // if (!accessLink.includes(pathname)) return null
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-green-500 p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-2">
          {linkData.map((item, index) => (
            <Link key={index} className={item.href === pathname ? 'text-purple-500' : 'text-green-500'} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
