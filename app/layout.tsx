import type { Metadata } from "next";
import { Imbue, Albert_Sans } from "next/font/google";
import "./globals.css";
const display = Imbue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});
const sans = Albert_Sans({ subsets: ["latin"], variable: "--font-sans" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  title: "Oliver Bartolata — Frontend Developer | Kali.Dev",
  description:
    "Oliver Bartolata is a frontend and web developer in Manila. Explore Harmoniq Player, NovaTop Up, and his approach to building and maintaining thoughtful web experiences.",
  openGraph: {
    title: "Oliver Bartolata | Kali.Dev",
    description: "Thoughtful interfaces. Care beyond launch.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('kali-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch{}`,
          }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
