import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/Banner";
import GlitterCursor from "@/components/body/GlitterCursor";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ask Nina AI | AI agent for teen girls exploring STEM careers",
  description:
    "Ask Nina AI is empowering teen girls to explore STEM (Science, Technology, Engineering, and Mathematics) careers in a supportive and engaging environment through AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white text-black">
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      <GoogleTagManager gtmId={process.env.NEXT_GTM_ID || ""} />
      <body className={nunito.className}>
      <GlitterCursor />
      <div className="bg-white min-h-screen w-full flex flex-col text-black">

          <Header />
          <Banner />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
