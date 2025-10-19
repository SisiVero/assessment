"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { useGetUserQuery } from "@/redux/api/baseApi"
import { profileItems } from "@/utils"


interface ProfileDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
}

export default function ProfileDialog({
  open,
  onOpenChange,
  trigger,
}: ProfileDialogProps) {


  const { data: user } = useGetUserQuery({});
console.log(user)
  
  const getInitials = (firstName?: string, lastName?: string) => {
    if (!firstName || !lastName) return "CV";
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      {/* Portal renders dropdown outside the nav to prevent shifting */}
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="z-[9999] p-4 mt-6"
          align="end"
          side="bottom"
          sideOffset={8}
        >
         <div className="flex items-center gap-2 mb-4">
              <p className="bg-[linear-gradient(138.98deg,_#5C6670_2.33%,_#131316_96.28%)] text-White rounded-[100px] w-8 h-8 flex items-center justify-center text-xs">
              {getInitials(user?.first_name, user?.last_name)}
            </p>
            <div>
                <p className="text-Primary font-bold">{user?.first_name} {user?.last_name}</p>
                <p className="text-xs">{user?.email}</p>
            </div>
         </div>
        <div className="space-y-6 w-[300px] rounded-xl">
            {profileItems.map((pf, index)=>{
                const IconComponent = pf.icon;
                return (
                <div key={index} className="flex items-center gap-3 py-2 px-2 hover:bg-gray-50 rounded cursor-pointer">
                    <IconComponent size={18} className="text-Gray"/>
                    <p className="text-Primary font-semibold text-sm">

                    {pf.label}
                    </p>
                </div>
                )
            })}
        </div>
   
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}
