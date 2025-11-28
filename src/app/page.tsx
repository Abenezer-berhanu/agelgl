import CommingSoon from "@/components/CommingSoon";
import LandingPage from "@/components/landing/LandingPage";

const isPublic = true;

export default function Home() {
  return isPublic ? <LandingPage /> : <CommingSoon />;
}
