'use client'
import React from "react";
import { CldImage } from "next-cloudinary";

function LandingPageVersion2() {
  return (
    <CldImage
      src={"scmimnta4euohimnwwwy.png"}
      alt="Web Development in wesmartt"
      width={450}
      height={200}
      loading="eager"
    />
  );
}

export default LandingPageVersion2;
