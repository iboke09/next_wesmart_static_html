import React from "react";
import { Compare } from "../../../components/ui/compare";
import CoverText  from "../CoverText/CoverText";
export default function CompareDemo() {
  return (
    <>
      {/* <CoverText /> */}
      <div
        //   className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4"
        style={{ margin: "175px 0px",display:"flex" ,justifyContent:"center"}}
      >
        <Compare
          firstImage="ognw3umgmmnctbvammgw.png"
          secondImage="rz0oupromclv0t3bfsu5.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] blueblur relative"
          slideMode="hover"
        />
      </div>
    </>
  );
}
