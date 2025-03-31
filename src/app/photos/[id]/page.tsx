import React from 'react'
import Image from 'next/image'
import { photos } from '@/data'

export default function page({ params }: { params: { id: string } }) {
  const photo = photos.find(item => item.id === +params.id)!
  return (
    <div className="container mx-auto pt-8">
      <Image alt={photo?.alt} src={photo?.src} width={200} height={200} className="rounded-lg block mx-auto" />
      <div className="border-2 border-dashed border-gray-500 rounded-lg p-3 mt-5 leading-6">
        <p>
          <strong>Title:</strong>
          {photo?.alt}
        </p>
        <p>
          <strong>Price:</strong>
          {photo?.price}
        </p>
        <p>
          <strong>Desc:</strong>
          All domestic students taking nine (9) or more credit hours are required to maintain health insurance as a condition of enrollment.
          A domestic student may waive out of the policy by documenting current, comparable U.S. insurance coverage in the Student Center
          component of mySMU before the deadline each semester. Domestic Students not waiving are required to enroll in the Student Health
          Insurance Plan. All international students who are enrolled in one (1) or more credit hours are required to maintain the Student
          Health Insurance Plan as a condition of enrollment. International students must enroll in the Student Health Insurance Plan unless
          they have a special waiver personally granted by the Student Health Center staff.
        </p>
      </div>
    </div>
  )
}
