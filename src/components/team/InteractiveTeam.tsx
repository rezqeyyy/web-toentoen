"use client";

import { useMemo, useState } from "react";
import { DIVISIONS, TEAM_DATA, type Division } from "@/constants/team";

const CrownIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
    >
        <path d="M3 8l4 4 5-7 5 7 4-4-2 11H5L3 8z" />
        <path d="M5 19h14" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const InteractiveTeam = () => {
    const [activeDivision, setActiveDivision] =
        useState<Division>("Product Team");

    const filteredTeam = useMemo(
        () => TEAM_DATA.filter((m) => m.division === activeDivision),
        [activeDivision],
    );

    const [selectedId, setSelectedId] = useState<string>(
        () => TEAM_DATA.find((m) => m.division === "Product Team")?.id ?? "",
    );

    const selected =
        filteredTeam.find((m) => m.id === selectedId) ?? filteredTeam[0];

    const handleDivisionChange = (division: Division) => {
        setActiveDivision(division);
        const first = TEAM_DATA.find((m) => m.division === division);
        if (first) setSelectedId(first.id);
    };

    return (
        <section className="w-full bg-white pb-16 pt-8 lg:pb-20 lg:pt-10">
        <style>{`
            @keyframes teamFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes teamSlide { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: translateX(0); } }
            .team-fade { animation: teamFade .35s ease-out both; }
            .team-slide { animation: teamSlide .45s ease-out both; }
        `}</style>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#0d4f47] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            {/* Diagonal stripes overlay */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                backgroundImage:
                    "repeating-linear-gradient(115deg, transparent 0 140px, rgba(255,255,255,0.05) 140px 220px)",
                }}
            />

            {/* Header */}
            <div className="relative z-10 mb-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Tim Kami
                </h2>
                <p className="mt-1 text-sm text-white/80">
                Orang-orang hebat di balik Toentoen
                </p>
            </div>

            {/* Tabs */}
            <div className="relative z-10 mb-8 flex flex-wrap items-center gap-6 sm:gap-8">
                {DIVISIONS.map((d) => {
                const isActive = activeDivision === d;
                return (
                    <button
                    key={d}
                    type="button"
                    onClick={() => handleDivisionChange(d)}
                    className={`relative pb-1.5 text-sm font-bold transition-colors sm:text-base ${
                        isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white/90"
                    }`}
                    >
                    {d}
                    {isActive && (
                        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-white" />
                    )}
                    </button>
                );
                })}
            </div>

            {/* Main grid */}
            <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
            {/* Left: thumbnails 3-col, landscape frame */}
            <div className="lg:col-span-3">
                <div className="grid w-full max-w-[300px] grid-cols-3 gap-2.5">
                    {filteredTeam.map((member) => {
                        const isActive = selected?.id === member.id;
                        return (
                            <button
                            key={member.id}
                            type="button"
                            onClick={() => setSelectedId(member.id)}
                            // Ubah sedikit class-nya agar yang aktif punya garis tepi (ring), bukan mengganti background
                            className={`group relative aspect-[4/3] overflow-hidden rounded-lg transition-all hover:scale-[1.04] ${
                                isActive 
                                ? "ring-4 ring-[#00c2a8] ring-offset-2 ring-offset-[#0d4f47]" 
                                : "opacity-70 hover:opacity-100"
                            }`}
                            aria-label={member.name}
                            >
                            {/* Hapus kondisi !isActive, biarkan gambar selalu dirender */}
                            <img
                                src={member.imageThumbnail}
                                alt={member.name}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            </button>
                        );
                    })}
                </div>
                {filteredTeam.length === 0 && (
                    <p className="text-sm text-white/60">
                    Anggota tim belum ditambahkan.
                    </p>
                )}
                </div>

                {/* Middle: large featured photo */}
                <div className="relative flex items-end justify-center lg:col-span-5">
                {selected && (
                    <img
                    key={`large-${selected.id}`}
                    src={selected.imageLarge}
                    alt={selected.name}
                    className="team-fade h-[300px] w-auto rounded-xl object-cover shadow-2xl sm:h-[360px] lg:h-[440px]"
                    />
                )}
                </div>

                {/* Right: info card */}
                <div className="lg:col-span-4">
                {selected && (
                    <div
                    key={`card-${selected.id}`}
                    className="team-slide relative flex h-full flex-col rounded-2xl bg-[#0a423c] p-6 ring-1 ring-white/10 sm:p-7"
                    >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00c2a8] text-white shadow-md ring-2 ring-white/20">
                        <CrownIcon />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                        {selected.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/75">{selected.role}</p>
                    <p className="mt-4 text-xs leading-relaxed text-white/85 sm:text-sm">
                        <span className="font-bold">{selected.quoteHighlight}</span>
                        {selected.quoteRest}
                    </p>
                    <a
                        href="#"
                        aria-label="LinkedIn"
                        className="mt-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#00c2a8] text-white transition hover:scale-110"
                    >
                        <LinkedInIcon />
                    </a>
                    </div>
                )}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};
