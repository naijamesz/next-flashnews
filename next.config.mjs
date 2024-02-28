/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  }
};

export default nextConfig;
