"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {Link} from '@/i18n/routing';
// import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { useTranslations } from 'next-intl';

const Main = () => {
  const t = useTranslations('HomePage');
  const text =
    `${t('about1')}`;
  const pVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };
  const spanVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      let la = document.querySelector(".first1");
      if (la) {
        la.classList.add("animate");
      }
    }, 5000);
  }, []);
  return (
    <div className="text container">
      <div
        className="centere"
        style={{ textAlign: "left", top: "65px", position: "relative" }}
      >
        <p className="first">{t('title')}</p>
        <motion.h2 className="first1">{t('about')}</motion.h2>
        <motion.p
          className="no"
          variants={pVariants}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={spanVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <Link
          className="pro-btn animate__animated animate__zoomInLeft"
          href="/contact"
        >
          <span style={{ zIndex: "1000", fontWeight: "normal", width: "100%" }}>
            {t('contact_1')}
          </span>
        </Link>
        <Link
          className="bad-btn animate__animated animate__zoomInRight"
          href="#sap"
          style={{ fontWeight: "normal" }}
        >
          {t('learn_more')}
        </Link>
      </div>
      <div className="tawsit frameBack">
        <CldImage
          src="uhbj9zixapjeb63zvnfj.png"
          alt="alt"
          width={450}
          height={200}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Main;
