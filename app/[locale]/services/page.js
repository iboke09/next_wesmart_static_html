// 'use client'

import Tagarob1 from "../_component/Tacarob1/Tagarob1";
import React from "react";
import Landing from "../_component/Landing/Landing";
import ERPSection from "../_component/ERPSection/ERPSection.jsx";
import Footer from "../_component/Footer/Footer";
import UIUXSection from "../_component/UIUXSection/UIUXSection";
import LandingPageVersion2 from "../_component/Images_component/LandingPageVersion2/LandingPageVersion2";
import Vector from "../_component/Images_component/Vector/Vector";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import translations from "../translate.json";


export async function generateMetadata({ params}) {
  const locale = params?.locale || "en";
  const t = translations[locale]?.ServicesPage || translations.en.ServicesPage;

  return {
    title: t.services_title_meta,
    description: t.about,
  };
}

export default function Services({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('ServicesPage');
  return (
    <>
      <div className="servicesLanding">
        <Landing>
          <div className="textS container">
            <div
              className="centere"
              style={{ textAlign: "left", top: "65px", position: "relative" }}
            >
              <h2>{t('title')}</h2>
              <p style={{ color: "var(--blawh-color)" }}>
              {t('about')} <br/> {t('about1')}
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
