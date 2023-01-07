/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["whoami-shubham.github.io"],
    path:'',
    loader: 'imgix',
  },
  basePath:'/product-landing-page'
}

module.exports = nextConfig
