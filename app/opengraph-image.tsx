import { ImageResponse } from "next/og";
export const alt = "Oliver Bartolata — Frontend / Web Developer — Kali.Dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#191b19",
        color: "#eeece5",
        padding: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 28,
        }}
      >
        <span>Kali.Dev</span>
        <span>Frontend / Web Developer</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 116,
          lineHeight: 1,
          letterSpacing: -6,
        }}
      >
        <span>Oliver</span>
        <span>Bartolata</span>
      </div>
      <div style={{ fontSize: 28, color: "#c3d5a5" }}>
        Thoughtful interfaces. Care beyond launch.
      </div>
    </div>,
    size,
  );
}
