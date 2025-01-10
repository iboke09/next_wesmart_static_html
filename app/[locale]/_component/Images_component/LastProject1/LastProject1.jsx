"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

const LastProject1 = () => {
  return (
    <CldImage
      src={"h8emssjsdreqkq34tlyf.png"}
      alt="Web Development in wesmart"
      width={450}
      height={200}
      loading="lazy"
      quality="auto:best" 
    />
  );
};

export default LastProject1;
