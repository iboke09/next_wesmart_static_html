// components/ContactForm.js
"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import img from "/public/img/ContactUsvector 1.svg";
import Footer from "../_component/Footer/Footer";
import Landing from "../_component/Landing/Landing";
const Contact = () => {
  const [messageStatus, setMessageStatus] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const triggerEmail = async (data) => {
    // data.preventDefault();
    await emailjs
      .send(
        "service_pv5ogp6",
        "template_csebbz8",
        formData,
        "U7Ed0tKLtms1lZg0_"
      )
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    const data = {
      name:e.target[0].value,
      email:e.target[1].value,
      message:e.target[2].value,
    }
    console.log(data)
    triggerEmail(data)
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <title>Contact - Wesmart For Technology</title>
      <div className="contactP">
        <Landing className="olurmu">
          <div style={{ top: "110px", position: "relative" }}>
            <section>
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className="relative h-64  rounded-lg sm:h-80 lg:order-last lg:h-full why1">
                    <div className="locals" style={{ position: "relative" }}>
                      <Image src={img} alt="Sap" width={1000} height={100} />
                    </div>
                  </div>

                  <div className="lg:py-24 muzz">
                    <div className={styles.contactFormContainer}>
                      <h2 className="contact_title">Contact us</h2>
                      <form
                        onSubmit={onFormSubmit}
                        className={styles.contactForm}
                      >
                        <div className={styles.inputGroup}>
                          <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className={styles.input}
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <input
                            type="email"
                            id="from_email"
                            name="from_email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className={styles.input}
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                            className={styles.textarea}
                          />
                        </div>
                        <button type="submit" className={styles.button}>
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            style={{ top: "200px", position: "relative" }}
            className="footer_top"
          >
            <Footer />
          </div>
        </Landing>
      </div>
    </>
  );
};

export default Contact;
