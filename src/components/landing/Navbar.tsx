"use client";
import Link from "next/link";
import { navbarLinks } from "@/lib/exporter";

export const Navbar = () => {
  const ctaItem = navbarLinks.find((link) => link.isButton);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent dark:border-gray-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-end px-6 lg:px-8">
        {/* LOGO
        <div className="shrink-0">
          <Link href="/">
            <Logo />
          </Link>
        </div> */}
        {/* CTA BUTTON */}
        <div className="items-center gap-3 hidden sm:flex">
          {ctaItem && (
            <Link
              href={ctaItem.href}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {ctaItem.name} us
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
