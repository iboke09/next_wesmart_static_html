// components/ContactForm.js
"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import Footer from "../_component/Footer/Footer";
import Landing from "../_component/Landing/Landing";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";
import GridGlobe from "../_component/GridGlobe/GridGlobe";
import Link from "next/link";

const Contact = () => {
  // const [messageStatus, setMessageStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_email: "",
    phone_number: "",
    message: "",
  });

  const triggerEmail = async (data) => {
    setIsLoading(true);
    await emailjs
      .send(
        "service_pv5ogp6",
        "template_csebbz8",
        formData,
        "U7Ed0tKLtms1lZg0_"
      )
      .then((success) => {
        alert("The Email Has Been Sent Successfully.");
        setIsLoading(false);
        setFormData({
          from_name: "",
          sure_name: "",
          from_email: "",
          phone_number: "",
          message: "",
        });
      })
      .catch((err) => {
        alert("Sorry, Failed To Send Email");
      });
  };

  const onFormSubmit = (e) => {
    console.log(e.target);
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };
    console.log(data);
    triggerEmail(data);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // setRequestLocale(locale);
  const t = useTranslations("ContactPage");
  return (
    <div className="contactPP">
      <title>{t("contact_title_meta")}</title>
      <div className="contactP">
        <Landing className="olurmu">
          <div style={{ top: "120px", position: "relative" }} className="raf3">
            <section>
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 inasha">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:gap-16">
                  <div className="lg:py-24 muzz">
                    <div style={{ position: "relative" }}>
                      <svg
                        className="svg-blur-before"
                        width="656"
                        height="656"
                        viewBox="0 0 656 656"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_f_3439_3190)">
                          <rect
                            x="215.688"
                            y="215.346"
                            width="225"
                            height="225"
                            rx="112.5"
                            fill="#1C8DF5"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_3439_3190"
                            x="0.388474"
                            y="0.0457001"
                            width="655.6"
                            height="655.6"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="107.65"
                              result="effect1_foregroundBlur_3439_3190"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <h2 className="meet-wesmart-head">{t("Meet_Wesmart")}</h2>
                      <h3 className="contact-wesmart-head">
                        {t("Meet_Wesmart1")}
                      </h3>
                      <form
                        onSubmit={onFormSubmit}
                        // className={styles.contactForm}
                        className="contactForm"
                      >
                        <div>
                          <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder={t("name")}
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            id="sure_name"
                            name="sure_name"
                            value={formData.sure_name}
                            onChange={handleChange}
                            placeholder={"Sure Name"}
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            id="from_email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            placeholder={t("email")}
                            required
                          />
                        </div>
                        <div>
                          <input
                            // type="number"
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            placeholder={"Phone Number"}
                            required
                          />
                        </div>
                        <div>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t("message")}
                            required
                          />
                        </div>
                        <button type="submit" className="submit-button">
                          {isLoading ? (
                            <span className="loader"></span>
                          ) : (
                            `${t("send")}`
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                  <GridGlobe />
                </div>
              </div>
            </section>
          </div>
          <div className="contact-alt-bolum" style={{ position: "relative" }}>
            <svg
              className="svg-blur-after"
              width="656"
              height="656"
              viewBox="0 0 656 656"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_3439_3190)">
                <rect
                  x="215.688"
                  y="215.346"
                  width="225"
                  height="225"
                  rx="112.5"
                  fill="#1C8DF5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_3439_3190"
                  x="0.388474"
                  y="0.0457001"
                  width="655.6"
                  height="655.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="107.65"
                    result="effect1_foregroundBlur_3439_3190"
                  />
                </filter>
              </defs>
            </svg>
            <h2 className="meet-wesmart-anywhere">{t("Meet_Wesmart2")}</h2>
          </div>
          <div className="contact-section mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.1047848511216!2d29.064226924312816!3d40.22897236704606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3fc009054c51%3A0x443fa5290fbf6879!2sOkumu%C5%9Flar%20Plaza!5e0!3m2!1sar!2str!4v1737478304176!5m2!1sar!2str"
                width="600"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="olcaksvg">
                <svg
                  className="svg-blur-before"
                  width="656"
                  height="656"
                  viewBox="0 0 656 656"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_3439_3190)">
                    <rect
                      x="215.688"
                      y="215.346"
                      width="225"
                      height="225"
                      rx="112.5"
                      fill="#1C8DF5"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_3439_3190"
                      x="0.388474"
                      y="0.0457001"
                      width="655.6"
                      height="655.6"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="107.65"
                        result="effect1_foregroundBlur_3439_3190"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="">
                  Bursa. Osmangazi. Panayır Mah. Hilton arkasında Okumuşlar
                  Plaza A Blok Kat 15 Daire 77
                </p>
                <Link
                  href="https://www.google.com/maps/place/Okumu%C5%9Flar+Plaza/@40.230344,29.062062,15z/data=!4m6!3m5!1s0x14ca3fc009054c51:0x443fa5290fbf6879!8m2!3d40.2289683!4d29.061652!16s%2Fg%2F11h6pvj9by?hl=ar&entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="inline-flex op"
                >
                  {t("Meet_Wesmart3")}
                </Link>
              </div>
            </div>
            <div className="" style={{ marginTop: "35px" }}>
              <div className="contact-info">
                <div className="svgs">
                  <svg
                    width="47"
                    height="83"
                    viewBox="0 0 47 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3442_20271)">
                      <path
                        d="M37.322 82.5739H9.67015C4.32612 82.5739 -0.00390625 78.2599 -0.00390625 72.9357L-0.00382531 9.94487C-0.00382531 4.62063 4.3262 0.306641 9.67023 0.306641H37.3221C42.6661 0.306641 46.9962 4.62063 46.9962 9.94487L46.9961 72.9357C46.9961 78.2599 42.6661 82.5739 37.322 82.5739ZM9.67023 3.06432C5.8609 3.06432 2.7641 6.14964 2.7641 9.94487L2.76402 72.9357C2.76402 76.7309 5.86082 79.8162 9.67015 79.8162H37.322C41.1314 79.8162 44.2282 76.7309 44.2282 72.9357L44.2282 9.94487C44.2282 6.14964 41.1315 3.06432 37.3221 3.06432H9.67023Z"
                        fill="url(#paint0_linear_3442_20271)"
                      />
                      <path
                        d="M28.2238 15.57H18.7416C17.2069 15.57 15.9736 14.3414 15.9736 12.8124C15.9736 11.2834 17.2069 10.0547 18.7416 10.0547H28.2238C29.7585 10.0547 30.9917 11.2834 30.9917 12.8124C30.9917 14.3414 29.7585 15.57 28.2238 15.57Z"
                        fill="url(#paint1_linear_3442_20271)"
                      />
                      <path
                        d="M32.4436 77.1034H14.548C13.7806 77.1034 13.1777 76.4754 13.1777 75.7382C13.1777 75.001 13.8081 74.373 14.548 74.373H32.4436C33.211 74.373 33.8139 75.001 33.8139 75.7382C33.8139 76.4754 33.1836 77.1034 32.4436 77.1034Z"
                        fill="url(#paint2_linear_3442_20271)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_3442_20271"
                        x1="-7.89662"
                        y1="0.961931"
                        x2="45.6377"
                        y2="75.4167"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#27B9F1" />
                        <stop offset="1" stopColor="#2E368E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_3442_20271"
                        x1="7.23136"
                        y1="-9.65863"
                        x2="59.4838"
                        y2="63.0441"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#27B9F1" />
                        <stop offset="1" stopColor="#2E368E" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_3442_20271"
                        x1="-22.9972"
                        y1="11.5198"
                        x2="29.2553"
                        y2="84.2225"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#27B9F1" />
                        <stop offset="1" stopColor="#2E368E" />
                      </linearGradient>
                      <clipPath id="clip0_3442_20271">
                        <rect
                          width="47"
                          height="82"
                          fill="white"
                          transform="translate(-0.00390625 0.599609)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <div>
                    <span>+90 552 791 42 20</span>
                  </div>
                  <div>
                    <span>+90 501 052 16 16</span>
                  </div>
                  <div>
                    <span>+90 537 766 71 93</span>
                  </div>
                </div>
                <div>
                  <div className="">
                    <span className="rolec">({t("Consultancy")})</span>
                  </div>
                  <div className="">
                    <span className="rolec">({t("Development")})</span>
                  </div>
                  <div className="">
                    <span className="rolec">({t("Branding")})</span>
                  </div>
                </div>
              </div>
              <div className="contacticonsinfo">
                <svg
                  width="47"
                  height="38"
                  viewBox="0 0 47 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3442_20275)">
                    <path
                      d="M43.2906 0.765625H3.70159C1.66954 0.765625 -0.00390625 2.43444 -0.00390625 4.46086V34.0704C-0.00390625 36.1207 1.66954 37.7656 3.70159 37.7656H43.2906C45.3466 37.7656 46.9961 36.1207 46.9961 34.0704V4.46086C46.9961 2.43444 45.3466 0.765625 43.2906 0.765625ZM2.45845 4.46086C2.45845 3.79333 3.03221 3.22117 3.70159 3.22117H43.2906C43.9839 3.22117 44.5337 3.79333 44.5337 4.46086V5.03302L23.4961 17.8352L2.45845 5.03302V4.46086ZM44.5337 34.0704C44.5337 34.7618 43.9839 35.3101 43.2906 35.3101H3.70159C3.03221 35.3101 2.45845 34.7618 2.45845 34.0704V7.89385L22.8506 20.3384C23.0419 20.4576 23.2809 20.5053 23.4961 20.5053C23.7113 20.5053 23.9503 20.4576 24.1416 20.3384L44.5337 7.89385V34.0704Z"
                      fill="url(#paint0_linear_3442_20275)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_3442_20275"
                      x1="2.50627"
                      y1="3.31653"
                      x2="42.6348"
                      y2="33.987"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#27B9F1" />
                      <stop offset="1" stopColor="#2E368E" />
                    </linearGradient>
                    <clipPath id="clip0_3442_20275">
                      <rect
                        width="47"
                        height="37"
                        fill="white"
                        transform="translate(-0.00390625 0.765625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <a href="mailto:info@wesmartt.com">info@wesmartt.com</a>
              </div>
            </div>
          </div>
          <div
            style={{ top: "200px", position: "relative" }}
            className="footer_top"
          ></div>
          <div className="ihfa2">
            <Footer />
          </div>
        </Landing>
      </div>
      <div className="ihfa contactihfa">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
