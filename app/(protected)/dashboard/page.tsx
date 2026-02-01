import { SectionCards } from "@/components/dashboard/card";
import { columns, columnsSiswa } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { Card } from "@/components/ui/card";
import { dataSiswa, userData } from "@/lib/data";

const DashboardPage = async () => {
  const data = await userData();
  // const siswa = await dataSiswa();

  return (
    <div className="space-y-3 pb-14">
      <SectionCards />
      <Card className="mx-4 lg:mx-6">
        {/* <DataTable columns={columnsSiswa} data={siswa} /> */}
        <DataTable columns={columns} data={data} />
      </Card>
    </div>
  );
};

export default DashboardPage;
