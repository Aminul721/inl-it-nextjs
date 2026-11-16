import type { Metadata } from "next";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Inleads IT",
    template: "%s | Inleads IT",
  },
  description:
    "Transform your business with Inleads IT. Offering top-notch website design Malaysiato boost your online presence and drive growth.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
