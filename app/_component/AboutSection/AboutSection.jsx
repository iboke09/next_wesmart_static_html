export default function AboutSection() {
  return (
    <>
      <div
        className="image-darta"
        style={{ textAlign: "right", zIndex: "100" }}
      >
        <img width={400} height={100} src={"/img/Light_Logo.svg"} alt="Wesmart Technologies" loading="lazy"/>
      </div>
      <div className="container" style={{ margin: "100px auto 100px auto" }}>
        <div className="all-about grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-16">
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
            <div className="maskAbs">
              <span className="eight">8</span>
            </div>
            <h1>
              <span>Ye</span>
              <span>ar</span>
            </h1>
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
