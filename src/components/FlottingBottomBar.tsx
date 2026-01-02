"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { images, navbarLinks } from "@/lib/exporter";

// --- Keep the Mobile Utility Components ---
interface MobileLinkProps {
  link: (typeof navbarLinks)[number];
  onLinkClick: () => void;
}

const MobileLink: React.FC<MobileLinkProps> = ({ link, onLinkClick }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  if (link.children && link.children.length > 0) {
    return (
      <li>
        <div
          className="flex justify-between items-center w-full py-3 px-4 font-medium text-lg border-b border-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        >
          <span>{link.name}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${isSubMenuOpen ? "rotate-180" : ""}`}
          />
        </div>
        {isSubMenuOpen && (
          <ul className="border-b bg-gray-50 dark:bg-gray-900">
            {link.children.map(
              (child) =>
                child.isActive && (
                  <li key={child.name}>
                    <Link
                      href={child.href}
                      onClick={onLinkClick}
                      className="block py-2 pl-8 pr-4 hover:text-primary"
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
  return (
    <li>
      <Link
        href={link.href}
        onClick={onLinkClick}
        className="block py-3 px-4 font-medium text-lg border-b border-gray-100 dark:border-gray-800"
      >
        {link.name}
      </Link>
    </li>
  );
};

// --- Mobile Drawer ---
const MobileMenuDrawer = ({
  isOpen,
  onClose,
  navItems,
  ctaItem,
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems: (typeof navbarLinks)[number][];
  ctaItem: (typeof navbarLinks)[number] | undefined;
}) => (
  <>
    <div
      className={`fixed inset-0 z-[60] bg-black/50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    />
    <div
      className={`fixed right-0 top-0 bottom-0 z-[70] w-full max-w-sm bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex items-center justify-end p-4 border-b">
        <button onClick={onClose} className="p-2 text-gray-500">
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="h-full overflow-y-auto">
        <ul>
          {navItems.map(
            (link) =>
              link.isActive && (
                <MobileLink key={link.name} link={link} onLinkClick={onClose} />
              )
          )}
        </ul>
        {ctaItem && (
          <div className="p-4 border-t">
            <Link
              href={ctaItem.href}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center rounded-full bg-primary py-3 text-white"
            >
              {ctaItem.name}
            </Link>
          </div>
        )}
      </nav>
    </div>
  </>
);

// --- MAIN HEADER COMPONENT ---
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navItems = navbarLinks.filter((link) => !link.isButton);
  const ctaItem = navbarLinks.find((link) => link.isButton);

  return (
    <>
      {/* 1. TOP SECTION (ONLY HAMBURGER ON MOBILE) */}
      <div className="fixed top-0 left-0 z-50 w-full pointer-events-none">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-end px-6 lg:px-8">
          {/* HAMBURGER MENU ICON (Visible only on small screens) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden pointer-events-auto p-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>

      {/* 2. FLOATING DOCK (Desktop Navigation) */}
      <div className="hidden md:flex fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-4 w-full justify-center pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-center bg-black/70 dark:bg-gray-900/70 backdrop-blur-lg border border-white/20 dark:border-gray-800 shadow-2xl rounded-full px-6 py-2 w-fit max-w-[95vw]">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center gap-4 text-sm font-medium">
              {navItems.map((link) => {
                if (!link.isActive) return null;

                if (link.children && link.children.length > 0) {
                  return (
                    <NavigationMenu.Item key={link.name}>
                      <NavigationMenu.Trigger className="group flex items-center gap-1 rounded-full px-3 py-2 text-white transition-all hover:bg-white/10">
                        <span className="text-base">{link.name}</span>
                        <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:-rotate-180" />
                      </NavigationMenu.Trigger>

                      <NavigationMenu.Content className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl bg-white dark:bg-gray-950 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
                        <div className="grid grid-cols-12 gap-8 p-8 text-black dark:text-white">
                          <div className="col-span-3 border-r pr-8 border-gray-100 dark:border-gray-800">
                            <h4 className="mb-2 text-2xl font-bold">
                              {link.name}
                            </h4>
                            <p className="mb-4 text-sm text-gray-500">
                              Discover our professional services.
                            </p>
                            <Image
                              src={images.services}
                              alt="Service"
                              width={300}
                              height={200}
                              className="rounded-xl object-cover shadow-md"
                            />
                          </div>
                          <ul className="col-span-9 grid grid-cols-2 gap-x-8 gap-y-2">
                            {link.children.map(
                              (child) =>
                                child.isActive && (
                                  <li key={child.name}>
                                    <NavigationMenu.Link asChild>
                                      <Link
                                        href={child.href}
                                        className="group block p-3 rounded-xl transition hover:bg-gray-50 dark:hover:bg-gray-900"
                                      >
                                        <div className="font-bold group-hover:text-primary">
                                          {child.name}
                                        </div>
                                        <p className="text-xs text-gray-500 line-clamp-1">
                                          {child.description}
                                        </p>
                                      </Link>
                                    </NavigationMenu.Link>
                                  </li>
                                )
                            )}
                          </ul>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  );
                }

                return (
                  <NavigationMenu.Item key={link.name}>
                    <Link
                      href={link.href}
                      className="block rounded-full px-3 py-2 text-base text-white transition-all hover:bg-white/10"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenu.Item>
                );
              })}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </nav>
      </div>

      {/* 3. MOBILE DRAWER COMPONENT */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        ctaItem={ctaItem}
      />
    </>
  );
};

export default Header;
