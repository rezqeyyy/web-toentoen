import { PLATFORM_CARDS, type PlatformCard } from "@/constants/home";
import { UserIllustration } from "./platform/UserIllustration";
import { MerchantIllustration } from "./platform/MerchantIllustration";

const CheckIcon = () => (
  <svg
    className="h-3.5 w-3.5 flex-shrink-0 stroke-[#00c2a8]"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 12 5 5 9-11" />
  </svg>
);

const PlatformItem = ({ card }: { card: PlatformCard }) => {
  const isUser = card.id === "user";

  return (
    <article className="flex flex-col gap-4 rounded-2xl bg-[#0d4f47] p-5 text-white md:flex-row md:gap-5">
      {/* Ilustrasi (40%) */}
      <div className="md:w-[42%]">
        {isUser ? <UserIllustration /> : <MerchantIllustration />}
      </div>

      {/* Konten (60%) */}
      <div className="flex flex-col md:w-[58%]">
        {/* Tag header */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-white">{card.tag}</span>
          {!isUser && (
            <span className="text-[10px] font-semibold text-white/60">
              Analytics
            </span>
          )}
        </div>

        <h3 className="mb-3 text-xl font-extrabold leading-tight md:text-2xl">
          {card.title}
        </h3>
        <p className="mb-4 text-xs leading-relaxed text-white/70">
          {card.description}
        </p>
        <ul className="flex flex-col gap-2">
          {card.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-xs text-white/90"
            >
              <CheckIcon />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const PlatformSection = () => {
  return (
    <section className="w-full bg-white py-10 lg:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {PLATFORM_CARDS.map((card) => (
            <PlatformItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
