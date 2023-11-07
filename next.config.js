/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['image.tmdb.org']
    },
    env: {
        API_KEY: process.env.API_KEY,
        BASE_URL: process.env.BASE_URL
      },
}

module.exports = nextConfig
