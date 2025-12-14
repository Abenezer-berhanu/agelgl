import AboutUs from "@/components/about/AboutUs";
import CurvedLoop from "@/components/CurvedLoop";
import LandingPage from "@/components/landing/LandingPage";
import { keywords } from "@/lib/exporter";

function page() {
  return (
    <div className="mb-10">
      <nav className="sr-only">
        <ul>
          {keywords.map((keyword) => (
            <a key={keyword}>{keyword}</a>
          ))}
        </ul>
      </nav>
      <h1 className="sr-only">
        Software Agency in Ethiopia | Software Development Ethiopia | Software
        Team | Website Development | App Development | Agency | Software
        Solutions | Web app Developer | App developer | Website Developer |{" "}
      </h1>
      <LandingPage />
      <div className="relative"></div>
      <CurvedLoop
        className=""
        marqueeText="Agelgl Digital Solutions ✦ Website ✦ Mobile App ✦ Graphics Design ✦ UI/UX ✦ API ✦ Maintenance ✦"
      />
      <AboutUs />
    </div>
  );
}

export default page;
