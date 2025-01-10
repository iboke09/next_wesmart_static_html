'use client'
import React from "react";
import { CldImage } from "next-cloudinary";

function AboutERPN() {
  return (
    <CldImage
      src={"efhincufotgfyqcqifum.png"}
      alt="wesmart for sap"
      width={450}
      height={200}
      loading="eager"
    />
  )
}

export default AboutERPN