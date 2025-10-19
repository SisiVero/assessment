"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { appItems } from "@/utils";
import { ChevronRight } from "lucide-react";

interface AppsDetailsProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export default function AppsDetails({
  open,
  onOpenChange,
  trigger,
}: AppsDetailsProps) {
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="z-[9999] p-4 mt-6 w-[370px]"
          align="end"
          side="bottom"
          sideOffset={8}
        >
          <div className="space-y-2 ">
            {appItems.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center justify-between py-3 px-3 hover:border hover:border-Secondary hover:rounded-2xl rounded cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-4 rounded-2xl border border-Secondary">
                      <IconComponent />
                    </div>
                    <p className="text-Primary font-medium text-sm flex flex-col">
                      {app.title}
                      <span className="text-Gray mt-1 text-xs">
                        {app.subtext}
                      </span>
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-Gray opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                  />
                </div>
              );
            })}
          </div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
