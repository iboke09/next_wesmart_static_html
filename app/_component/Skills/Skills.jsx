"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FcSupport } from "react-icons/fc";
import imageS from "/public/img/enterprise-resource-planning-holographic-interface.jpg";
import imageS1 from "/public/img/abstract-background-with-low-poly-design.jpg";
import image22 from "/public/img/emily-bernal-BM3U_D2lygo-unsplash.jpg";
import image23 from "/public/img/kelly-sikkema-Dx1b5ucschA-unsplash.jpg";
import image24 from "/public/img/florian-olivo-4hbJ-eymZ1o-unsplash.jpg";
import image25 from "/public/img/jefferson-santos-9SoCnyQmkzI-unsplash.jpg";
import image26 from "/public/img/nothingso-19.png";
import { SiCodesignal } from "react-icons/si";
const Skills = () => {
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
              Wesmart Technology
            </h2>
            <h2 className="title-2 blawh text-4xl" data-aos="fade-left">
              SAP
            </h2>
            <p className="blawh" data-aos="fade-left">
              Elevate Your Business with Expert SAP Solutions
            </p>
          </div>
          <div className="mask" data-aos="fade-up">
            <h2 className="title">SAP CONSALTENT</h2>
            <Image
              src={imageS}
              className="sapimg"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text1">
              Maximize efficiency with our SAP solutions — we streamline
              operations and offer expert support.
            </p>
            <Image
              src={imageS1}
              className="sapimg2"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text2">
              Boost your edge with our SAP implementation — we ensure smooth
              transitions and top performance.
            </p>
          </div>
        </div>
      </div>
      <div className="ski o">
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
              Wesmart Technology
            </h2>
            <h2
              className="title-2 blawh text-4xl ue"
              data-aos="fade-left"
              style={{ color: "#eb68b3 !important" }}
            >
              Graphic
            </h2>
            <p className="blawh" data-aos="fade-left">
              Captivate Your Audience with Innovative Graphic Designs
            </p>
          </div>
          <Image
            src="https://github.githubassets.com/assets/shape-2-f30dcc9bd35c.svg"
            style={{
              position: "absolute",
              left: "1300px",
              top: "165px",
              zIndex: "1",
            }}
            className="kayip"
            alt=""
            width={800}
            height={800}
          />
          <Image
            src={image26}
            style={{ position: "absolute", left: "1300px", top: "165px" }}
            className="kayip1"
            alt=""
            width={1200}
            height={1200}
          />
          <div className="mask" data-aos="fade-up">
            <h2 className="title ue" style={{ color: "#eb68b3 !important" }}>
              Graphic Design
            </h2>
            <Image
              src={image22}
              className="sapimg"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text1">
              Captivate with our graphic design — we bring your brand&apos;s
              vision to life with stunning visuals.
            </p>
            <Image
              // data-aos="fade-up"
              // data-aos-duration="1000"
              src={image23}
              className="sapimg2"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text2">
              Our designs effectively communicate your message and leave a
              lasting impression.
            </p>
          </div>
        </div>
      </div>
      <div className="ski t">
        <div className="container">
          <div className="animatio">
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
              Wesmart Technology
            </h2>
            <h2 className="title-2 blawh text-4xl" data-aos="fade-left">
              Web Design & Development
            </h2>
            <p className="blawh" data-aos="fade-left">
              Create Stunning Websites with Our Design and Development
            </p>
          </div>
          <div className="mask" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="title">Web Development</h2>
            <Image
              // data-aos="fade-up"
              // data-aos-duration="1000"
              src={image25}
              className="sapimg"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text1">
              We create attractive, fast websites that work on all devices,
              ensuring a smooth user experience.
            </p>
            <Image
              // data-aos="fade-up"
              // data-aos-duration="1000"
              src={image24}
              className="sapimg2"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text2">
              We boost your best site’s visibility and performance with effective SEO
              techniques to drive more traffic and improve rankings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
