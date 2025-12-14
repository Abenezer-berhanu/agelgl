import { images } from "@/lib/exporter";
import Image from "next/image";

function LandingLogo() {
  return (
    <div>
      <Image
        width={300}
        height={300}
        className="h-18 w-full max-w-[230px] object-cover mx-auto"
        src={images.landingPageLogo}
        alt="Logo"
      />
    </div>
  );
}

export default LandingLogo;
