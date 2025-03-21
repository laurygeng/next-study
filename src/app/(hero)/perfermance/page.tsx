import React from 'react'
import Hero from '@/components/hero'
import perferSrc from '../../../../public/b.jpg'

export default function page() {
  return (
    <div>
      <Hero imgUrl={perferSrc} altTxt="b Image" content="Perfermance Cloud Hosting" />
    </div>
  )
}
