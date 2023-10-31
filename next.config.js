/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_MAPBOX: process.env.REACT_APP_MAPBOX,
    AQI_TOKEN: process.env.AQI_TOKEN,
  },
}

module.exports = nextConfig
