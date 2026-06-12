import { DashboardTopBar } from "@/components/dashboard/DashboardTopBar";
import { SalesReferralSection } from "@/components/dashboard/sales/SalesReferralSection";
import { SalesTable } from "@/components/dashboard/sales/SalesTable";

export const metadata = {
  title: "Sales Dashboard | Toentoen",
};

export default function SalesDashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <DashboardTopBar title="Sales Dashboard" />
      <div className="flex-1 px-6 py-8 sm:px-8 lg:px-10">
        <SalesReferralSection />
        <div className="mt-6">
          <SalesTable />
        </div>
      </div>
    </div>
  );
}
