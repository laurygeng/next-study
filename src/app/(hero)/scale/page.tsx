import React from 'react'
import Hero from '@/components/hero'
import scaleSrc from '../../../../public/c.jpg'

export default function page() {
  return (
    <div>
      <Hero imgUrl={scaleSrc} altTxt="c Image" content="Scale Cloud Hosting" />
    </div>
  )
}
