import React from "react";
import { CldImage } from "next-cloudinary";

function V4() {
  return (
    <CldImage
      src={"flcuowmzwdeavmg7jxii.webp"}
      width={1000}
      height={100}
      alt="wesmartt"
      loading="lazy"
    />
  );
}

export default V4;
