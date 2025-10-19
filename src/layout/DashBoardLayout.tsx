import { useState } from "react";
import Chat from "@/assets/svg/Chat";
import Logo from "@/assets/svg/Logo";
import Menu from "@/assets/svg/Menu";
import Notifications from "@/assets/svg/Notifications";
import Product from "@/assets/svg/Product";
import Product2 from "@/assets/svg/Product2";
import Product3 from "@/assets/svg/Product3";
import Product4 from "@/assets/svg/Product4";
import type { ChildrenProp } from "@/types";
import { topNavMenu } from "@/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "@/redux/api/baseApi";
import ProfileDialog from "@/components/ProfileDialog";
import AppsDetails from "@/components/AppsDetails";
import { ChevronDown } from "lucide-react";

function DashBoardLayout({ children }: ChildrenProp) {
  const { data: user } = useGetUserQuery({});
  const location = useLocation();
  const navigate = useNavigate()
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  
  const getInitials = (firstName?: string, lastName?: string) => {
    if (!firstName || !lastName) return "CV";
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };
  return (
    <div className="text-Gray text-base">
      {/* //top nav */}
      <nav
        className="flex items-center justify-between  bg-White shadow-[0px_2px_4px_0px_rgba(45,59,67,0.05),_0px_2px_6px_0px_rgba(45,59,67,0.06)] rounded-[100px] fixed left-4 right-4 top-0  border-2 border-White z-[50]"
        style={{ padding: "16px" }}
      >
        <button onClick={(()=> navigate("/"))} className="cursor-pointer">
        <Logo />
        </button>
        <ul className="flex items-center gap-6">
          {topNavMenu.map((nav) => {
            const IconComponent = nav.icon;
            const isActive = location.pathname === nav.link;
            
            if (nav.menu === "Apps") {
              return (
                <li key={nav.id}>
                  <AppsDetails 
                    open={isAppsOpen} 
                    onOpenChange={setIsAppsOpen}
                    trigger={
                      <button
                        className={`px-4 py-2 flex items-center gap-1 transition rounded-full cursor-pointer ${
                          isAppsOpen 
                            ? 'bg-Primary text-white [&_svg]:text-white' 
                            : 'hover:bg-Secondary hover:text-[var(--color-Primary)]'
                        }`}
                      >
                        <IconComponent />
                        {nav.menu}
                        {isAppsOpen && (
                          <>
                          <div className="h-4 border-Gray border-l ml-2"></div>
                            <span className="ml-2">Link in Bio</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>
                    }
                  />
                </li>
              );
            }
            
            return (
              <li key={nav.id}>
                <Link
                  to={nav.link}
                  className={`px-4 py-2 flex items-center gap-1 transition rounded-full ${
                    isActive 
                      ? 'bg-Primary text-white [&_svg]:text-white' 
                      : 'hover:bg-Secondary hover:text-[var(--color-Primary)]'
                  }`}
                >
                  <IconComponent />
                  {nav.menu}
                </Link>
              </li>
            );
          })
        }
        </ul>
        <div className="flex items-center gap-4">
          <Notifications />
          <Chat />
          <div className="bg-Secondary gap-2 flex items-center py-1 pl-[5px] pr-3 rounded-[100px]">
            <p className="bg-[linear-gradient(138.98deg,_#5C6670_2.33%,_#131316_96.28%)] text-White rounded-[100px] w-8 h-8 flex items-center justify-center text-xs">
              {getInitials(user?.first_name, user?.last_name)}
            </p>
            <ProfileDialog 
              open={isProfileOpen} 
              onOpenChange={setIsProfileOpen}
              trigger={
                <button className="cursor-pointer">
                  <Menu />
                </button>
              }
            />
          </div>
        </div>
      </nav>
      <aside className="fixed left-4 top-[230px] flex flex-col gap-4 bg-White shadow-[0px_6px_12px_0px_rgba(92,115,131,0.08),_0px_4px_8px_0px_rgba(92,115,131,0.08)] rounded-[100px] items-center justify-center w-12 h-48 z-[50] [&_svg]:grayscale [&_svg]:opacity-60">
        <Product />
        <Product2 />
        <Product3 />
        <Product4 />
      </aside>
      <main className="h-full bg-White px-[140px] mt-16 relative">{children}</main>
      

    </div>
  );
}

export default DashBoardLayout;
