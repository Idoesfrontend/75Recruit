/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: "a.storyblok.com"
    }]
  },
}

module.exports = nextConfig
