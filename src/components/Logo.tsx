import { companyInfo, images } from "@/lib/exporter";
import Image from "next/image";

function Logo() {
  return (
    <div className="my-2">
      <Image
        src={images.logo}
        alt={companyInfo.name}
        width={200}
        height={200}
        className="w-fit object-contain max-h-[70px]"
      />
    </div>
  );
}

export default Logo;
