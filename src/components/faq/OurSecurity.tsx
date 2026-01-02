"use client";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { securityFramework } from "@/lib/exporter"; // Adjust path as needed

function SecurityFramework() {
  return (
    <section
      className="py-20 px-4 max-w-7xl mx-auto"
      id="how-secure-is-our-infrastructure"
    >
      <LazyMotion features={domAnimation}>
        {/* Section Heading */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <m.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-8xl font-bold text-neutral-900"
          >
            What makes our infrastructure secure?
          </m.h2>
          <p className="text-lg text-neutral-500 max-w-2xl">
            We implement multi-layered defense strategies to ensure your data,
            infrastructure, and users remain protected at every stage.
          </p>
        </m.div>

        {/* Uniform Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFramework.map((item, index) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
            >
              {/* Uniform Icon Container */}
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
                <item.icon className="text-xl text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>
      </LazyMotion>
    </section>
  );
}

export default SecurityFramework;
