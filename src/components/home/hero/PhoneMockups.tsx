/**
 * Dua mockup HP berbentuk SVG inline (chat list + radar map).
 * Pure SVG/CSS — tidak butuh asset gambar.
 */

const PhoneFrame = ({
  rotation,
  children,
  className = '',
}: {
  rotation: number;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative h-[420px] w-[210px] rounded-[36px] bg-[#0d0d0d] p-2 shadow-2xl ring-1 ring-white/10 ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Notch */}
    <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-black" />
    {/* Screen */}
    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-white">
      {children}
    </div>
  </div>
);

const ChatScreen = () => (
  <div className="flex h-full w-full flex-col">
    {/* Status bar */}
    <div className="flex items-center justify-between bg-[#00c2a8] px-4 pb-3 pt-6 text-white">
      <span className="text-[10px] font-semibold">9:41</span>
      <span className="flex gap-1 text-[10px]">●●●</span>
    </div>
    {/* Header */}
    <div className="bg-[#00c2a8] px-4 pb-3">
      <p className="text-[11px] font-bold text-white">Pesan</p>
      <p className="text-[8px] text-white/80">5 pesan baru</p>
    </div>
    {/* Search bar */}
    <div className="mx-3 -mt-2 rounded-md bg-white px-2 py-1.5 shadow ring-1 ring-gray-100">
      <span className="text-[8px] text-gray-400">🔍 Cari...</span>
    </div>
    {/* List */}
    <div className="mt-3 flex-1 space-y-2 overflow-hidden px-3">
      {[
        { name: 'Warung Bu Sari', msg: 'Pesanan sudah siap kak', t: '10:24', c: '#fde68a' },
        { name: 'Toko Roti Eka', msg: 'Promo hari ini!', t: '09:11', c: '#bfdbfe' },
        { name: 'Laundry Cepat', msg: 'Sudah diambil ya', t: '08:02', c: '#bbf7d0' },
        { name: 'Tukang Service', msg: 'Lokasi sudah dishare', t: 'Kemarin', c: '#fecaca' },
        { name: 'Apotek 24', msg: 'Tersedia kak', t: 'Kemarin', c: '#e9d5ff' },
      ].map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <div
            className="h-7 w-7 flex-shrink-0 rounded-full"
            style={{ background: item.c }}
          />
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-[9px] font-bold text-gray-900">
              {item.name}
            </p>
            <p className="truncate text-[8px] text-gray-500">{item.msg}</p>
          </div>
          <span className="text-[7px] text-gray-400">{item.t}</span>
        </div>
      ))}
    </div>
    {/* Tab bar */}
    <div className="flex justify-around border-t border-gray-100 py-2 text-[8px] text-gray-400">
      <span>🏠</span>
      <span className="text-[#00c2a8]">💬</span>
      <span>🔍</span>
      <span>👤</span>
    </div>
  </div>
);

const RadarScreen = () => (
  <div className="flex h-full w-full flex-col">
    <div className="flex items-center justify-between bg-[#00c2a8] px-4 pb-3 pt-6 text-white">
      <span className="text-[10px] font-semibold">9:41</span>
      <span className="text-[10px]">●●●</span>
    </div>
    <div className="bg-[#00c2a8] px-4 pb-3">
      <p className="text-[11px] font-bold text-white">Sekitarmu</p>
      <p className="text-[8px] text-white/80">Radius 1.5 km</p>
    </div>
    {/* Map area dengan radar */}
    <div className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-[#e0f7f4] to-[#cdeae5]">
      {/* concentric circles */}
      <div className="absolute h-44 w-44 rounded-full border-2 border-[#00c2a8]/30" />
      <div className="absolute h-32 w-32 rounded-full border-2 border-[#00c2a8]/40" />
      <div className="absolute h-20 w-20 rounded-full border-2 border-[#00c2a8]/60" />
      <div className="absolute h-10 w-10 rounded-full bg-[#00c2a8]/20" />
      {/* center pin */}
      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 ring-4 ring-red-500/30">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>
      {/* small pins around */}
      <span className="absolute left-6 top-10 h-3 w-3 rounded-full bg-[#00c2a8] ring-2 ring-white" />
      <span className="absolute right-8 top-16 h-3 w-3 rounded-full bg-orange-400 ring-2 ring-white" />
      <span className="absolute bottom-14 left-10 h-3 w-3 rounded-full bg-blue-400 ring-2 ring-white" />
      <span className="absolute bottom-20 right-6 h-3 w-3 rounded-full bg-purple-400 ring-2 ring-white" />
    </div>
    {/* Card bawah */}
    <div className="mx-2 my-2 rounded-lg bg-white p-2 shadow ring-1 ring-gray-100">
      <p className="text-[9px] font-bold text-gray-900">Warung Kopi Aksara</p>
      <p className="text-[8px] text-gray-500">120m · ⭐ 4.8</p>
    </div>
  </div>
);

export const PhoneMockups = () => (
  <div className="relative h-[480px] w-full max-w-[460px]">
    <div className="absolute left-2 top-6 sm:left-4">
      <PhoneFrame rotation={-8}>
        <ChatScreen />
      </PhoneFrame>
    </div>
    <div className="absolute right-2 top-0 sm:right-4">
      <PhoneFrame rotation={8}>
        <RadarScreen />
      </PhoneFrame>
    </div>
  </div>
);
