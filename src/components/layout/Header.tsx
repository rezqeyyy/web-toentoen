"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    className="h-6 w-6"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    className="h-6 w-6"
  >
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Tutup drawer saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll saat drawer terbuka + tutup pakai ESC
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Toentoen home">
          <Logo variant="light" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-9">
            {HEADER_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-[#00c2a8] ${
                      isActive
                        ? "font-bold text-[#00c2a8]"
                        : "font-medium text-gray-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center">
          <Button variant="primary" className="px-5 py-2 text-sm lg:px-6">
            Download App
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          id="mobile-nav"
          className={`absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
            <Logo variant="light" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100"
              aria-label="Tutup menu navigasi"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="flex flex-col gap-1">
              {HEADER_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                        isActive
                          ? "bg-[#00c2a8]/10 font-bold text-[#00c2a8]"
                          : "font-medium text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-gray-100 p-4">
            <Button
              variant="primary"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 text-sm"
            >
              Download App
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
