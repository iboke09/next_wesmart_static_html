'use client'
import { CldImage } from "next-cloudinary";
import React from "react";

function TheFinalOfDesigns() {
  return (
    <CldImage
    className="tazbit"
      decoding="async"
      src={"djnjkry6cy6eho7e5wgc.png"}
      alt="wesmartt for sap and ERP systems"
      width={140}
      height={100}
      loading="lazy"
    />
  );
}

export default TheFinalOfDesigns;
