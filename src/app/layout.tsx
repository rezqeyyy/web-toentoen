import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Atau font pilihanmu
import "./globals.css";

// Import komponen yang sudah kita buat
import { LayoutChrome } from "@/components/layout/LayoutChrome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toen Toen Web",
  description: "Jembatan digital untuk kebutuhan masyarakat dan bisnis lokal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}
