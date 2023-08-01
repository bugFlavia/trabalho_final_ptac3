/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://trabalho-final-ptas2-oq6e.vercel.app/',
          },
        ]
      },
}

module.exports = nextConfig
