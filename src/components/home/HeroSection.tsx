import Link from "next/link";
import { PhoneMockups } from "./hero/PhoneMockups";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const AppleIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M16.365 1.43c0 1.14-.42 2.18-1.11 2.93-.74.83-1.94 1.46-3.02 1.37-.13-1.12.42-2.27 1.06-3.01.74-.85 2.02-1.49 3.07-1.29ZM20.5 17.27c-.55 1.26-.82 1.83-1.53 2.95-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.94-1-4.04-.99-2.1.01-2.53 1.01-4.08.99-1.73-.02-3.06-1.77-4.05-3.33C.05 16.95-.23 11.69 2.05 8.91c1.62-1.98 4.17-3.14 6.57-3.14 2.45 0 3.99 1.34 6.01 1.34 1.96 0 3.16-1.34 5.99-1.34 2.14 0 4.41 1.17 6.03 3.18-5.3 2.9-4.44 10.46-6.15 8.32Z" />
    </svg>
);

const GooglePlayIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
            fill="#00c2a8"
            d="M3.6 1.7c-.4.4-.6 1-.6 1.7v17.2c0 .7.2 1.3.6 1.7l10.3-10.3L3.6 1.7Z"
        />
        <path
            fill="#fff"
            d="m17.7 8.1-3.8 3.9 3.8 3.9 4.6-2.6c1.3-.7 1.3-2.6 0-3.3l-4.6-2.9Z"
        />
        <path
            fill="#fff"
            opacity=".7"
            d="M3.6 22.3c.6.6 1.5.7 2.3.2l11.8-6.7-3.8-3.8L3.6 22.3Z"
        />
        <path
            fill="#fff"
            opacity=".85"
            d="M17.7 8.1 5.9 1.5C5.1 1 4.2 1.1 3.6 1.7l10.3 10.3 3.8-3.9Z"
        />
    </svg>
);

export const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#1a1d22]">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
            <ImageWithFallback
            src="/images/hero-bg.jpg"
            alt=""
            fallback="https://placehold.co/1920x900/1a1d22/444?text=Hero+Background"
            className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Teks */}
            <div className="flex flex-col lg:col-span-6">
                <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]">
                Temukan Apapun di
                <br />
                Sekitarmu bersama
                <br />
                <span className="text-[#00c2a8]">Toentoen</span>
                </h1>
                <p className="mb-10 max-w-md text-sm leading-relaxed text-gray-200/90 sm:text-base">
                Hubungkan kebutuhanmu dengan berbagai bisnis lokal terdekat dalam
                radius 1km hingga 50km. Cepat, tepat, dan mudah digunakan.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-[#00c2a8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00a892]"
                >
                    <AppleIcon />
                    <span>App Store</span>
                </Link>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
                >
                    <GooglePlayIcon />
                    <span>Google Play</span>
                </Link>
                </div>
            </div>

            {/* Mockup HP */}
            <div className="relative flex items-center justify-center lg:col-span-6">
                <PhoneMockups />
            </div>
            </div>
        </div>
        </section>
    );
};
