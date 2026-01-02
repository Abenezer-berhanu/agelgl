import { domAnimation, LazyMotion } from "motion/react";
import CircularGallery from "../CircularGallery";
import * as m from "motion/react-m";

function Portfolios() {
  return (
    <div className="my-20 sm:mt-40 px-3 sm:px-20" id="portfolio">
      <LazyMotion features={domAnimation}>
        <m.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl sm:text-8xl font-bold text-neutral-900"
        >
          Portfolios
        </m.h2>
      </LazyMotion>
      <CircularGallery />
    </div>
  );
}

export default Portfolios;
