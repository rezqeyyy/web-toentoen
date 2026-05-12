import Link from "next/link";
import { FOOTER_SECTIONS } from "@/constants/navigation";
import { Logo } from "@/components/ui/Logo";

// Komponen kecil khusus untuk Icon Social Media agar kode lebih bersih (DRY)
const SocialLink = ({
    href,
    children,
    }: {
    href: string;
    children: React.ReactNode;
    }) => (
    <Link
        href={href}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00c2a8]/10 text-[#00c2a8] transition-colors hover:bg-[#00c2a8] hover:text-white"
    >
        {children}
    </Link>
);

export const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-100 bg-white pt-12 pb-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Logo & deskripsi */}
            <div className="lg:col-span-5">
                <Link href="/" className="mb-5 inline-block">
                <Logo variant="light" />
                </Link>
                <p className="mb-6 max-w-xs text-xs leading-relaxed text-gray-500">
                Jembatan digital yang menghubungkan kebutuhan masyarakat dengan
                potensi bisnis lokal melalui teknologi cerdas berbasis lokasi.
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-2.5">
                <SocialLink href="https://facebook.com">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </SocialLink>
                <SocialLink href="https://instagram.com">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                </SocialLink>
                <SocialLink href="https://tiktok.com">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 0012.67-1.48v-5a8.2 8.2 0 004.33 1.24v-3.5a4.77 4.77 0 01-2.41-.25z" />
                    </svg>
                </SocialLink>
                <SocialLink href="https://youtube.com">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </SocialLink>
                </div>
            </div>

            {/* Tautan navigasi */}
            <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {FOOTER_SECTIONS.map((section) => (
                    <div key={section.title}>
                    <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-gray-900">
                        {section.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                        {section.links.map((link) => (
                        <li key={link.label}>
                            <Link
                            href={link.href}
                            className="text-xs text-gray-500 transition-colors hover:text-[#00c2a8]"
                            >
                            {link.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
};
