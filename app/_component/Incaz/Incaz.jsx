import React from "react";
export default function Component() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden youy">
      <video autoPlay muted loop playsInline  style={{height:"100%"}} className="videoT">
        <source src={"/_next-videos/Technology.mp4"} type="video/mp4" />
      </video>
      <span className="absolute inset-0 w-full h-full object-cover rounded-md bg-muted" />
      <div className="absolute inset-0 maskV flex items-center justify-center">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          <div className="space-y-4 place-content-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transforming the Future with Innovation
            </h2>
            <p className="text-lg md:text-xl">
              Discover how our cutting-edge solutions are driving progress and
              shaping the industries of tomorrow.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold">150+</p>
              <p className="text-lg">Clients Served In Sap</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold">95%</p>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold">120+</p>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-lg">Years of Experience In Sap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
