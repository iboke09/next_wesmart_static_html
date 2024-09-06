'use client'
import React from 'react'
import { CldImage } from "next-cloudinary";

function V2() {
  return (
    <CldImage src={"i900v2tg6dzzguti1cqa.webp"} alt="wesmartt" width={1000} height={100} loading="lazy"/>
  )
}

export default V2