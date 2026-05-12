import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Atau font pilihanmu
import "./globals.css";

// Import komponen yang sudah kita buat
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
        {/* Header di atas */}
        <Header />
        
        {/* Konten utama halaman */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer di bawah */}
        <Footer />
      </body>
    </html>
  );
}