import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import React from "react";
import SideMenu from "@/components/layout/SideMenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--roboto-text",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} `}>
        <Header />
        <div className="flex justify-center">
          <main className="min-h-[calc(100svh-8rem)]">{children}</main>

          <aside className="sticky top-20 z-10 hidden h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden xl:flex xl:w-1/5">
            <SideMenu />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "Just Archives | %s",
    default: "Just Archives",
  },
  description:
    "Just Archives는 개인 아카이브를 위한 기술 블로그입니다. 일상 노트부터 기술 인사이트까지 다양한 주제로 글을 작성합니다.",
  keywords: [
    "기술 기록",
    "기술 블로그",
    "개발 블로그",
    "개발 일기",
    "개발 일지",
    "개발 기록",
    "개발 노트",
    "개발 노트북",
    "Just Archives",
    "개인 아카이브",
    "일상 노트",
    "기술 인사이트",
    "테크 블로그",
    "개인 블로그",
  ],
};
