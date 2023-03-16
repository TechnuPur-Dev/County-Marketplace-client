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
    GOOGLE_CLIENT_SECRET:"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",
    FACEBOOK_CLIENT_ID:"136655336008778",
    FACEBOOK_CLIENT_SECRET:"75abee814f588496078256fba8aa37a3"

  }
}

module.exports = nextConfig
