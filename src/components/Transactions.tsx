import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

interface Transaction {
  amount: number;
  metadata?: {
    name?: string;
    type?: string;
    email?: string;
    quantity?: number;
    country?: string;
    product_name?: string;
  };
  payment_reference?: string;
  status: string;
  type: "deposit" | "withdrawal";
  date: string;
}

interface Props {
  transactions?: Transaction[];
}

export default function TransactionHistory({ transactions }: Props) {
  return (
    <section className="bg-White mb-40">

      <ul className="space-y-4">
        {transactions?.map((tx, index) => (
          <li
            key={tx.payment_reference || index}
            className="flex items-center justify-between pb-3 last:border-none"
          >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  tx.type === "deposit"
                    ? "bg-IconGreen text-Sucess":
                      tx.type === "withdrawal" ?
                     "bg-withdraw text-Out" : "bg-Out"
                }`}
              >
                {tx.type === "deposit" ? (
                  <FiArrowDownLeft size={20} />
                ) : (
                  <FiArrowUpRight size={20} />
                )}
              </div>

              <div>
                <p className="text-sm font-medium">
                  {tx.metadata?.product_name || tx.type === "deposit" ? "Payment received" : "Withdrawal"}
                </p>
                {tx.metadata?.name && (
                  <p className="text-xs text-gray-500">{tx.metadata.name}</p>
                )}
                {!tx.metadata?.name && (
                  <p
                    className={`text-xs font-medium capitalize ${
                      tx.status === "successful"
                        ? "text-Sucess"
                        : "text-Pending"
                    }`}
                  >
                    {tx.status}
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                USD {tx.amount.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(tx.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </li>
        ))
    }
      </ul>
    </section>
  );
}
