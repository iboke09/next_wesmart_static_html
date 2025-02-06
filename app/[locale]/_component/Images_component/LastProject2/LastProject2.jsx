'use client'
import { CldImage } from 'next-cloudinary'
import React from 'react'

const LastProject2 = () => {
  return (
    <CldImage
    src={"wmcggscgb3u6stcs5i1u.png"}
    alt="Web Development in wesmart"
    width={1200}
    height={1200}
    loading="lazy" quality="auto:best" 
  />
  )
}

export default LastProject2
