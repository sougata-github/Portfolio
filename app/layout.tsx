import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],

  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Sougata Das",
  description: "Welcome to my Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
