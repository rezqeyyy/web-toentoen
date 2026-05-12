import { VISION_MISSION } from '@/constants/about';

export const VisionMission = () => {
    return (
        <section className="w-full bg-[#00c2a8] py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Visi dan Misi
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card Visi */}
            <div className="flex flex-col rounded-3xl bg-white p-10 shadow-lg">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f9f6]">
                {/* Icon Lightbulb */}
                <svg className="h-7 w-7 text-[#00c2a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-black">{VISION_MISSION.vision.title}</h3>
                <p className="text-gray-600 leading-relaxed">{VISION_MISSION.vision.desc}</p>
            </div>

            {/* Card Misi */}
            <div className="flex flex-col rounded-3xl bg-white p-10 shadow-lg">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f9f6]">
                {/* Icon Document/Check */}
                <svg className="h-7 w-7 text-[#00c2a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-black">{VISION_MISSION.mission.title}</h3>
                <p className="text-gray-600 leading-relaxed">{VISION_MISSION.mission.desc}</p>
            </div>
            </div>

        </div>
        </section>
    );
};