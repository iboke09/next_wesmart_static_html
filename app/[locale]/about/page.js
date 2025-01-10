import React from "react";
import Footer from "../_component/Footer/Footer";
import Landing from "../_component/Landing/Landing";
import AboutSection from "../_component/AboutSection/AboutSection";
import SvgVector from "../_component/Images_component/SvgVector/SvgVector";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import translations from "../translate.json";


export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  const t = translations[locale]?.AboutPage || translations.en.AboutPage;

  return {
    title: t.about_title_meta,
    description: t.about,
  };
}


const About = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  return (
    <>
      <div className="lanoMask">
        <Landing>
          <div className="textA container">
            <div
              className="centere"
              style={{ textAlign: "left", top: "65px", position: "relative" }}
            >
              <h2>{t("title")}</h2>
              <p style={{ color: "var(--blawh-color)", width: "500px" }}>
                {t("about")}
              </p>
              <a
                href="#"
                className="rulla mt-8 inline-block rounded  px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring "
              >
                <span style={{ position: "relative", zIndex: "10" }}>
                  {t("about1")}
                </span>
              </a>
            </div>

            <div className="tawsitS A" style={{ top: "-95px" }}>
              <SvgVector />
            </div>
          </div>
        </Landing>
        {/* <Link href="#aboutUs">
          <FaAngleDoubleDown
            style={{
              color: "#3d72b9",
              margin: "auto",
              top: "-85px",
              position: "relative",
              fontSize: "45px",
              animation: "bouncing 1.5s infinite",
              cursor: "pointer",
            }}
          />
        </Link> */}
      </div>
      <AboutSection />
      <Footer />
    </>
  );
};

export default About;
