import React from "react";

function Landing({ children }) {
  return (
    <div style={{ width: "100vw" }} className="landing" id="landingo">
      <svg className="svg-blur-before"
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
      {children}
      <svg className="svg-blur-after"
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
    </div>
  );
}

export default Landing;
