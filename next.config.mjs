/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
          },
          {
            protocol: "https",
            hostname: "assets.aceternity.com",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            pathname: "/dhkmlqg4o/**",
          },
        ],
      },
  };

export default nextConfig;
