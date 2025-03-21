import React from 'react'
import Hero from '@/components/hero'
import homeSrc from '../../../public/a.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'home'
}

export default function page() {
  return (
    <div>
      <Hero imgUrl={homeSrc} altTxt="a Image" content="Professional Cloud Hosting" />
    </div>
  )
}
