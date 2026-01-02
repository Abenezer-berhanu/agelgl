"use client";

import React from "react";
import Link from "next/link";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center px-4">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-md w-full text-center"
        >
          {/* Visual Icon Element */}
          <div className="relative flex justify-center mb-8">
            <m.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className="w-24 h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary relative z-10"
            >
              <FileQuestion size={48} strokeWidth={1.5} />
            </m.div>
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-0" />
          </div>

          {/* Typography */}
          <m.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-8xl font-black text-neutral-900 mb-2 tracking-tighter"
          >
            404
          </m.h1>
          <m.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-neutral-800 mb-4"
          >
            Page Not Found
          </m.h2>
          <m.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-500 mb-10 leading-relaxed"
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </m.p>

          {/* Action Buttons */}
          <m.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-neutral-800 transition-all shadow-lg shadow-primary/20 active:scale-95"
            >
              <Home size={18} />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-neutral-200 text-neutral-700 font-bold hover:bg-neutral-50 transition-all active:scale-95"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </m.div>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default NotFound;
