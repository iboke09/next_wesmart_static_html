"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import { useTranslations } from "next-intl";
function Vector() {
  const t = useTranslations("ServicesPage");
  return (
    <>
      <div className="of">
        {t("erp_systems")}
        <CldImage
          src="b5uchy6wmcqdxn6mgtig.svg"
          alt="ERP Systems"
          width={40}
          height={100}
          loading="eager"
        />
      </div>
      <div className="act">
        {t("web_design")}
        <CldImage
          src="gkrk20zz9x6kfsljotpo.svg"
          alt="Web Design"
          width={40}
          height={100}
          loading="eager"
        />
      </div>
      <div className="of">
        {t("skada_systems")}
        <CldImage
          src="eixzxnyc0kyg87doo9kj.svg"
          alt="Skada Systems"
          width={40}
          height={100}
          loading="eager"
        />
      </div>
      <div className="act">
        {t("graphics_design")}
        <CldImage
          src="orie0sunnazgrnlnb2sf.svg"
          alt="UI/UX Design"
          width={40}
          height={100}
          loading="eager"
        />
      </div>
    </>
  );
}

export default Vector;
