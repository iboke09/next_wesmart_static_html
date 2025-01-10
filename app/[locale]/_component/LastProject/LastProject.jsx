import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import LastProject2 from '../Images_component/LastProject2/LastProject2'
import LastProject1 from '../Images_component/LastProject1/LastProject1'
const LastProject = () => {
  return (
    <>
      <div
        className="lastProject"
        style={{
          width: "100vw",
          position: "relative",
          height: "85vh",
          marginTop: "100px",
          marginBottom: "70px",
          textAlign: "center",
        }}
      >
        <div className="container last">
          <h1>our Last Project</h1>
          <h2>Web Software Project</h2>
          <div className="mask-last">
            <div className="textli">
              <h3>UI/UX Design</h3>
              <h3>Web Development</h3>
              <p>
                Wesmart undertook the comprehensive UI/UX redesign and
                development of SaadPlast’s website. The project focused on
                creating an intuitive and engaging user experience, showcasing
                Saad Plast’s prestigious heritage and innovative approach.
              </p>
              <a href="#" className="buttonlast">
                Visit Website
                <div className="iconlast">
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>
            <div className="fotolu">
                <LastProject1/>
                <LastProject2/>
            </div>
        </div>
      </div>
    </>
  );
};

export default LastProject;
