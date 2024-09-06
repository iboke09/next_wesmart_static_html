'use client'
import { CldImage } from "next-cloudinary";
import React from "react";

function Vector() {
  return (
    <>
      <div className="of">
        ERP Systems
        <CldImage src="b5uchy6wmcqdxn6mgtig.svg" alt="ERP Systems" width={40} height={100} />
      </div>
      <div className="act">
        Web Design
        <CldImage src="gkrk20zz9x6kfsljotpo.svg" alt="Web Design" width={40} height={100} />
      </div>
      <div className="of">
        Skada Systems
        <CldImage src="eixzxnyc0kyg87doo9kj.svg" alt="Skada Systems" width={40} height={100} />
      </div>
      <div className="act">
        UI/UX Design
        <CldImage src="orie0sunnazgrnlnb2sf.svg" alt="UI/UX Design" width={40} height={100} />
      </div>
    </>
  );
}

export default Vector;
