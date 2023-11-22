/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    JWT_SECRET: "asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm",
    AWS_SES_USER: "hardik.anuvadiya@gmail.com",
    AWS_SES_PASSWORD: "xqzcyfrzmyqzvpqj",
    CLOUD_NAME: "sub-tube",
    UPLOAD_PRESETS: "ml_default",
    CLOUD_IMAGE_DIRECTORY: "images",
    CLOUD_VIDEO_DIRECTORY: "videos",
    CLOUD_ZIP_DIRECTORY: "zip",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/sub-tube/image/upload",
    CLOUDINARY_VIDEO_URL:
      "https://api.cloudinary.com/v1_1/sub-tube/video/upload",
    CLOUDINARY_ZIP_URL: "https://api.cloudinary.com/v1_1/sub-tube/raw/upload",
    STRIPE_SECRET_KEY: "sk_test_2DqyjEwaU0Nq0PpEMVQ3qSAw00zgrbnfPk",
    STRIPE_PUBLISHABLE_KEY: "pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7",
  },
};

module.exports = nextConfig;
