import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Fast Loan",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F4F5F7",
    theme_color: "#1E3A8A",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
    ],
  };
}
