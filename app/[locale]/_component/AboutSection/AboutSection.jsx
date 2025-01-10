import Image from "next/image";
import LightLogoImage from "../Images_component/LightLogoImage/LightLogoImage";
import AboutERPN from "../Images_component/AboutERPN/AboutERPN";
import AboutERPNT from "../Images_component/AboutERPNT/AboutERPNT";

export default function AboutSection() {
  return (
    <>
      <div className="container" style={{ margin: "-249px auto 200px auto" }}>
        <div>
          <div
            style={{ width: "166px", height: "149px" }}
            className="abouterpI"
          >
            <AboutERPN />
          </div>
        </div>
        <div>
          <div
            style={{ width: "166px", height: "149px" }}
            className="abouterpIT"
          >
            <AboutERPNT />
          </div>
        </div>
        <div className="all-about grid grid-cols-1 lg:grid-cols-3 ">
          <div className="box">
            <h1>Lorem</h1>
            <p>
              It youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful. It
              youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful.
            </p>
          </div>
          <div className="box">
            <h1>
              <span
                style={{
                  fontFamily: "var(--lato-font)",
                  letterSpacing: "-3px",
                }}
              >
                11
              </span>{" "}
              Year
            </h1>
            <div className="about_ERPDIV">
              <h2 className="about_ERP">ERP</h2>
            </div>
            {/* <div className="maskAbs">
              <span className="eight">8</span>
            </div>
            <h1>
              <span>Ye</span>
              <span>ar</span>
            </h1> */}
            <p>
              It youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful. It
              youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful.
            </p>
          </div>

          <div className="box">
            <h1>Lorem</h1>
            <p>
              It youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful. It
              youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
