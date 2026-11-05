import Link from 'next/link';
import { PLATFORM_POWER } from '@/constants/product';

const AppleIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 3.53c.63-.78 1.07-1.85.95-2.93-.93.04-2.07.63-2.73 1.41-.58.68-1.1 1.77-.96 2.83 1.04.08 2.11-.53 2.74-1.31z" />
    </svg>
);

const GooglePlayIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="#00c2a8" d="M3.6 1.7c-.4.4-.6 1-.6 1.7v17.2c0 .7.2 1.3.6 1.7l10.3-10.3L3.6 1.7Z" />
        <path fill="#fff" d="m17.7 8.1-3.8 3.9 3.8 3.9 4.6-2.6c1.3-.7 1.3-2.6 0-3.3l-4.6-2.9Z" />
        <path fill="#fff" opacity=".7" d="M3.6 22.3c.6.6 1.5.7 2.3.2l11.8-6.7-3.8-3.8L3.6 22.3Z" />
        <path fill="#fff" opacity=".85" d="M17.7 8.1 5.9 1.5C5.1 1 4.2 1.1 3.6 1.7l10.3 10.3 3.8-3.9Z" />
    </svg>
);

// Komponen kecil untuk Checklist Centang Hijau
const CheckItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3 text-sm text-gray-700">
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00c2a8]">
        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        <span className="font-medium">{text}</span>
    </li>
);

export const ProductCTA = () => {
    return (
        <>
        {/* Platform Power Section */}
        <section className="w-full bg-[#00c2a8] py-20 lg:py-24">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-white sm:text-4xl">
                Satu Platform, Dua Kekuatan
            </h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Card User */}
                <div className="flex flex-col rounded-3xl bg-white p-10 shadow-xl">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f9f6] text-3xl">👤</div>
                <h3 className="mb-8 text-center text-2xl font-bold text-black">User</h3>
                <ul className="flex flex-col gap-4">
                    {PLATFORM_POWER.user.map((text, idx) => <CheckItem key={idx} text={text} />)}
                </ul>
                </div>

                {/* Card Merchant */}
                <div className="flex flex-col rounded-3xl bg-white p-10 shadow-xl">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f9f6] text-3xl">🏪</div>
                <h3 className="mb-8 text-center text-2xl font-bold text-black">Merchant</h3>
                <ul className="flex flex-col gap-4">
                    {PLATFORM_POWER.merchant.map((text, idx) => <CheckItem key={idx} text={text} />)}
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center rounded-3xl bg-[#083D39] px-6 py-16 text-center shadow-lg md:px-16">
                <h2 className="mb-4 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight">
                Apapun yang kamu butuhkan, Toentoen adalah jawabannya
                </h2>
                <p className="mb-10 max-w-2xl text-gray-300">
                Satu aplikasi untuk mengeksplorasi sesuai keinginan, satu aplikasi untuk mengembangkan bisnismu. Unduh sekarang.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                <Link href="#" className="flex items-center gap-2 rounded-full bg-[#00c2a8] px-8 py-3.5 font-bold text-white transition hover:bg-[#00a892]">
                    <AppleIcon />
                    <span>App Store</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 rounded-full bg-white/20 px-8 py-3.5 font-bold text-white backdrop-blur-md transition hover:bg-white/30">
                    <GooglePlayIcon />
                    <span>Google Play</span>
                </Link>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};