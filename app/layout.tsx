import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
//import { CookieConsent } from "@/components/CookieConsent";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
//import WarningPopupCookie from "@/components/warning/WarningPopupCookie";
import Footer from "@/components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const kosugi = Noto_Sans_JP({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "翠翔祭2026「Luminous」|神奈川県立横浜翠嵐高校",
  description:
    "神奈川県立横浜翠嵐高校の文化祭「翠翔祭2026 Luminous」の公式ホームページ。開催日程、企画情報、アクセス、お申し込みなどをご案内します。",
  verification: {
    google: "pomW8UzqyNwJdcxZAGq6i7kfsA7oX9vWbVztL3to6Bs",
  },

  openGraph: {
    title: "翠翔祭2026「Luminous」",
    description:
      "神奈川県立横浜翠嵐高校の文化祭「翠翔祭2026 Luminous」の公式ホームページ。開催日程、企画情報、アクセス、お申し込みなどをご案内します。",
    url: "https://suishosai2026.vercel.app/",
    siteName: "翠翔祭2026「Luminous」",
    images: [
      {
        url: "https://suishosai2026.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "翠翔祭2026「Luminous」",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "翠翔祭2026「Luminous」",
    description: "神奈川県立横浜翠嵐高校",
    images: ["https://suishosai2026.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {process.env.NODE_ENV === "production" && (
          <SpeedInsights />
        )}

        {/*<WarningPopupCookie />*/}
        <HamburgerMenu />

        <main className={kosugi.className}>
          {children}
          <Footer />
        </main>

        {/* <CookieConsent /> */}
      </body>
    </html>
  );
}