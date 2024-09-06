'use client'
import React from "react";
import { CldImage } from "next-cloudinary";

function UiUx() {
  return (
    <CldImage
      src={"lqlhskgc36ducnz0ouni.png"}
      alt="Web Development"
      width={280}
      height={100}
      loading="lazy"
    />
  );
}   

export default UiUx;
