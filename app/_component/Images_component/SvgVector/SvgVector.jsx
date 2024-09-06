'use client'
import React from "react";
import { CldImage } from "next-cloudinary";

function SvgVector() {
  return (
    <CldImage
      src={"kw92bjdxi0l3nuwfukjn.png"}
      alt="wesmartt for sap"
      width={450}
      height={200}
      loading="eager"
    />
  );
}

export default SvgVector;
