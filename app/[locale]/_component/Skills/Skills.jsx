"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FcSupport } from "react-icons/fc";
import { SiCodesignal } from "react-icons/si";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";
import Aos from "aos";
const Skills = () => {
  const t = useTranslations("HomePage");
  useEffect(() => {
    Aos.init({
      // once: true,
    });
  }, []);
  return (
    <>
      <div className="ski B" id="sap">
        <div className="container">
          <div className="animatio" id="sap">
            <motion.div
              data-aos="fade-up"
              className="gitA"
              whileInView={{ height: "150px" }}
              transition={{ duration: 0.2, delay: 0.35 }}
            ></motion.div>
            <div data-aos="fade-up">
              <FcSupport />
              <div className="gitbe"></div>
            </div>
            <motion.div
              data-aos="fade-up"
              className="gitA_2"
              whileInView={{ height: "185px" }}
              transition={{ duration: 0.2, delay: 0.65 }}
            ></motion.div>
          </div>
          <div className="container content">
            <h2 className="title blawh text-xl" data-aos="fade-left">
              {t("wes")}
            </h2>
            <h2 className="title-2 blawh text-4xl" data-aos="fade-left">
              SAP
            </h2>
            <p className="blawh" data-aos="fade-left">
              {t("wes_des")}
            </p>
          </div>
          <div className="mask" data-aos="fade-up">
            <h2 className="title">{t("sap_c")}</h2>
            <div className="mask-big">
              <div className="mask-small sm1">
                <CldImage
                  src={"pcspzpb8zg4pxpththfd.jpg"}
                  className="sapimg"
                  width={200}
                  height={200}
                  alt="sap erp "
                  loading="lazy"
                />
                <p className="text1">{t("sap_c_des_1")}</p>
              </div>
              <div className="mask-small sm2">
                <CldImage
                  src={"gvwerrzdhy0fhwqucjhd.jpg"}
                  className="sapimg2"
                  width={200}
                  height={200}
                  alt="sap erp"
                  loading="lazy"
                />
                <p className="text2">{t("sap_c_des_1")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ski o" id='graphic_design'>
        <div className="container">
          <div className="animatio">
            <motion.div
              data-aos="fade-up"
              style={{
                background: "linear-gradient(85deg, #eb68b3, transparent) ",
              }}
              className="gitA"
              whileInView={{ height: "150px" }}
              transition={{ duration: 0.2, delay: 0.35 }}
            ></motion.div>
            <div data-aos="fade-up">
              <SiCodesignal style={{ color: "gray" }} />
              <div className="gitbe o"></div>
            </div>
            <motion.div
              data-aos="fade-up"
              style={{
                background: " linear-gradient(95deg,#eb68b3, transparent)",
              }}
              className="gitA_2 t"
              whileInView={{ height: "185px" }}
              transition={{ duration: 0.2, delay: 0.65 }}
            ></motion.div>
          </div>
          <div className="container content">
            <h2 className="title blawh text-xl" data-aos="fade-left">
              {t("wes")}
            </h2>
            <h2
              className="title-2 blawh text-4xl ue"
              data-aos="fade-left"
              style={{ color: "#eb68b3 !important" }}
            >
              {t("wes_g")}
            </h2>
            <p className="blawh" data-aos="fade-left">
              {t("web_g_des")}
            </p>
          </div>
          <CldImage
            src="h1bdgbt75tssifvirzvp.svg"
            style={{
              position: "absolute",
              left: "1300px",
              top: "165px",
              zIndex: "1",
            }}
            className="kayip"
            alt="Sap and Erp"
            width={800}
            height={800}
            loading="lazy"
          />
          <CldImage
            src={"mgbt5sjxtoyzhvhbdquv.png"}
            style={{ position: "absolute", left: "1300px", top: "165px" }}
            className="kayip1"
            alt="Web development"
            width={1200}
            height={1200}
            loading="lazy"
          />
          <div className="mask" data-aos="fade-up">
            <h2 className="title ue" style={{ color: "#eb68b3 !important" }}>
              {t("web_g_title_1")}
            </h2>
            <div className="mask-big">
              <div className="mask-small sm1">
                <CldImage
                  src={"odkervbvp6ozr9rxshdo.jpg"}
                  className="sapimg"
                  width={200}
                  height={200}
                  alt="sap"
                  loading="lazy"
                />
                <p className="text1">{t("web_g_des_1")}</p>
              </div>
              <div className="mask-small sm2">
                <CldImage
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  src={"us2zyqrdlxtwr95ukm3j.jpg"}
                  className="sapimg2"
                  width={200}
                  height={200}
                  alt="sap"
                />
                <p className="text2">{t("web_g_des_2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ski t" id="web_develop">
        <div className="container">
          <div className="animatio" >
            <motion.div
              data-aos="fade-up"
              className="gitA"
              whileInView={{ height: "150px" }}
              transition={{ duration: 0.2, delay: 0.35 }}
            ></motion.div>
            <div data-aos="fade-up">
              <FcSupport />
              <div className="gitbe"></div>
            </div>
            <motion.div
              data-aos="fade-up"
              className="gitA_2"
              whileInView={{ height: "185px" }}
              transition={{ duration: 0.2, delay: 0.65 }}
            ></motion.div>
          </div>
          <div className="container content">
            <h2 className="title blawh text-xl" data-aos="fade-left">
              {t("wes")}
            </h2>
            <h2 className="title-2 blawh text-4xl" data-aos="fade-left">
              {t("web_d")}
            </h2>
            <p className="blawh" data-aos="fade-left">
              {t("web_d_title_1")}
            </p>
          </div>
          <div className="mask" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="title">{t("web_d_title_2")}</h2>
            <div className="mask-big">
              <div className="mask-small sm1">
                <CldImage
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  src={"a7fl6cma1rzyqakxddua.jpg"}
                  className="sapimg"
                  width={200}
                  height={200}
                  alt="wesmartt"
                  loading="lazy"
                />
                <p className="text1">{t("web_d_des_1")}</p>
              </div>
              <div className="mask-small sm2">
                <CldImage
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  src={"idcmjs8tkoa4jhjdbzyv.jpg"}
                  className="sapimg2"
                  width={200}
                  height={200}
                  alt="wesmartt"
                  loading="lazy"
                />
                <p className="text2">{t("web_d_des_2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
