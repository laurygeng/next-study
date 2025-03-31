import React from 'react'
import Hero from '@/components/hero'
import homeSrc from '../../../public/a.jpg'
import { Metadata } from 'next'
import Link from 'next/link'
// import { Button } from 'antd'
import Image from 'next/image'
import { photos } from '@/data'

export const metadata: Metadata = {
  title: 'home'
}

export default function page() {
  return (
    <div>
      <div className="App">
        {/* <Button type="primary">Button</Button> */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {photos.map(item => (
                <Link href={`/photos/${item.id}`} className="group" key={item.id}>
                  <Image height={200} width={200} alt={item.alt} src={item.src} className="h-full w-full object-cover" />
                  <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Hero imgUrl={homeSrc} altTxt="a Image" content="Professional Cloud Hosting" />
    </div>
  )
}
