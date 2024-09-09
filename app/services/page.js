// 'use client'

import Navbar from "../_component/Navbar/Navbar";
import Tagarob1 from "../_component/Tacarob1/Tagarob1";
import React from "react";
import styles from "./Services.module.css";
import Landing from "../_component/Landing/Landing";
import ERPSection from "../_component/ERPSection/ERPSection.jsx";
import Footer from "../_component/Footer/Footer";
import UIUXSection from "../_component/UIUXSection/UIUXSection";
import LandingPageVersion2 from "../_component/Images_component/LandingPageVersion2/LandingPageVersion2";
import { CldImage } from "next-cloudinary";
import Vector from "../_component/Images_component/Vector/Vector";

export const metadata = {
  title: "Services",
};
export default function Services() {
  return (
    <>
      <div className="servicesLanding">
        <Landing>
          <div className="textS container">
            <div
              className="centere"
              style={{ textAlign: "left", top: "65px", position: "relative" }}
            >
              <h2>Our Services</h2>
              <p style={{ color: "var(--blawh-color)" }}>
                We provide four services, all delivered with great skill,
                professionalism,
                <br /> and expertise. acilisis tortor malesuada malesuada.
              </p>
              <div
                className="grid grid-cols-2 gap-6  top-20 relative gridS imagemuhassen "
                style={{ columnGap: "0.5rem" }}
              >
                <Vector />
              </div>
            </div>
            <div className="tawsitS" style={{ top: "30px" }}>
              <LandingPageVersion2 />
            </div>
          </div>
        </Landing>
        <ERPSection />
        <UIUXSection />
        <Tagarob1 />
        <Footer />
      </div>
    </>
  );
}
