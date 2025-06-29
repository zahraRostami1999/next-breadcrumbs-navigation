'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Breadcrumbs({ items = [], iconPath = "/home.svg", }) {
  return (
    <div className=''>
      <div className='my-4 flex gap-3 items-center'>
         <Image src={iconPath} width={15} height={15} alt="خانه" />
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Image src="/line.svg" width={2.5} height={5} alt="خط" />
            <Link href={item.href} className={item.active ? 'text-[#3676B6]' : ''}>
              <span className='text-[#183553]'>{item.title}</span>
            </Link>
            {index !== items.length - 1 && (
              <Image src="/arrow.svg" width={7} height={15} alt="فلش" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
