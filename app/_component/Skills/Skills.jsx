"use client";
import React from "react";
import { motion } from "framer-motion";
import { FcSupport } from "react-icons/fc";
import { SiCodesignal } from "react-icons/si";
import { CldImage } from "next-cloudinary";
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
            <CldImage
              src={"pcspzpb8zg4pxpththfd.jpg"}
              className="sapimg"
              width={200}
              height={200}
              alt="sap erp "
              loading="lazy"
            />
            <p className="text1">
              Maximize efficiency with our SAP solutions — we streamline
              operations and offer expert support.
            </p>
            <CldImage
              src={"gvwerrzdhy0fhwqucjhd.jpg"}
              className="sapimg2"
              width={200}
              height={200}
              alt="sap erp"
              loading="lazy"
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
              Graphic Design
            </h2>
            <CldImage
              src={"odkervbvp6ozr9rxshdo.jpg"}
              className="sapimg"
              width={200}
              height={200}
              alt="sap"
              loading="lazy"
            />
            <p className="text1">
              Captivate with our graphic design — we bring your brand&apos;s
              vision to life with stunning visuals.
            </p>
            <CldImage
              // data-aos="fade-up"
              // data-aos-duration="1000"
              src={"us2zyqrdlxtwr95ukm3j.jpg"}
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
            <p className="text1">
              We create attractive, fast websites that work on all devices,
              ensuring a smooth user experience.
            </p>
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
            <p className="text2">
              We boost your best site’s visibility and performance with
              effective SEO techniques to drive more traffic and improve
              rankings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
