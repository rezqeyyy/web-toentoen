import { AboutHero } from '@/components/about/AboutHero';
import { VisionMission } from '@/components/about/VisionMission';
import { OurJourney } from '@/components/about/OurJourney';

export default function AboutPage() {
    return (
        <div className="flex w-full flex-col">
        <AboutHero />
        <VisionMission />
        <OurJourney />
        </div>
    );
}