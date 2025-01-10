"use client"
import { CldImage } from "next-cloudinary";
import React from "react";


function SalesImg() {
  return (
    <CldImage
      className="sura"
      alt={"Sap"}
      src={"fr4mvaoa363xtuhqpiqo.webp"}
      width={400}
      height={400}
      style={{
        borderRadius: "0px 67px",
      }}
      loading="eager"
    />
  );
}

export default SalesImg;
