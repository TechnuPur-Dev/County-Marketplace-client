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
  env:{
    GOOGLE_CLIENT_ID:"699217999898-pafb8tihrvllortqmg7ekrp83p4qvfiu.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET:"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"
  }
}

module.exports = nextConfig
