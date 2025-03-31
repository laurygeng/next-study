import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: 'tailwindcss.com'
        // port: '',
        // pathname: '/my-bucket/**',
        // search: ''
      }
    ]
  }
}

export default nextConfig
