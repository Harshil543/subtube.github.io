/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  env: {
    JWT_SECRET: "asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm",
    // AWS_SES_USER: "AKIAU2NXPNNY4D3W6XWK",
    // AWS_SES_PASSWORD: "BH0Kdt4YGH5GddPTdJm+xZXgiRUUiPOlIHx4PN7F+i81",
    AWS_SES_USER: "AKIA4QP4RTHI5CZNU65N",
    AWS_SES_PASSWORD: "BHNvcl65QPok7up3Fc+yl6a6oOvLK5SiABP8QD5fxiMz",
    CLOUD_NAME: "dtgvsgfvk",
    UPLOAD_PRESETS: "ml_default",
    CLOUD_IMAGE_DIRECTORY: "images",
    CLOUD_VIDEO_DIRECTORY: "videos",
    CLOUD_ZIP_DIRECTORY: "zip",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dtgvsgfvk/image/upload",
    CLOUDINARY_VIDEO_URL:
      "https://api.cloudinary.com/v1_1/dtgvsgfvk/video/upload",
    CLOUDINARY_ZIP_URL: "https://api.cloudinary.com/v1_1/dtgvsgfvk/raw/upload",
    STRIPE_SECRET_KEY: "sk_test_2DqyjEwaU0Nq0PpEMVQ3qSAw00zgrbnfPk",
    STRIPE_PUBLISHABLE_KEY: "pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7"
    // DB_USERNAME: "admin",
    // DB_PASSWORD: "mysql3RkV7yZ",
    // DB_PASSWORD_PROD: "mysql3RkV7yZ",
    // DB_NAME_DEVELOPMENT: "subtubes",
    // DB_NAME_PRODUCTION: "subtubes",
    // DB_NAME: "subtubes",
    // DB_HOSTNAME: "subtubes.cll4zdbcwlks.us-east-1.rds.amazonaws.com",
    // DB_PORT: "3306",
    // DB_PORT_PROD: "3306"
  }
};

module.exports = nextConfig;
