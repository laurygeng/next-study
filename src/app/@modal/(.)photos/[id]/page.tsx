'use client'
import React from 'react'
import Image from 'next/image'
import { photos } from '@/data'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const photo = photos.find(item => item.id === +params.id)!
  const router = useRouter()
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-500/[.6] z-20" onClick={router.back}>
      <Image
        alt={photo?.alt}
        src={photo?.src}
        width={400}
        height={400}
        className="rounded-lg block mx-auto"
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}
