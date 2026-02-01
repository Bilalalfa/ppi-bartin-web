import { SectionCards } from "@/components/dashboard/card";
import { columns } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { Card } from "@/components/ui/card";
import { userData } from "@/lib/data";

const DashboardPage = async () => {
  const data = await userData();

  return (
    <div className="space-y-6 pb-14">
      <SectionCards />
      <Card className="mx-4 lg:mx-6">
        <DataTable columns={columns} data={data} />
      </Card>
    </div>
  );
};

export default DashboardPage;
