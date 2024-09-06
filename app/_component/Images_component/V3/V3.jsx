import React from "react";
import { CldImage } from "next-cloudinary";

function V3() {
  return (
    <CldImage
      src={"th96nbmcrd1pcmzk5u1n.webp"}
      width={1000}
      height={100}
      alt="wesmartt"
      loading="lazy"
    />
  );
}

export default V3;
