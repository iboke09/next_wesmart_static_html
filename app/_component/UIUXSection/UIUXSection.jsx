export default function UIUXSection() {
  return (
    <>
      <div
        className="theAPP"
        style={{
          height: "100vh",
          backgroundColor: "var(--main-alt-color1)",
          transition: "0.7s",
          textAlign: "center",
          marginBottom: "285px",
        }}
      >
        <h1 className="headerUI">Softwer design</h1>
        <div className="container UI">
          <div className="maskUI I">
            <div className="icermaskUI">
              <img src={"/img/uiuxS.png"} alt="" width={280} height={100} loading="lazy" />
              <div className="boxUI">
                <h2 className="mainUItitle">UI/UX Design</h2>
                <p>
                  We specialize in UI/UX design, focusing on creating intuitive
                  and visually engaging user experiences. Our designs enhance
                  usability and ensure smooth, effective interactions, aligning
                  with your business goals and user needs.
                </p>
              </div>
              <img
                src={"/img/WebSectionIllustration_11zon.png"}
                alt="alt"
                width={250}
                height={100}
                className="ilstU"
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="icermaskUI">
              <div className="boxUI">
                <h2 className="mainUItitle">Web Development</h2>
                <p className="">
                  We design and develop high-quality, fast, and efficient
                  websites and online stores. Our tailored solutions ensure
                  excellent performance and user satisfaction, meeting your
                  unique needs with expertise and precision.
                </p>
              </div>
              <button className="UIcontactBtn">
                <span style={{ position: "relative", zIndex: "100" }}>
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
