const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    className="h-4 w-4"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const SalesReferralSection = () => {
  return (
    <div>
      <h2 className="text-base font-bold text-gray-900 sm:text-lg">
        Sales Referral code
      </h2>
      <button
        type="button"
        className="mt-3 inline-flex items-center gap-3 rounded-md bg-[#0d4f47] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0a423c]"
      >
        Add your referral code
        <PlusIcon />
      </button>
    </div>
  );
};
