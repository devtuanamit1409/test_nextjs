/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_API: process.env.URL_API,
    TOKEN_DEV: process.env.TOKEN_DEV,
  },
};

export default nextConfig;
