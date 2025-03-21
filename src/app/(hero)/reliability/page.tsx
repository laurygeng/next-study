import React from 'react'
import Hero from '@/components/hero'
import relSrc from '../../../../public/d.jpg'

export default function page() {
  return (
    <div>
      <Hero imgUrl={relSrc} altTxt="d Image" content="Reliability Cloud Hosting" />
    </div>
  )
}
