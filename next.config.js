/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['i.ibb.co'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverOptions: {
    port: 3001
  }
}

module.exports = nextConfig 