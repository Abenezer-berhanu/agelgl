import AboutUs from "@/components/about/AboutUs";
import CurvedLoop from "@/components/CurvedLoop";
import LandingPage from "@/components/landing/LandingPage";
import { Timeline } from "@/components/ui/timeline";
import { implementationStepsData, keywords } from "@/lib/exporter";

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

      <CurvedLoop
        className=""
        marqueeText="Agelgl Digital Solutions ✦ Website ✦ Mobile App ✦ Graphics Design ✦ UI/UX ✦ API ✦ Maintenance ✦"
      />
      <AboutUs />
      <Timeline data={implementationStepsData} />
    </div>
  );
}

export default page;
