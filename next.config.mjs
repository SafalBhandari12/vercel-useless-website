/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your custom header rule
  async headers() {
    // Check if the deployment is production based on your environment variable
    const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            // Allow search engines to index production deployments,
            // while non-production builds get "noindex, nofollow"
            value: isProd ? "index, follow" : "noindex, nofollow",
          },
        ],
      },
    ];
  },
  // You can add other Next.js configuration options here if needed
};

export default nextConfig;
