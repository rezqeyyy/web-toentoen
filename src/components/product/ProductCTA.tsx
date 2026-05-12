import Link from 'next/link';
import { PLATFORM_POWER } from '@/constants/product';

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
                App Store
              </Link>
              <Link href="#" className="flex items-center gap-2 rounded-full bg-white/20 px-8 py-3.5 font-bold text-white backdrop-blur-md transition hover:bg-white/30">
                Google Play
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};