import React from "react";
import { Tabs } from "../ui/tabs";
import { ourServices } from "@/lib/exporter";

function OurServices() {
  return (
    <div className="sm:px-20">
      <div className="h-[80vh]">
        <Tabs tabs={ourServices} />
      </div>
    </div>
  );
}

export default OurServices;
