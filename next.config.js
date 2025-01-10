/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove the auth configuration if you're doing static export
}

module.exports = nextConfig 