import Image from "next/image";
import image from '../../img/Light_Logo.svg'
export default function AboutSection() {
    return (
        <>
        <div classname="image-darta">
        <Image width={100} height={100} src={image} alt=""/>
    </div>
    <div className="all-about">
      <div className="box">
        <h1>Lorem</h1>
        <p>
          It youre. Was called youre fowl grass lesser land together waters
          beast darkness earth land whose male all moveth fruitful. It youre.
          Was called youre fowl grass lesser land together waters beast darkness
          earth land whose male all moveth fruitful.
        </p>
      </div>
      <div className="box">
        <span className="eight">8</span>
        <h1><span>Ye</span><span>ar</span></h1>
        <p>
          It youre. Was called youre fowl grass lesser land together waters
          beast darkness earth land whose male all moveth fruitful. It youre.
          Was called youre fowl grass lesser land together waters beast darkness
          earth land whose male all moveth fruitful.
        </p>
      </div>

      <div className="box">
        <h1>Lorem</h1>
        <p>
          It youre. Was called youre fowl grass lesser land together waters
          beast darkness earth land whose male all moveth fruitful. It youre.
          Was called youre fowl grass lesser land together waters beast darkness
          earth land whose male all moveth fruitful.
        </p>
      </div>
    </div>
        </>
    )
;}