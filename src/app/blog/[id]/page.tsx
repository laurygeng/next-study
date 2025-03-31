import React from 'react'
import { Card } from 'antd'
import { data } from '@/data'

export default function page({ params }: { params: { id: string } }) {
  const item = data.find(item => item.id === +params.id)
  return (
    <div>
      <Card title={item?.title} variant="borderless">
        <p>{item?.body}</p>
      </Card>
    </div>
  )
}
