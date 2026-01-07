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
      // Redirect legal pages to /en/ prefixed versions
      {
        source: '/privacy-policy',
        destination: '/en/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/en/terms-of-service',
        permanent: true,
      },
      {
        source: '/cookie-policy',
        destination: '/en/cookie-policy',
        permanent: true,
      },
      {
        source: '/affiliate-disclosure',
        destination: '/en/affiliate-disclosure',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/en/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
