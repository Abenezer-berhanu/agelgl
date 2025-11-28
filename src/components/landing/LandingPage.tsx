import React from "react";
import FreeGame from "../games/FreeGame";

function LandingPage() {
  return (
    <div>
      <h1 className="sr-only">
        Agelgl Digital Solutions - Web Development - Mobile Development -
        Branding - Design
      </h1>
      <section className="m-4">
        <h2 className="text-3xl font-bold text-primary">Free Games</h2>
        <FreeGame />
      </section>
    </div>
  );
}

export default LandingPage;
