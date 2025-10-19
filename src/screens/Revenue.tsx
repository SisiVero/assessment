import { useState } from "react";
import Button from "@/components/Button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  // useGetUserQuery,
  useGetWalletQuery,
  useGetTransactionsQuery,
} from "@/redux/api/baseApi";
import DashboardSummary from "@/components/DashBoardSumary";
import TransactionHistory from "@/components/Transactions";
import Export from "@/assets/svg/Export";
import { Filter } from "@/components/Filter";
import { Filter as FilterIcon } from "lucide-react"

export default function Revenue() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const { data: wallet, isLoading: walletLoading } = useGetWalletQuery({});
  const { data: transaction, isLoading: transactionLoading } = useGetTransactionsQuery({});

  const chartData = wallet
    ? [
        { name: "Apr 1, 2022", value: wallet.balance },
        { name: "Apr 5, 2022", value: wallet.total_payout },
        { name: "Apr 10, 2022", value: wallet.pending_payout },
        { name: "Apr 15, 2022", value: wallet.ledger_balance },
        { name: "Apr 20, 2022", value: wallet.total_revenue },
      ]
    : [];

  console.log(wallet, chartData);
  return (
    <section className="w-full min-h-screen pt-20">
      <section className="flex items-center gap-32">
        <div className="w-[65vw]">
          {walletLoading ? (
            <div className="animate-pulse">
              <div className="flex items-center gap-16 w-fit">
                <div>
                  <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-10 bg-gray-200 rounded w-48"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded w-24"></div>
              </div>
              <div className="h-80 w-full mt-6 bg-gray-200 rounded"></div>
            </div>
          ) : (
            <>
              <div className="flex ite gap-16 w-fit">
                <div className="">
                  <p className="text-xs font-medium">Available Balance</p>
                  <h2 className="text-4xl text-Primary font-bold">
                    USD 120,500.00
                  </h2>
                </div>
                <Button variant="primary" className="py-3.5 px-7 font-semibold">
                  Withdraw
                </Button>
              </div>
              <div className="h-80 w-full mt-6 flex  items-start">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} >
                    <XAxis dataKey="name" stroke="#56616B" />
                    <YAxis hide />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#FF5403"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </div>
        <div className="w-[35vw] h-full">
          <DashboardSummary />
        </div>
      </section>

      <section className="mt-[82px]">
        <div className="flex items-center justify-between w-full mb-14 border-b border-Secondary pb-6">
          <p className="flex flex-col text-2xl font-bold text-Primary">
            {transaction?.length || 0} Transactions
            <span className="text-sm font-medium text-Gray">Your transactions for the last 7 days</span>
          </p>
       
        <div className="flex items-center gap-3 ">
          <Button 
            variant="secondary" 
            className="py-3 pl-[30px] pr-5 text-Primary flex items-center gap-2" 
            onClick={() => setIsFilterOpen(true)}
          >
            Filter
            <FilterIcon className="w-3 h-3" />
          </Button>
         <Button variant="secondary" className="text-Primary py-3 pl-[30px] pr-5 flex items-center gap-1">Export list
            <Export/>
          </Button>
        </div>
         </div>
        <Filter open={isFilterOpen} onOpenChange={setIsFilterOpen} />
        
        <div>
          {transactionLoading ? (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-3 animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-[100px]"></div>
                      <div>
                        <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-20"></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-12"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <TransactionHistory transactions={transaction}/>
          )}
        </div>
      </section>
    </section>
  );
}
