import React from 'react'
import Hero from '@/components/hero'
import homeSrc from '../../public/a.jpg'
import { Metadata } from 'next'
import { Button } from 'antd'

export const metadata: Metadata = {
  title: 'home'
}

export default function page() {
  return (
    <div>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
      <Hero imgUrl={homeSrc} altTxt="a Image" content="Professional Cloud Hosting" />
    </div>
  )
}
