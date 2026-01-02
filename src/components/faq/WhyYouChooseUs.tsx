import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { FaArrowRight } from "react-icons/fa";
import { whyChooseUs } from "@/lib/exporter";
import Link from "next/link";

function WhyYouChooseUs() {
  return (
    <section
      className="py-20 px-4 sm:px-10 bg-[#013328]"
      id="why-you-choose-us"
    >
      <LazyMotion features={domAnimation}>
        <m.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl sm:text-7xl font-bold text-white mb-16 max-w-4xl"
        >
          Why Agelgl is the Right choice for you?
        </m.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            // Logic to determine if this is the "Feature Card" (Every 4th item)
            const isFeatureCard = (index + 1) % 3 === 0;
            // Logic to determine if this is a "Wide Card" (Every 3rd item in a set of 4)
            const isWideCard = (index + 1) % 4 === 0;

            return (
              <m.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-300
                  ${
                    isFeatureCard
                      ? "md:row-span-2 border-4 border-green-500 text-white"
                      : "bg-[#f8faff] text-neutral-900 border border-neutral-100 shadow-sm"
                  }
                  ${isWideCard ? "md:col-span-2" : "md:col-span-1"}
                `}
              >
                <div>
                  {/* Icon Container */}
                  <div
                    className={`
                    w-12 h-12 rounded-full border flex items-center justify-center mb-8
                    ${isFeatureCard ? "border-white/20" : "border-neutral-200"}
                  `}
                  >
                    <item.icon className={`text-xl`} />
                  </div>

                  {/* Text Content */}
                  <h3
                    className={`
                    font-bold mb-4 tracking-tight
                    ${isFeatureCard ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"}
                  `}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`
                    text-lg leading-relaxed
                 text-neutral-500"
                  `}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Optional Button for Feature Card (Item 4, 8, etc.) */}
                {isFeatureCard && (
                  <div className="mt-12">
                    <Link
                      href={"/#contact"}
                      className="bg-[#5ce65c] hover:bg-[#4cd14c] text-neutral-900 font-bold py-4 px-8 rounded-full flex items-center gap-3 transition-all group"
                    >
                      Get Started
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </m.div>
            );
          })}
        </div>
      </LazyMotion>
    </section>
  );
}

export default WhyYouChooseUs;
