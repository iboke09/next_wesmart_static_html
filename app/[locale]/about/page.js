import React from "react";
import Footer from "../_component/Footer/Footer";
import Landing from "../_component/Landing/Landing";
import AboutSection from "../_component/AboutSection/AboutSection";
import SvgVector from "../_component/Images_component/SvgVector/SvgVector";
// import { FaAngleDoubleDown } from "react-icons/fa";
// import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import translations from "../translate.json";
import { Link } from "../../../i18n/routing";

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
              <Link
                href="#about_details"
                className="rulla mt-8 inline-block rounded  px-12 py-3 text-sm font-medium text-white transition focus:outline-none "
              >
                <span style={{ position: "relative", zIndex: "10" }}>
                  {t("about1")}{" "}
                  <svg
                    style={{ display: "inline" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-md text-token-text-tertiary"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </Link>
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
