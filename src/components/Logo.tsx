import { companyInfo, images } from "@/lib/exporter";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="mb-8">
      <Image
        src={images.logo}
        alt={companyInfo.name}
        width={500}
        height={500}
        className="mx-auto object-contain w-58 h-40"
      />
    </div>
  );
}

export default Logo;
