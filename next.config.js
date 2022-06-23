/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["cdn.traction.one"], //dominios aceitos na aplicação
  }
}

module.exports = nextConfig
