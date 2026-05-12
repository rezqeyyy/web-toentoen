import { MERCHANT_FEATURES } from '@/constants/product';

export const MerchantFeatureSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white">
        {/* Background Teal Setengah Layar Kiri (Hanya di Desktop) */}
        <div className="absolute bottom-0 left-0 top-0 hidden w-1/2 bg-[#00c2a8] lg:block"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24 py-20 lg:py-28">
            
            {/* Kiri: Gambar Mockup HP (Background Teal) */}
            <div className="order-2 flex justify-center rounded-3xl bg-[#00c2a8] p-8 lg:order-1 lg:rounded-none lg:bg-transparent lg:p-0">
                <img 
                src="https://placehold.co/600x600/00c2a8/ffffff?text=Mockup+HP+Merchant" 
                alt="Merchant App Mockups" 
                className="h-auto w-full max-w-md object-contain lg:max-w-full"
                />
            </div>

            {/* Kanan: Teks & Fitur */}
            <div className="order-1 flex flex-col lg:order-2">
                <h2 className="mb-2 text-4xl font-extrabold text-[#00c2a8]">Merchant</h2>
                <h3 className="mb-4 text-3xl font-bold text-gray-900">Kelola Bisnis & Temukan Kesempatan</h3>
                <p className="mb-10 text-gray-600">
                Jangan hanya menunggu pelanggan. Pantau permintaan di sekitarmu, berikan penawaran, dan kelola katalog serta tim dengan mudah.
                </p>

                <div className="flex flex-col gap-8">
                {MERCHANT_FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e6f9f6] text-xl">
                        {feature.icon}
                    </div>
                    <div>
                        <h4 className="mb-1 text-lg font-bold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            </div>
        </div>
        </section>
    );
};