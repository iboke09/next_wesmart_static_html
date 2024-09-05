import React from "react";
import Link from "next/link";
const notFound = () => {
  return (
    <>
      <div>
        <div
          style={{
            height: "100vh",
            placeItems: "center",
            placeContent: "center",
          }}
        >
          <div class="pt-6 sm:pt-12 pb-12 sm:pb-18" style={{backgroundColor:'var(--main-alt-color1)',transition:'0.7s'}}>
            <div class="container mx-auto">
              <div class=" lg:w-2/3 xl:w-1/2 mx-auto flex flex-col items-center justify-center px-6 sm:px-16">
                <div class="w-full pb-full relative">
                  <img
                    src={"/img/404 Error-amico.svg"}
                    width={100}
                    height={100}
                    alt="error illustration"
                    class="left-0 top-0 w-full h-full"
                    loading="eager"
                  />
                </div>{" "}
                <h4 class="text-3xl mb-2 mt-4 font-bold text-center" style={{color:'var(--blawh-color)',transition:'0.7s'}}>
                  Oops! Page not found
                </h4>{" "}
                <p
                  class="mb-4 text-center leading-relaxed"
                  style={{ fontSize: "13px",color:'var(--blawh-color)',transition:'0.7s'}}
                >
                  The page you are trying to access does not exist or has been
                  moved.
                  <br />
                  Try going back to our homepage.
                </p>{" "}
                <Link
                  href="/"
                  class=" hover:bg-blue-600 py-3 px-6 rounded font-bold text-lg text-white oma transition"
                >
                  Go back to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default notFound;
