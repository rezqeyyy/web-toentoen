"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo variant="light" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9">
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

        {/* CTA */}
        <div className="flex items-center">
          <Button variant="primary" className="px-6 py-2 text-sm">
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
};
