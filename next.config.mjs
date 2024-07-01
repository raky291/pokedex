import createNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = createNextIntl();

export default withNextIntl(nextConfig);
