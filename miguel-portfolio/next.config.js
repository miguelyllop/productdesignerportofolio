/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com', 'placehold.co', 'picsum.photos'],
  },
  basePath: '/productdesignerportofolio',  // Use the repo name here
  assetPrefix: '/productdesignerportofolio',  // Same here
}

module.exports = nextConfig;
