import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A3A2D",
          color: "#FAF5EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 12,
        }}
      >
        GA
      </div>
    ),
    { ...size }
  );
}
