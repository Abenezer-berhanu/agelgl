import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/landing/Navbar";
import { keywords } from "@/lib/exporter";

const jostSemibold = Jost({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Agelgl Digital solutions - Website Development | App Development | UI-UX | Graphic design | Logo Development | Online Market | Software Solutions | Software Agency in Ethiopia | Software Development Ethiopia | Best Software Company | Fast Website Developer | Mobile App Developer | IT Solutions Ethiopia | Custom Software Development Ethiopia | Digital Transformation Ethiopia | Technology Solutions Ethiopia | Agelgl Software Development Ethiopia | Full-Stack Development Ethiopia | Enterprise Software Ethiopia | Cloud Solutions Ethiopia | SaaS Development Ethiopia | E-commerce Solutions Ethiopia | UI/UX Design Ethiopia | Software Maintenance Ethiopia | Software Support Ethiopia | IT Services Ethiopia",
  description:
    "Agelgl Digital Solutions empowers businesses with website, mobile, design & branding services — fueling growth through smart innovation",
  openGraph: {
    images: ["./opengraph-image.jpg"],
  },
  keywords: keywords,
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
