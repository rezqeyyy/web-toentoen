"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const HIDE_CHROME_PREFIXES = ["/sales-dashboard", "/customer-service"];

export const LayoutChrome = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideChrome = HIDE_CHROME_PREFIXES.some((p) => pathname.startsWith(p));

  if (hideChrome) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};
