/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'countydev92-001-site1.ftempurl.com',
        port: '',
        
      },
    ],
  },
}

module.exports = nextConfig
