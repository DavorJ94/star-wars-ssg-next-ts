/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/characters",
        destination: "/characters/1",
        permanent: true,
      },
      {
        source: "/films",
        destination: "/films/1",
        permanent: true,
      },
      {
        source: "/species",
        destination: "/species/1",
        permanent: true,
      },
      {
        source: "/vehicles",
        destination: "/vehicles/1",
        permanent: true,
      },
      {
        source: "/starships",
        destination: "/starships/1",
        permanent: true,
      },
      {
        source: "/planets",
        destination: "/planets/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
