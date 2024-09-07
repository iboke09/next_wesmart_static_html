"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

function NotFound() {
  return (
    <CldImage
      src={"s4esgtkq0rqkleiycnrd.svg"}
      width={500}
      height={100}
      alt="error illustration"
      className="left-0 top-0 w-full h-full"
      loading="eager"
    />
  );
}

export default NotFound;
