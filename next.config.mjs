import createNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [600, 900, 1200, 1536],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
      },
    ],
  },
};

const withNextIntl = createNextIntl();

export default withNextIntl(nextConfig);
