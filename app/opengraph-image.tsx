import { ImageResponse } from "next/og";
import { content } from "@/content";

/* Social card: white, wordmark, one-line thesis. */

export const alt = "Company University. Every company gets a school.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#191918";
const PAPER = "#f7f7f5";
const ACCENT = "#7b2d26";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: PAPER,
          color: INK,
          fontFamily: "Georgia, serif",
        }}
      >
        {/* mark + small label */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div
              style={{
                display: "flex",
                width: 64,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", width: 26, height: 26, backgroundColor: INK }} />
              <div style={{ display: "flex", width: 26, height: 26, backgroundColor: INK }} />
            </div>
            <div
              style={{
                display: "flex",
                width: 64,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", width: 26, height: 26, backgroundColor: INK }} />
              <div style={{ display: "flex", width: 26, height: 26, backgroundColor: INK }} />
            </div>
            <div style={{ display: "flex", width: 64, height: 16, backgroundColor: ACCENT }} />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 7,
              color: "rgba(25,25,24,0.55)",
            }}
          >
            NETWORK SCHOOL · 2026
          </div>
        </div>

        {/* wordmark + thesis */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1.05 }}>
            Company University
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 34,
              fontStyle: "italic",
              color: "rgba(25,25,24,0.7)",
            }}
          >
            {content.ogThesis}
          </div>
        </div>

        {/* footer line */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `3px solid ${ACCENT}`,
            paddingTop: 28,
            fontSize: 21,
            letterSpacing: 4,
            color: "rgba(25,25,24,0.55)",
          }}
        >
          <div style={{ display: "flex" }}>EVERY COMPANY GETS A SCHOOL</div>
          <div style={{ display: "flex" }}>COMPANYUNIVERSITY.VERCEL.APP</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
