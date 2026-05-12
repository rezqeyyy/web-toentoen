import { FEATURES_DATA, type FeatureIcon } from "@/constants/home";

const FeatureGlyph = ({ name }: { name: FeatureIcon }) => {
  const common = "h-6 w-6 stroke-[#00c2a8]";
  const props = {
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "pin":
      return (
        <svg className={common} {...props}>
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "signal":
      return (
        <svg className={common} {...props}>
          <path d="M3 12h3l2-5 4 10 2-7 2 4h5" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={common} {...props}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );
    case "compass":
      return (
        <svg className={common} {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15 9-2 6-4 0 2-6 4 0Z" />
        </svg>
      );
  }
};

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#00c2a8] py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Fitur */}
        <div className="mb-12 text-center text-white">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">
            Fitur Utama Toentoen
          </h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-white/85 sm:text-sm">
            Nikmati pengalaman mencari dan menawarkan jasa yang lebih pintar,
            terhubung langsung dengan komunitas lokal di sekitarmu.
          </p>
        </div>

        {/* Grid Kartu Fitur */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#00c2a8]/10">
                <FeatureGlyph name={feature.icon} />
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
