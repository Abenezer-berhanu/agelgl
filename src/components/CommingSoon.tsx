import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { companyInfo, socialMediaLinks } from "@/lib/exporter";

function CommingSoon() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Logo />

        <p className="text-xl mb-4 font-semibold">Coming Soon</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          We are lunching the website <br /> very soon!
        </h1>
        <p className="font-semibold text-lg mb-6">
          Stay updated on Agelgl Digital Solutions!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 my-6">
          {socialMediaLinks.map(
            (link, idx) =>
              link.isActive && (
                <Link
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={24} className="text-primary" />
                </Link>
              )
          )}
        </div>

        {/* contacts */}
        <div className="space-y-1 font-semibold">
          <b>Contact us</b>
          <p>{companyInfo.phone}</p>
          <p>{companyInfo.email}</p>
        </div>
      </div>
    </div>
  );
}

export default CommingSoon;
