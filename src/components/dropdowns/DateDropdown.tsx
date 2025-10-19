"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  onChange?: (date: Date | undefined) => void;
  value?: Date | undefined;
}

export default function DatePicker({ onChange, value }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(value)

  React.useEffect(() => {
    setDate(value)
  }, [value])

  return (
    <div className="flex flex-col gap-3 ">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className={`w-[203px] justify-between font-normal cursor-pointer transition-all ${
              open ? 'border-[3px] border-Primary' : ''
            } ${
              date ? 'bg-Secondary text-Primary' : 'bg-white'
            }`}
          >
            {date ? format(date, "dd MMM yyyy") : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              onChange?.(date)
              setOpen(false)
            }}
            className="cursor-pointer"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
