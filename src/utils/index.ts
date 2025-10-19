import AnalyticsIcon from "@/assets/svg/AnalyticsIcon";
import AppsIcon from "@/assets/svg/AppsIcon";
import CRMIcons from "@/assets/svg/CRMIcons";
import HomeIcon from "@/assets/svg/HomeIcon";
import RevenueIcon from "@/assets/svg/RevenueIcon";
import {
  Settings,
  ReceiptText,
  Gift,
  Puzzle,
  Bug,
  Repeat,
  LogOut,

} from "lucide-react"
import LinkInBioIcon from "@/assets/svg/Product"
import StoreIcon from "@/assets/svg/Product2"
import MediaKitIcon from "@/assets/svg/Product3"
import InvoicingIcon from "@/assets/svg/Product4"
import BookingsIcon from "@/assets/svg/Product4"

export const topNavMenu = [
  { id: 1, menu: "Home", link: "/home", icon: HomeIcon },
  { id: 2, menu: "Analytics", link: "/analytics", icon: AnalyticsIcon },
  { id: 3, menu: "Revenue", link: "/revenue", icon: RevenueIcon },
  { id: 4, menu: "CRM", link: "/crm", icon: CRMIcons },
  { id: 5, menu: "Apps", link: "/apps", icon: AppsIcon },
];

export const transactionType = [
  { label: "Store Transactions", id: "Store Transactions" },
  { label: "Get Tipped", id: "Get Tipped" },
  { label: "Withdrawals", id: "Withdrawals" },
  { label: "Chargebacks", id: "Chargebacks" },
  { label: "Cashbacks", id: "Cashbacks" },
  { label: "Refer & Earn", id: "Refer & Earn" },
];
export const transactionStatus= [
  { label: "Successfull", id: "Successfull" },
  { label: "Pending", id: "Pending" },
  { label: "Failed", id: "Failed" },

];

export const profileItems = [
  { label: "Settings", icon: Settings },
  { label: "Purchase History", icon: ReceiptText },
  { label: "Refer & Earn", icon: Gift },
  { label: "Integrations", icon: Puzzle },
  { label: "Report Bug", icon: Bug },
  { label: "Switch Account", icon: Repeat },
  { label: "Sign Out", icon: LogOut },
]

// export const appItems = [
//   { label: "Link in Bio", icon: Link },
//   { label: "Store", icon: Store },
//   { label: "Invoices", icon: ReceiptText },
//   { label: "Request Payment", icon: CreditCard },
// ]



export const appItems = [
  {
    title: "Link in Bio",
    subtext: "Manage your Link in Bio",
    icon: LinkInBioIcon,
  },
  {
    title: "Store",
    subtext: "Manage your store activities",
    icon: StoreIcon,
  },
  {
    title: "Media Kit",
    subtext: "Manage your Media Kit",
    icon: MediaKitIcon,
  },
  {
    title: "Invoicing",
    subtext: "Manage your invoices",
    icon: InvoicingIcon,
  },
  {
    title: "Bookings",
    subtext: "Manage your bookings",
    icon: BookingsIcon,
  },
]
