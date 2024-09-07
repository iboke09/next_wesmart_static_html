import React from "react";
import Footer from "../_component/Footer/Footer";
import Landing from "../_component/Landing/Landing";
import AboutSection from "../_component/AboutSection/AboutSection";
import SvgVector from "../_component/Images_component/SvgVector/SvgVector";
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <div className="lanoMask">
        <Landing>
          <div
            className="textA container"
          >
            <div
              className="centere"
              style={{ textAlign: "left", top: "65px", position: "relative" }}
            >
              <h2>About Our Company</h2>
              <p style={{ color: "var(--blawh-color)", width: "500px" }}>
                WeSmart specializes in website design, development, and all
                types of design, including UI/UX. Additionally, we have
                outstanding expertise in SAP, delivering industry-leading
                solutions and optimizations.
              </p>
              <a
                href="#"
                className="rulla mt-8 inline-block rounded  px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring "
              >
                <span style={{ position: "relative", zIndex: "10" }}>
                  Start Your Project
                </span>
              </a>
            </div>

            <div className="tawsitS A" style={{ top: "-70px" }}>
              <SvgVector />
            </div>
          </div>
        </Landing>
        <Link href="#aboutUs">
          <FaAngleDoubleDown
            style={{
              color: "#3d72b9",
              margin: "auto",
              top: "-80px",
              position: "relative",
              fontSize: "45px",
              animation: "bouncing 1.5s infinite",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
      <AboutSection />
      <Footer />
    </>
  );
};

export default About;
