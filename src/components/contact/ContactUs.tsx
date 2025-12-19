import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { companyInfo } from "@/lib/exporter";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactUs() {
  return (
    <div className="flex flex-col justify-between gap-12" id="contact">
      <div className="">
        <LazyMotion features={domAnimation}>
          <m.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-8xl font-bold text-neutral-900 px-3 sm:px-20 mb-4"
          >
            Ready to bring solution <br /> for your Business?
          </m.h2>
        </LazyMotion>
      </div>

      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-lg mx-auto"
        >
          <Card className="shadow-lg border border-blue-100 overflow-hidden bg-gradient-to-br from-white to-blue-50">
            <m.div
              className="h-1.5 bg-blue-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-neutral-800">
                Contact us through
              </CardTitle>
              <CardDescription className="text-neutral-600">
                We wait 24/7 to provide a gold Service
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
              <m.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">
                    Phone
                  </p>
                  <p className="font-semibold text-neutral-800">
                    {companyInfo.phone}
                  </p>
                  <p className="font-semibold text-neutral-800">
                    {companyInfo.phone2}
                  </p>
                </div>
              </m.div>

              <m.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">
                    Email
                  </p>
                  <p className="font-semibold text-neutral-800">
                    {companyInfo.email}
                  </p>
                </div>
              </m.div>

              <m.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <div className="bg-emerald-100 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">
                    Address
                  </p>
                  <p className="font-semibold text-neutral-800">
                    {companyInfo.address}
                  </p>
                </div>
              </m.div>
            </CardContent>
          </Card>
        </m.div>
      </LazyMotion>
    </div>
  );
}

export default ContactUs;
