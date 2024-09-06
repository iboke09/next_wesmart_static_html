"use client"
import { CldImage } from "next-cloudinary";
import React from "react";

function LightLogoImage() {
  return (
    <CldImage
      width={400}
      height={100}
      src={"plrmmuq9gi48g39blc5j.svg"}
      alt="Wesmart Technologies"
      loading="lazy"
    />
  );
}

export default LightLogoImage;
