import React from "react";
import { useTranslations } from "next-intl";
export default function Component() {
  const t = useTranslations("HomePage");
  return (
    <div className="relative w-full h-[80vh] overflow-hidden youy">
      <video autoPlay muted loop playsInline  style={{height:"100%"}} className="videoT">
        <source src={"/_next-videos/Technology.mp4"} type="video/mp4" />
      </video>
      <span className="absolute inset-0 w-full h-full object-cover rounded-md bg-muted" />
      <div className="absolute inset-0 maskV flex items-center justify-center">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          <div className="space-y-4 place-content-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t('transfor')}
            </h2>
            <p className="text-lg md:text-xl">
              {t('transfor_title')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold">150+</p>
              <p className="text-lg">{t("transfor_desc")}</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold">95%</p>
              <p className="text-lg">{t("transfor_desc2")}</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold">120+</p>
              <p className="text-lg">{t("transfor_desc4")}</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-lg">{t("transfor_desc4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
