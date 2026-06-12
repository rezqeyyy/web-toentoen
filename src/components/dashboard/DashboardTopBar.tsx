import { Logo } from "@/components/ui/Logo";

type DashboardTopBarProps = {
  title: string;
};

export const DashboardTopBar = ({ title }: DashboardTopBarProps) => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3 px-6 py-4 sm:px-8 lg:px-10">
        <Logo variant="light" />
        <h1 className="text-2xl font-extrabold leading-none text-[#00c2a8] sm:text-3xl">
          {title}
        </h1>
      </div>
    </header>
  );
};
