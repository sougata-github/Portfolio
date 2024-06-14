import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/animations/PageTransition";
import StairsProvider from "@/components/animations/StairsProvider";

import { cn } from "@/lib/utils";

import { Toaster } from "sonner";

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
      <body className={cn("scrollbar-hidden", jetBrains.className)}>
        <Header />
        <StairsProvider />
        <PageTransition>
          <Toaster position="bottom-center" />
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
