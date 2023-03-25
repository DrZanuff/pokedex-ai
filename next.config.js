/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin({ identifiers: "debug" })

module.exports = nextConfig
module.exports = withVanillaExtract(nextConfig)
