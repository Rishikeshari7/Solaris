/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/home",
          permanent: true, // Set to false if it's a temporary redirect
        },
        {
          source: "/about",
          destination: "/home",
          permanent: false, // Set to false if it's a temporary redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  