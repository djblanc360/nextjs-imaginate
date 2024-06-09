import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx'],
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(process.cwd(), 'src');
    config.resolve.alias['@components'] = path.join(process.cwd(), 'src/components');
    config.resolve.alias['@utils'] = path.join(process.cwd(), 'src/utils');
    return config;
  },
};

export default nextConfig;
