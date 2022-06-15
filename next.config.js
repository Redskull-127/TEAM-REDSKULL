/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/TEAM-REDSKULL",
  assetPrefix: "https://meertarbani.dev/TEAM-REDSKULL/",
}

module.exports = nextConfig
