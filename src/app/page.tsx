import LandingPage from "@/components/landing/LandingPage";
import { keywords } from "@/lib/exporter";
import React from "react";

function page() {
  return (
    <div>
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
    </div>
  );
}

export default page;
