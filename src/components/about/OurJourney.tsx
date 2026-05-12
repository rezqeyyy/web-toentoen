import { JOURNEY_DATA } from '@/constants/about';

export const OurJourney = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 max-w-xl">
          <h2 className="mb-4 text-4xl font-extrabold text-[#00c2a8] lg:text-5xl">
            Our Journey
          </h2>
          <p className="text-lg text-gray-700">
            Berawal dari ambisi untuk menghadirkan solusi perjalanan kami adalah tentang ketekunan dan adaptasi.
          </p>
        </div>

        {/* Grid Journey Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {JOURNEY_DATA.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col justify-end rounded-2xl bg-[#083D39] p-8 shadow-md"
            >
              <h3 className="mb-2 text-3xl font-bold text-white">{item.year}</h3>
              <h4 className="mb-4 text-4xl font-extrabold text-white">{item.title}</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};