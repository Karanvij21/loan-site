import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fast Loan Advance — Borrow with intention";
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
          background: "#FAF6EC",
          color: "#0A0D0B",
          fontFamily: "serif",
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
            background: "#0E3B2E",
          }}
        />

        {/* Top — eyebrow + mark */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#5A5F5B",
              fontFamily: "sans-serif",
              fontWeight: 500,
            }}
          >
            Fast Loan Advance · est. 2024
          </div>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "#0E3B2E",
              color: "#FAF6EC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "serif",
              fontSize: 28,
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            f
          </div>
        </div>

        {/* Center — headline */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: 40 }}>
          <div
            style={{
              fontSize: 120,
              lineHeight: 1.02,
              letterSpacing: -3,
              fontWeight: 400,
              color: "#0A0D0B",
              display: "flex",
            }}
          >
            Borrow with
          </div>
          <div
            style={{
              fontSize: 120,
              lineHeight: 1.02,
              letterSpacing: -3,
              fontWeight: 400,
              fontStyle: "italic",
              color: "#0E3B2E",
              display: "flex",
            }}
          >
            intention.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              lineHeight: 1.4,
              color: "#2A2E2B",
              fontFamily: "sans-serif",
              maxWidth: 760,
              display: "flex",
            }}
          >
            Compare fixed-rate personal loans from $100 to $50,000. Two minutes, soft credit check, no obligation.
          </div>
        </div>

        {/* Bottom — stats strip */}
        <div
          style={{
            display: "flex",
            gap: 64,
            paddingTop: 24,
            borderTop: "1px solid #D4C8A8",
            fontFamily: "sans-serif",
          }}
        >
          {[
            { k: "$50K", v: "max amount" },
            { k: "5.99%", v: "starting APR" },
            { k: "72mo", v: "max term" },
            { k: "0 fees", v: "to apply" },
          ].map((s) => (
            <div key={s.k} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 36, fontWeight: 500, color: "#0A0D0B", fontFamily: "serif" }}>{s.k}</div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#5A5F5B",
                  marginTop: 4,
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
