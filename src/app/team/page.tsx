import { TeamHero } from '@/components/team/TeamHero';
import { InteractiveTeam } from '@/components/team/InteractiveTeam';

export default function TeamPage() {
    return (
        <div className="flex w-full flex-col">
        <TeamHero />
        <InteractiveTeam />
        </div>
    );
}