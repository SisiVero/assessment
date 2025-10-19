import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import DatePicker from "./dropdowns/DateDropdown";
import { MultiSelectDropdown } from "./dropdowns/Dropdown";
import { transactionStatus, transactionType } from "@/utils";
import Button from "./Button";

interface FilterProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
const filterRange = ["Today", "Last 7 days", "This month", "Last 3 months"];

export function Filter({ open, onOpenChange }: FilterProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const isFormValid = startDate && endDate && selectedTypes.length > 0 && selectedStatuses.length > 0;

  const handleClear = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setSelectedTypes([]);
    setSelectedStatuses([]);
  };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="!min-w-[456px]">
        <SheetHeader>
          <SheetTitle className="pb-5 pr-6 text-2xl font-bold text-Primary">
            Filter
          </SheetTitle>
          <SheetDescription>
            <div className="flex items-center gap-2 ">
              {filterRange.map((range) => (
                <button
                  key={range}
                  className="w-fit justify-start rounded-[100px] cursor-pointer text-Primary text-sm border border-Secondary px-[18px] py-2.5 bg-White text-nowrap"
                >
                  {range}
                </button>
              ))}
            </div>{" "}
          </SheetDescription>
        </SheetHeader>

        <div className="mb-6">
          <p className=" text-sm text-Primary font-semibold px-4 mb-3">
            Date Range
          </p>
          <div className=" flex items-center gap-2 px-4">
            <DatePicker value={startDate} onChange={setStartDate} />
            <DatePicker value={endDate} onChange={setEndDate} />
          </div>
        </div>
        <div className="w-fit mx-4 mb-6">
          <Label className="mb-4">Transaction Type</Label>
          <MultiSelectDropdown
            options={transactionType}
            placeholder="Select Transaction Types"
            value={selectedTypes}
            onChange={setSelectedTypes}
          />
        </div>

        <div className="w-fit mx-4 mb-6">
          <Label className="mb-4">Transaction Status</Label>
          <MultiSelectDropdown
            options={transactionStatus}
            placeholder="Select Transaction Status"
            value={selectedStatuses}
            onChange={setSelectedStatuses}
          />
        </div>
        <SheetFooter>
          <div className="flex items-center justify-evenly w-full">
            <Button
              type="button"
              className="w-[198px] py-3 px-6 bg-White border border-Secondary text-Primary font-semibold hover:bg-Secondary cursor-pointer"
              variant="secondary"
              onClick={handleClear}
            >
              Clear
            </Button>
            <SheetClose asChild>
              <Button
                variant="primary"
                className={`w-[198px] py-3 px-6 font-semibold ${
                  !isFormValid ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
                disabled={!isFormValid}
              >
                Apply
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
