import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Get Advance Loan · Personal loans up to $50,000";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F4F5F7",
          color: "#0F172A",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#1E3A8A",
          }}
        />

        {/* Top: eyebrow + mark */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#475569",
              fontWeight: 600,
            }}
          >
            Get Advance Loan · Loan marketplace
          </div>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#1E3A8A",
              color: "#F4F5F7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            GA
          </div>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: 40 }}>
          <div
            style={{
              fontSize: 116,
              lineHeight: 1.02,
              letterSpacing: -4,
              fontWeight: 700,
              color: "#0F172A",
              display: "flex",
            }}
          >
            Personal loans,
          </div>
          <div
            style={{
              fontSize: 116,
              lineHeight: 1.02,
              letterSpacing: -4,
              fontWeight: 700,
              color: "#1E3A8A",
              display: "flex",
            }}
          >
            in minutes.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              lineHeight: 1.4,
              color: "#1F2937",
              maxWidth: 820,
              display: "flex",
            }}
          >
            Compare fixed-rate offers from $100 to $50,000 across a network of trusted lenders. Two minutes, soft credit check, no obligation.
          </div>
        </div>

        {/* Bottom: stats strip */}
        <div
          style={{
            display: "flex",
            gap: 64,
            paddingTop: 24,
            borderTop: "1px solid #CFD4DD",
          }}
        >
          {[
            { k: "$50K", v: "max amount" },
            { k: "5.99%", v: "starting APR" },
            { k: "72mo", v: "max term" },
            { k: "$0", v: "to apply" },
          ].map((s) => (
            <div key={s.k} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 40, fontWeight: 700, color: "#0F172A", letterSpacing: -1 }}>{s.k}</div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#475569",
                  marginTop: 4,
                  fontWeight: 600,
                }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
