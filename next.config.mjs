// import { withNextVideo } from "next-video/process";
// import withNextIntl from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   images: {
//     loader: "custom",
//     loaderFile: "./my-loader.js",
//   },
//   i18n: {
//     locales: ['en', 'ar'],
//     defaultLocale: 'en',
//   },
// };
// export default withNextIntl('./i18n.ts', {
//   folder: "movable",
// });

// const withVideos = require("next-videos");

// module.exports = withVideos()

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./my-loader.js",
  },
};

export default withNextIntl(nextConfig);
