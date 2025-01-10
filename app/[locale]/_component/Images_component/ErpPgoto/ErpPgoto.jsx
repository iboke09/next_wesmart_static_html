"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

function ErpPgoto() {
  return (
    <CldImage
      src={"dnm7ud7ph9pj19md6bbt.png"}
      alt="ERP Systems"
      width={270}
      height={100}
      loading="lazy"
    />
  );
}

export default ErpPgoto;
