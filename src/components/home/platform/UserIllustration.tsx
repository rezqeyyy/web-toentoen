export const UserIllustration = () => (
  <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#0a3d37] to-[#0d4f47] p-4">
    {/* Map fragment background */}
    <div className="absolute inset-0 opacity-40">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none">
        <path
          d="M0 40 Q 50 20 100 50 T 200 60 L 200 100 Q 150 110 100 130 T 0 140 Z"
          fill="#1a6b61"
        />
        <path
          d="M0 90 Q 60 80 110 100 T 200 110 L 200 160 Q 130 170 80 180 T 0 200 Z"
          fill="#155a52"
        />
        <line x1="0" y1="60" x2="200" y2="80" stroke="#2a8a7e" strokeWidth="0.5" />
        <line x1="0" y1="120" x2="200" y2="140" stroke="#2a8a7e" strokeWidth="0.5" />
        <line x1="40" y1="0" x2="60" y2="200" stroke="#2a8a7e" strokeWidth="0.5" />
        <line x1="140" y1="0" x2="160" y2="200" stroke="#2a8a7e" strokeWidth="0.5" />
      </svg>
    </div>

    {/* Concentric radar */}
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-40 w-40 rounded-full border border-[#00c2a8]/30" />
      <div className="absolute h-28 w-28 rounded-full border border-[#00c2a8]/45" />
      <div className="absolute h-16 w-16 rounded-full border border-[#00c2a8]/60" />
      <div className="absolute h-10 w-10 rounded-full bg-[#00c2a8]/20 backdrop-blur-sm" />
      {/* center pin */}
      <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 shadow-lg ring-4 ring-red-500/20">
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>
    </div>
  </div>
);
