"use client";
import React, { Suspense } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "@/app/loading";
import IMG_0480 from "../Images_component/IMG_0480/IMG_0480";
import V2 from "../Images_component/v2/v2";
import V4 from "../Images_component/V4/V4";
import V3 from "../Images_component/V3/V3";
const Our = () => {
  useEffect(() => {
    AOS.init({
      // once: true,
    });
  }, []);
  return (
    <>
      <div className="meet" id="meet">
        {/* <Suspense fallback={<Loading/>}> */}
        <div
          className="tutan main-title"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h2>Meet Our Team</h2>
        </div>
        <div className="container">
          <div
            className="box"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          >
            <Link href="/sales" id="sales">
              {" "}
              <IMG_0480/>
            </Link>

            <div className="tutan">
              <h3 className="head">Abdullah Shwehenh</h3>
              <p style={{ margin: "13px 0px" }}>Sales Manager</p>
              <p style={{ margin: "20px 0px" }}>
                So seed seed green that winged cattle in kath moved us land
                years living.
              </p>
              <div className="sochial">
                <Link
                  href="https://www.youtube.com/@omr94/asfgats"
                  aria-label="Read more about the economic outlook for the next decade"
                  className="active"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?afvvsM&ab_cs%D8%B9%Df%D9%8A-bashararabi"
                  aria-label="Read more about the latest trends in sustainable fashion"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=wxxqpmCiSYg&ab_channegasd9%85%D9%88%D8%B5%D8%A8%D8%B1%D9%8A%7Cmosabri"
                  aria-label="Read more about the cultural significance of Diwali in India"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.youtube.com/shorts/gAzasdfgF_tyI"
                  aria-label="Read more about the effects of social media on teenagers"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1250"
          >
            <Link
              href="#developer"
              aria-label="Read more about the restoration of ancient artifacts in Egypt"
            >
              <V2/>
            </Link>

            <div className="tutan">
              <h3 className="head">Adam Virland</h3>
              <p style={{ margin: "13px 0px" }}>Party Manager</p>
              <p style={{ margin: "20px 0px" }}>
                So seed seed green that winged cattle in kath moved us land
                years living.
              </p>
              <div className="sochial">
                <Link
                  href="https://www.youtube.com/@omr94/asdghts"
                  aria-label="Read more about the groundbreaking cancer research at Johns Hopkins"
                  className="active"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=kF-Yvasdd&ab_channel=%D8%gasd%B1%D8%B9%D8%B1%D8%A8%D9%8A-bashararabi"
                  aria-label="Read more about the benefits of yoga and meditation"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=wxxqpmCiSYg&ab_channel=%D9%8asffD8%B1%D9%8A%7Cmosabri"
                  aria-label="Read more about the top 10 travel destinations for 2024"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.youtube.com/shorts/gasdF_tyI"
                  aria-label="Read more about the new features in the latest iPhone release"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500"
          >
            <Link
              href="#web"
              aria-label="Read more about the benefits of renewable energy sources"
            >
              {" "}
              <V4/>
            </Link>
            <div className="tutan">
              <h3 className="head">Adam Virland</h3>
              <p style={{ margin: "13px 0px" }}>Party Manager</p>
              <p style={{ margin: "20px 0px" }}>
                So seed seed green that winged cattle in kath moved us land
                years living.
              </p>
              <div className="sochial">
                <Link
                  href="https://www.youtube.com/asddf/sasd"
                  className="active"
                  aria-label="Read more about the importance of mental health awareness"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://www.youtube.com/sdaatchasdab_channel=%D8%A8%D8%B4%D8%Aasdasdrarabi"
                  aria-label="Read more about the history of the Great Wall of China"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=wxxqpmCiSYg&ab_channasd"
                  aria-label="Read more about the benefits of a healthy Mediterranean diet"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.youtube.com/shorasdts/gasdasdAzW4MF_tyI"
                  aria-label="Read more about the impact of climate change on polar bears"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1750"
          >
            <Link
              href="#site"
              aria-label="Read more about the evolution of the internet and its future"
            >
              <V3/>
            </Link>

            <div className="tutan">
              <h3 className="head">Alea Mirslava</h3>
              <p style={{ margin: "13px 0px" }}>Party Manager</p>
              <p style={{ margin: "20px 0px" }}>
                So seed seed green that winged cattle in kath moved us land
                years living.
              </p>
              <div className="sochial">
                <Link
                  href="https://www.youtube.com/@omr94/"
                  className="active"
                  aria-label="Read more about the new electric car model from Tesla"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://www.youtube.com/asd"
                  aria-label="Read more about the latest advancements in AI technology"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="https://www.youtube.com/eaf"
                  aria-label="Read more about the upcoming tech conference in San Francisco"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.youtube.com/shortss/"
                  aria-label="Read more about Seminole's new baby mayor"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{}} className="maskoy"></div>
          <div></div>
          <div></div> */}
        {/* </Suspense> */}
      </div>
    </>
  );
};

export default Our;
