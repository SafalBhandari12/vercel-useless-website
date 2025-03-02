/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // Check the environment to decide if we should allow or disallow indexing
    const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            // "index, follow" for production, otherwise "noindex, nofollow"
            value: isProd ? "index, follow" : "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
