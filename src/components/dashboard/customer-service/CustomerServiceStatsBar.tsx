import { CS_STATS } from "@/constants/customerService";

export type StatsMode = "chats" | "tickets";

type Props = {
  mode: StatsMode;
};

const Pill = ({ label, value }: { label: string; value: number }) => (
  <div className="flex h-9 min-w-[140px] items-stretch overflow-hidden rounded-sm bg-white/10">
    <div className="flex flex-1 items-center px-3 text-sm font-bold text-white">
      {label}
    </div>
    <div className="flex w-12 items-center justify-center border-l-2 border-white/80 text-sm font-bold text-white">
      {value}
    </div>
  </div>
);

const Group = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-base font-bold text-white">{title}</h2>
    <div className="flex flex-col gap-1.5">{children}</div>
  </div>
);

export const CustomerServiceStatsBar = ({ mode }: Props) => {
  const openTitle = mode === "chats" ? "Open Live Chats" : "Open Tickets";
  const statsTitle =
    mode === "chats" ? "Live Chats Statistics" : "Tickets Statistics";

  return (
    <div className="flex flex-wrap items-start justify-between gap-6 bg-[#00c2a8] px-6 py-4 sm:px-8">
      <div className="flex flex-wrap items-start gap-8 sm:gap-10">
        <Group title={openTitle}>
          <Pill label="Normal" value={CS_STATS.normal} />
          <Pill label="Priority" value={CS_STATS.priority} />
        </Group>

        <Group title={statsTitle}>
          <Pill label="Unsolved" value={CS_STATS.unsolved} />
          <Pill label="Solved" value={CS_STATS.solved} />
        </Group>

        <Group title="Satisfaction">
          <div className="flex h-[78px] min-w-[140px] flex-col items-center justify-center rounded-sm bg-white/10 px-4 text-white">
            <span className="text-xl font-extrabold leading-none">
              {CS_STATS.satisfactionPercent}%
            </span>
            <span className="mt-1 text-sm font-bold">Helpful</span>
          </div>
        </Group>
      </div>

      <div className="self-center text-base font-extrabold text-white sm:text-lg">
        {CS_STATS.date}
      </div>
    </div>
  );
};
