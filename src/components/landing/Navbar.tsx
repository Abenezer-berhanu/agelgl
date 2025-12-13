"use client";

import * as React from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { navbarLinks } from "@/lib/exporter"; // Ensure this path is correct
import Logo from "../Logo";

const Header = () => {
  const navItems = navbarLinks.filter((link) => !link.isButton);
  const ctaItem = navbarLinks.find((link) => link.isButton);

  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* --- ZONE 1: LOGO (Left) --- */}
        <div className="flex-shrink-0">
          <Link href="/" className="">
            <Logo />
          </Link>
        </div>

        {/* --- ZONE 2: NAVIGATION (Center) --- */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((link) => {
                if (!link.isActive) return null;

                // MEGA MENU DROPDOWN LOGIC
                if (link.children && link.children.length > 0) {
                  return (
                    <NavigationMenu.Item key={link.name}>
                      <NavigationMenu.Trigger className="group flex select-none items-center gap-1 rounded px-3 py-2 hover:text-primary outline-none">
                        {link.name}
                        <ChevronDown
                          className="relative top-[1px] h-3 w-3 transition-transform duration-200 group-data-[state=open]:-rotate-180"
                          aria-hidden="true"
                        />
                      </NavigationMenu.Trigger>

                      {/* Full Width Dropdown Content */}
                      <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
                        <div className="w-screen max-w-screen border-b border-gray-100 bg-white shadow-xl">
                          {/* Centered Container for Dropdown Items */}
                          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-8 sm:grid-cols-12">
                            {/* Optional: Dropdown Sidebar/Header */}
                            <div className="col-span-1 sm:col-span-3">
                              <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                {link.name}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Discover our specialized{" "}
                                {link.name.toLowerCase()} tailored for scale.
                              </p>
                            </div>

                            {/* Dropdown Links Grid */}
                            <ul className="col-span-1 sm:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {link.children.map(
                                (child: {
                                  name: string;
                                  href: string;
                                  description: string;
                                  isActive: boolean;
                                }) =>
                                  child.isActive && (
                                    <li key={child.name}>
                                      <NavigationMenu.Link asChild>
                                        <Link
                                          href={child.href}
                                          className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                        >
                                          <div className="flex items-center gap-2 text-sm font-medium leading-none text-gray-900 dark:text-white group-hover:text-primary ">
                                            {child.name}
                                          </div>
                                          <p className="line-clamp-2 text-xs leading-snug text-gray-500 dark:text-gray-400">
                                            {child.description}
                                          </p>
                                        </Link>
                                      </NavigationMenu.Link>
                                    </li>
                                  )
                              )}
                            </ul>
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  );
                }

                // STANDARD LINK LOGIC
                return (
                  <NavigationMenu.Item key={link.name}>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={link.href}
                        className="block select-none rounded px-3 py-2 leading-none text-gray-900 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                );
              })}
            </NavigationMenu.List>

            <div className="absolute left-0 top-full w-full">
              <div className="flex justify-center w-full perspective-[2000px]">
                <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
              </div>
            </div>
          </NavigationMenu.Root>
        </div>

        <div className="flex items-center justify-end">
          {ctaItem && (
            <Link
              href={ctaItem.href}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {ctaItem.name}
            </Link>
          )}

          {/* Mobile Menu Toggle would go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
