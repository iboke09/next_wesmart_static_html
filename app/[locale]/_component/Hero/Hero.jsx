"use client";
import React from "react";
import {
  // FcCircuit,
  // FcFaq,
  // FcBullish,
  // FcBarChart,
  FcCamcorderPro,
  FcAbout,
  FcImageFile 
} from "react-icons/fc";
import "aos/dist/aos.css";
import styles from "./Hero.module.css";
import Tilt from "react-vanilla-tilt";
import { motion } from "framer-motion";
import "animate.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
const Hero = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="our">
        <div className="tutan main-title">
          <h2>{t("our")}</h2>
          <h1>our major causes</h1>
        </div>
        <div className="container">
          <Tilt className={styles.hal}>
            <motion.div
              className="box"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="1.8"
            >
              <FcAbout className={styles.svgi} />
              <h2 className={styles.children}>{t("sap_s")}</h2>
              <p className={styles.children}>{t("title1")}</p>
            </motion.div>
            <Link href={'#sap'}>
              <button className="buttonda">
                More Info
                <svg className="iconda" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </Tilt>
          <Tilt className={styles.hal}>
            <motion.div
              className="box"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="1.8"
            >
              <FcCamcorderPro className={styles.svgi} />
              <h2 className={styles.children}>{t("web")}</h2>
              <p className={styles.children}>{t("title2")}</p>
            </motion.div>
            <Link href={'#web_develop'}>
              <button className="buttonda">
                More Info
                <svg className="iconda" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </Tilt>
          <Tilt className={styles.hal}>
            <motion.div
              className="box"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="1.8"
            >
              <FcImageFile  className={styles.svgi} />
              <h2 className={styles.children}>{t("design")}</h2>
              <p className={styles.children}>{t("title3")}</p>
            </motion.div>
            <Link href={'#graphic_design'}>
              <button className="buttonda">
                More Info
                <svg className="iconda" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Hero;
