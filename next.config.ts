import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['framer-motion'],
  reactStrictMode: true,

  async redirects() {
    return [
      // Redirect /blog to /en/blog
      {
        source: '/blog',
        destination: '/en/blog',
        permanent: true,
      },
      // Redirect /blog/:slug to /en/blog/:slug
      {
        source: '/blog/:slug',
        destination: '/en/blog/:slug',
        permanent: true,
      },
      // Redirect /coupons to /en/coupons
      {
        source: '/coupons',
        destination: '/en/coupons',
        permanent: true,
      },
      // Redirect /how-to-get-funded-guide to /en/how-to-get-funded-guide
      {
        source: '/how-to-get-funded-guide',
        destination: '/en/how-to-get-funded-guide',
        permanent: true,
      },
      // Redirect root to /en (optional - keeps / as default English)
      // Uncomment if you want / to redirect to /en
      // {
      //   source: '/',
      //   destination: '/en',
      //   permanent: false,
      // },
    ];
  },
};

export default nextConfig;
