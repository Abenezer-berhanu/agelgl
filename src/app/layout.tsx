import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/landing/Navbar";

const jostSemibold = Jost({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agelgl Digital solutions - Web, Mobile, Design & Branding services",
  description:
    "Agelgl Digital Solutions empowers businesses with web, mobile, design & branding services — fueling growth through smart innovation",
  openGraph: {
    images: ["./opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jostSemibold.className} antialiased`}>
        <Navbar />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
