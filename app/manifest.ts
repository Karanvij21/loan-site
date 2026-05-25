import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Fast Loan",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6EC",
    theme_color: "#0E3B2E",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
    ],
  };
}
