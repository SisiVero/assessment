import { FiInfo } from "react-icons/fi";
import { useGetWalletQuery } from "@/redux/api/baseApi";

export default function DashboardSummary() {
  const { data: wallet } = useGetWalletQuery({});

  const summaryData = [
    { name: "Ledger Balance", value: wallet?.ledger_balance || 0, icon: FiInfo },
    { name: "Total Payout", value: wallet?.total_payout || 0, icon: FiInfo },
    { name: "Total Revenue", value: wallet?.total_revenue || 0, icon: FiInfo },
    { name: "Pending Payout", value: wallet?.pending_payout || 0, icon: FiInfo },
  ];

  return (
    <div>
      {summaryData.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="w-full ">
            <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium">{item.name}: </p>
            <IconComponent className="w-5 h-5 cursor-pointer" />
            </div>
            <p className="text-[28px] font-bold text-Primary">USD {item.value.toLocaleString()}</p>
          </div>
          </div>
        );
      })}
    </div>
  );
}
