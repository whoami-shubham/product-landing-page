/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["whoami-shubham.github.io"],
    path:'',
    loader: 'imgix',
  },
}

module.exports = nextConfig
