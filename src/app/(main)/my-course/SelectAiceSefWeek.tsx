"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useRouter, usePathname } from "next/navigation"
import { useMemo } from "react"

export default function SelectAiceSefWeek() {
  const router = useRouter()
  const pathname = usePathname()

  // Extract week number from pathname, e.g., "/my-course/aice-sef/week-3"
  const currentWeek = useMemo(() => {
    const match = pathname.match(/week-(\d+)/)
    return match ? match[1] : ""
  }, [pathname])

  return (
    <Select
      value={currentWeek} // set current value
      onValueChange={(value) => {
        router.push(`/my-course/aice-sef/week-${value}`)
      }}
    >
      <SelectTrigger className="w-full sm:w-[180px] bg-gray-100 text-gray-700 text-xs rounded">
        <SelectValue placeholder="Select Week" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 12 }, (_, i) => {
          const weekNumber = i + 1
          return (
            <SelectItem key={weekNumber} value={`${weekNumber}`}>
              Week {weekNumber}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
