import React from 'react';

// Sub-komponen untuk list checklist biar rapi
const CheckItem = ({ text }: { text: string }) => (
    <li className="flex items-center gap-3 text-sm text-gray-200">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00c2a8]">
        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        </div>
        {text}
    </li>
);

export const TargetAudienceSection = () => {
    return (
        <section className="w-full bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            
            {/* Card 1: User */}
            <div className="flex flex-col-reverse justify-between overflow-hidden rounded-3xl bg-[#083D39] p-8 sm:flex-row sm:gap-8">
                <div className="mt-6 w-full sm:mt-0 sm:w-1/2">
                <img src="/images/user-map.png" alt="User Map" className="h-full min-h-[200px] w-full rounded-2xl object-cover" onError={(e) => e.currentTarget.src = 'https://placehold.co/400x400/115e59/ffffff?text=Map'} />
                </div>
                <div className="flex w-full flex-col items-end text-right sm:w-1/2">
                <h3 className="mb-2 text-3xl font-bold text-white">User</h3>
                <span className="mb-6 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">● Hadir di Kotamu</span>
                <h4 className="mb-4 text-xl font-bold leading-tight text-white">Cari Apapun di Sekitarmu Jadi Lebih Mudah.</h4>
                <p className="mb-6 text-sm text-gray-300">Temukan produk unik, jasa terpercaya, dan promo menarik dalam radius 1km hingga Unlimited. Kirim Sinyal Permintaan dan biarkan solusi datang kepadamu.</p>
                <ul className="flex flex-col items-end gap-2">
                    <CheckItem text="Eksplorasi Produk & Jasa" />
                    <CheckItem text="Penemuan Berbasis Lokasi" />
                    <CheckItem text="Sinyal Permintaan (Demand Signal)" />
                </ul>
                </div>
            </div>

            {/* Card 2: Merchant */}
            <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-[#083D39] p-8 sm:flex-row sm:gap-8">
                <div className="mb-6 flex w-full flex-col items-start sm:mb-0 sm:w-1/2">
                <h3 className="mb-2 text-3xl font-bold text-white">Merchant</h3>
                <span className="mb-6 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">● Hadir di Kotamu</span>
                <h4 className="mb-4 text-xl font-bold leading-tight text-white">Kelola bisnis mu dalam Genggaman.</h4>
                <p className="mb-6 text-sm text-gray-300">Antarmuka profesional dan andal untuk pemilik bisnis. Kelola katalog produk, pantau analitik penjualan, dan tangkap sinyal permintaan pelanggan di sekitarmu.</p>
                <ul className="flex flex-col gap-2">
                    <CheckItem text="Manajemen Katalog yang Mudah" />
                    <CheckItem text="Analitik Kinerja" />
                    <CheckItem text="Respon Sinyal Permintaan" />
                </ul>
                </div>
                <div className="w-full sm:w-1/2">
                <img src="/images/merchant-analytics.png" alt="Merchant Analytics" className="h-full min-h-[200px] w-full rounded-2xl object-cover" onError={(e) => e.currentTarget.src = 'https://placehold.co/400x400/115e59/ffffff?text=Analytics'} />
                </div>
            </div>

            </div>
        </div>
        </section>
    );
};