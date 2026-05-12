type LogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

export const Logo = ({ variant = 'light', className = '' }: LogoProps) => {
  const textColor = variant === 'light' ? 'text-gray-900' : 'text-white';

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      {/* Bulatan dengan inisial "T" */}
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#00c2a8]">
        <span className="text-base font-extrabold leading-none text-white">T</span>
        <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-[#0d4f47] ring-2 ring-white" />
      </span>
      {/* Wordmark dua baris "Toen / toen" */}
      <span className={`flex flex-col leading-[0.95] ${textColor}`}>
        <span className="text-base font-extrabold tracking-tight">Toen</span>
        <span className="text-base font-extrabold tracking-tight">toen</span>
      </span>
    </span>
  );
};
