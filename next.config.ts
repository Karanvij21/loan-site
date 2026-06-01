import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "widget.trustpilot.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.getadvanceloan.com" }],
        destination: "https://getadvanceloan.com/:path*",
        permanent: true,
      },
      // Common homepage typos and stale URLs. Folks (and old bookmarks)
      // routinely guess /home, /index, etc. as the homepage path.
      // Permanent so search engines collapse them into the canonical root.
      { source: "/home", destination: "/", permanent: true },
      { source: "/Home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index.htm", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/landing", destination: "/", permanent: true },
      { source: "/main", destination: "/", permanent: true },
      // /loans (no slug) is not a real route; surface the canonical
      // personal-loans landing instead of a 404.
      { source: "/loans", destination: "/loans/personal", permanent: true },
      // Pre-Round-Sky bookmarks landing on /quick-apply etc.
      { source: "/get-started", destination: "/apply", permanent: true },
      { source: "/start", destination: "/apply", permanent: true },
      { source: "/quick-apply", destination: "/apply", permanent: true },
    ];
  },
};

export default nextConfig;
