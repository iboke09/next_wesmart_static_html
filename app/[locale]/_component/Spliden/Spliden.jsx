"use client";
import Data from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import "./Spliden";
import "./index.scss";
import { useTranslations } from "next-intl";
const Spliden = () => {
  const t = useTranslations("HomePage");
  const services = Data();
  return (
    <>
      <div
        className="hait"
        style={{
          width: "100vw",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "85vh",
          marginTop: "100px",
          marginBottom: "70px",
        }}
      >
        <div
          className="containerS"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>{t("experience")}</h1>
          <h2>our major causes</h2>
          <div className="cards" style={{ zIndex: "40" }}>
            <Splide
              aria-label="Testimonials"
              options={{
                type: "loop",
                focus: "center",
                isNavigation: true,
                autoplay: true,
                perPage: 2,
              }}
            >
              {services.map((item) => (
                <SplideSlide key={item.id} style={{ width: "50vw" }}>
                  <div className="card">
                    {item.img}
                    <h2 style={{ textAlign: "center" }}>{item.name}</h2>
                    <p className="splideP">{item.text}</p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spliden;
