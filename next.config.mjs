import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
};

export default withNextVideo(nextConfig, { folder: 'movable' });

// const withVideos = require("next-videos");

// module.exports = withVideos()
