import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, Check } from "lucide-react"

type Option = {
  id: string
  label: string
}

interface MultiSelectDropdownProps {
  options: Option[]
  placeholder?: string
  widthClass?: string
  value?: string[]
  onChange?: (selected: string[]) => void
}

export function MultiSelectDropdown({
  options,
  placeholder = "Select options...",
  widthClass = "w-[412px]",
  value = [],
  onChange,
}: MultiSelectDropdownProps) {
  const [selected, setSelected] = React.useState<string[]>(value)

  React.useEffect(() => {
    setSelected(value)
  }, [value])

  const toggleOption = (id: string) => {
    setSelected((prev) => {
      const newSelected = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
      onChange?.(newSelected)
      return newSelected
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`${widthClass} justify-between font-normal cursor-pointer`}
        >
          <span className="truncate max-w-[calc(100%-2rem)] text-left">
            {selected.length > 0 ? selected.join(", ") : placeholder}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={`${widthClass} pt-[18px]`}>
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.id}
            checked={selected.includes(option.id)}
            onCheckedChange={() => toggleOption(option.id)}
            className="cursor-pointer relative flex items-center px-2 py-1 rounded hover:bg-gray-100 text-Primary font-semibold mb-[18px]"
          >
            <span
              className={`flex items-center justify-center w-4 h-4 mr-2 rounded border border-gray-400 ${
                selected.includes(option.id)
                  ? "bg-black text-white font-bold"
                  : "bg-white text-transparent"
              }`}
            >
              <Check className="w-3 h-3" />
            </span>
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
