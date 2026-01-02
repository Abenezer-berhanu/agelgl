import AboutUs from "@/components/about/AboutUs";
import ContactUs from "@/components/contact/ContactUs";
import CurvedLoop from "@/components/CurvedLoop";
import SecurityFramework from "@/components/faq/OurSecurity";
import WhyYouChooseUs from "@/components/faq/WhyYouChooseUs";
import LandingPage from "@/components/landing/LandingPage";
import Portfolios from "@/components/portfolio/Portfolios";
import OurServices from "@/components/services/OurServices";
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
        enterprise app development firm | web and mobile app development agency
        | custom software development company | Software Agency in Ethiopia |
        Software Development Ethiopia | Software Team | Website Development |
        App Development | Agency | Software Solutions | Web app Developer | App
        developer | Website Developer | IT Solutions | Software Company Ethiopia
        | Software Development Company Ethiopia | Software Development Firm
        Ethiopia | Software Development Services Ethiopia | Custom Software
        Development Ethiopia | Software Consulting Ethiopia | IT Consulting
        Ethiopia | Digital Transformation Ethiopia | Technology Solutions
        Ethiopia | Software Engineering Ethiopia | Agile Software Development
        Ethiopia | Full-Stack Development Ethiopia | Mobile App Development
        Ethiopia | Web Development Ethiopia | Enterprise Software Ethiopia |
        Cloud Solutions Ethiopia | SaaS Development Ethiopia | E-commerce
        Solutions Ethiopia | UI/UX Design Ethiopia | Software Maintenance
        Ethiopia | Software Support Ethiopia | IT Services Ethiopia
      </h1>
      <LandingPage />

      <CurvedLoop
        className=""
        marqueeText="Agelgl Digital Solutions ✦ Website ✦ Mobile App ✦ Graphics Design ✦ UI/UX ✦ API ✦ Maintenance ✦"
      />
      <AboutUs />
      <Timeline data={implementationStepsData} />
      <OurServices />
      <Portfolios />
      <div className="" id="faq">
        <WhyYouChooseUs />
      </div>
      <SecurityFramework />
      <ContactUs />
    </div>
  );
}

export default page;
