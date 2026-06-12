import { DashboardTopBar } from "@/components/dashboard/DashboardTopBar";
import { CustomerServiceWorkspace } from "@/components/dashboard/customer-service/CustomerServiceWorkspace";

export const metadata = {
  title: "Customer Service | Toentoen",
};

export default function CustomerServicePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <DashboardTopBar title="Customer Service" />
      <CustomerServiceWorkspace />
    </div>
  );
}
