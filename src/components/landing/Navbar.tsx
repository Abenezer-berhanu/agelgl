"use client";

import * as React from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react"; // Import Menu and X icons
// Assuming you have imported your data and components correctly
import { images, navbarLinks } from "@/lib/exporter";
import Logo from "../Logo";
import Image from "next/image";
import { Button } from "../ui/button";

// --- Utility Component for Mobile Accordion (handles nested links) ---

interface MobileLinkProps {
  link: (typeof navbarLinks)[number];
  onLinkClick: () => void;
}

const MobileLink: React.FC<MobileLinkProps> = ({ link, onLinkClick }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

  // If link has children, render an accordion trigger
  if (link.children && link.children.length > 0) {
    return (
      <li>
        <div
          className="flex justify-between items-center w-full py-3 px-4 font-medium text-lg border-b border-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        >
          <span>{link.name}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isSubMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {isSubMenuOpen && (
          <ul className="border-b space-y-1.5 border-gray-100 dark:border-gray-800">
            {link.children.map(
              (child) =>
                child.isActive && (
                  <li key={child.name} className="">
                    <Link
                      href={child.href}
                      onClick={onLinkClick} // Close the whole menu on sub-link click
                      className="block w-full py-2 pl-8 pr-4 hover:bg-primary/70 hover:text-white"
                    >
                      {child.name}
                    </Link>
                  </li>
                )
            )}
          </ul>
        )}
      </li>
    );
  }

  // If it's a standard link, render a direct link
  return (
    <li>
      <Link
        href={link.href}
        onClick={onLinkClick} // Close the whole menu on link click
        className="block w-full py-3 px-4 font-medium text-lg border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {link.name}
      </Link>
    </li>
  );
};

// --- Mobile Menu Drawer Component ---
interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: (typeof navbarLinks)[number][];
  ctaItem: (typeof navbarLinks)[number] | undefined;
}

const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
  navItems,
  ctaItem,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-800">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close mobile menu"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation List */}
        <nav className="h-[calc(100vh-65px)] overflow-y-auto">
          <ul className="flex flex-col">
            {navItems.map(
              (link) =>
                link.isActive && (
                  <MobileLink
                    key={link.name}
                    link={link}
                    onLinkClick={onClose}
                  />
                )
            )}
          </ul>

          {/* CTA Button at the bottom */}
          {ctaItem && (
            <div className="p-4 pt-6 border-t border-gray-100 dark:border-gray-800">
              <Link
                href={ctaItem.href}
                onClick={onClose}
                className="w-full inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                {ctaItem.name}
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = navbarLinks.filter((link) => !link.isButton);
  const ctaItem = navbarLinks.find((link) => link.isButton);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="relative z-50 w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* --- ZONE 1: LOGO (Left) --- */}
        <div className="flex-shrink-0">
          <Link href={navbarLinks[0].href} className="">
            <Logo />
          </Link>
        </div>

        {/* --- ZONE 2: DESKTOP NAVIGATION (Center) - Hidden on Mobile --- */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((link) => {
                // DESKTOP LINK LOGIC (from previous version)
                if (!link.isActive) return null;

                if (link.children && link.children.length > 0) {
                  return (
                    <NavigationMenu.Item key={link.name}>
                      <NavigationMenu.Trigger className="group flex select-none text-lg items-center gap-1 rounded px-3 py-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white outline-none">
                        {link.name}
                        <ChevronDown
                          className="relative top-[1px] h-3 w-3 transition-transform duration-200 group-data-[state=open]:-rotate-180"
                          aria-hidden="true"
                        />
                      </NavigationMenu.Trigger>

                      <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
                        <div className="w-screen max-w-screen border-b border-gray-100 bg-white shadow-xl dark:bg-gray-950 dark:border-gray-800">
                          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-8 sm:grid-cols-12">
                            {/* Dropdown Sidebar/Header */}
                            <div className="col-span-1 sm:col-span-3">
                              <h4 className="mb-2 text-3xl font-semibold text-gray-900 dark:text-white">
                                {link.name}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Discover our specialized{" "}
                                {link.name.toLowerCase()} tailored for scale.
                              </p>
                              {/* Assuming images.services is defined and correctly imported */}
                              <Image
                                src={images.services}
                                alt="Services"
                                width={400}
                                height={400}
                                className="rounded-lg w-full max-w-[200px] max-h-[150px] object-cover"
                              />
                            </div>

                            {/* Dropdown Links Grid */}
                            <ul className="col-span-1 sm:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
                              {link.children.map(
                                (child) =>
                                  child.isActive && (
                                    <li key={child.name}>
                                      <NavigationMenu.Link asChild>
                                        <Link
                                          href={child.href}
                                          className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                        >
                                          <div className="flex items-center gap-2 text-lg font-medium leading-none text-gray-900 dark:text-white group-hover:text-primary">
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

                return (
                  <NavigationMenu.Item key={link.name}>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={link.href}
                        className="block text-lg select-none rounded px-3 py-2 leading-none text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
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

        {/* --- ZONE 3: CTA Button & Mobile Toggle (Right) --- */}
        <div className="flex items-center justify-end gap-3">
          {/* Desktop CTA Button - Hidden on Mobile */}
          {ctaItem && (
            <Link
              href={ctaItem.href}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {ctaItem.name}
            </Link>
          )}

          {/* Mobile Menu Toggle Button - Visible only on mobile */}
          <Button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* --- MOBILE MENU DRAWER --- */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={closeMenu}
        navItems={navItems}
        ctaItem={ctaItem}
      />
    </header>
  );
};

export default Header;
