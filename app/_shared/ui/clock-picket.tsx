"use client"

import type React from "react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"
import { cn } from "@/lib/utils"
import { Clock, ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"

interface EventTimePickerProps {
  value: string
  onChange: (value: string) => void
}

function parseTime(value: string) {
  if (!value) {
    return { hours: "12", minutes: "00", isPM: false }
  }

  const [hour = "00", minute = "00"] = value.split(":")
  const hourNum = Number.parseInt(hour, 10)

  return {
    hours: (hourNum % 12 || 12).toString().padStart(2, "0"),
    minutes: minute.padStart(2, "0"),
    isPM: hourNum >= 12,
  }
}

export function EventTimePicker({ value, onChange }: EventTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { hours, minutes, isPM } = parseTime(value)

  const updateTime = (newHours: string, newMinutes: string, newIsPM: boolean) => {
    let hour24 = Number.parseInt(newHours, 10)
    if (newIsPM && hour24 !== 12) hour24 += 12
    if (!newIsPM && hour24 === 12) hour24 = 0
    const formattedHours = hour24.toString().padStart(2, "0")
    const formattedMinutes = newMinutes.padStart(2, "0")
    onChange(`${formattedHours}:${formattedMinutes}`)
  }

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newHours = e.target.value
    if (Number.parseInt(newHours, 10) > 12) newHours = "12"
    if (Number.parseInt(newHours, 10) < 1) newHours = "01"
    updateTime(newHours.padStart(2, "0"), minutes, isPM)
  }

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newMinutes = e.target.value
    if (Number.parseInt(newMinutes, 10) > 59) newMinutes = "59"
    if (Number.parseInt(newMinutes, 10) < 0) newMinutes = "00"
    updateTime(hours, newMinutes.padStart(2, "0"), isPM)
  }

  const incrementHours = () => {
    const newHours = ((Number.parseInt(hours, 10) % 12) + 1).toString().padStart(2, "0")
    updateTime(newHours, minutes, isPM)
  }

  const decrementHours = () => {
    const newHours = (((Number.parseInt(hours, 10) - 2 + 12) % 12) + 1).toString().padStart(2, "0")
    updateTime(newHours, minutes, isPM)
  }

  const incrementMinutes = () => {
    const newMinutes = ((Number.parseInt(minutes, 10) + 1) % 60).toString().padStart(2, "0")
    updateTime(hours, newMinutes, isPM)
  }

  const decrementMinutes = () => {
    const newMinutes = ((Number.parseInt(minutes, 10) - 1 + 60) % 60).toString().padStart(2, "0")
    updateTime(hours, newMinutes, isPM)
  }

  const toggleAMPM = () => {
    updateTime(hours, minutes, !isPM)
  }

  const to12HourFormat = (time: string): string => {
    const [hour = "00", minute = "00"] = time.split(":")
    const hourNum = Number.parseInt(hour, 10)
    const ampm = hourNum >= 12 ? "PM" : "AM"
    const hour12 = hourNum % 12 || 12
    return `${hour12.toString().padStart(2, "0")}:${minute} ${ampm}`
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-[200px] justify-start text-left font-normal", !value && "text-muted-foreground")}
        >
          <Clock className="mr-2 h-4 w-4" />
          {value ? to12HourFormat(value) : "Select time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <div className="p-4 pb-0">
          <h3 className="font-medium text-sm">Select time</h3>
          <p className="text-sm text-muted-foreground">Choose a time for your event</p>
        </div>
        <div className="p-4 pt-0">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center mx-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={incrementHours}>
                <ChevronUp className="h-4 w-4" />
              </Button>
              <Input
                type="text"
                value={hours}
                onChange={handleHoursChange}
                className="w-[60px] text-center text-2xl h-12"
                min={1}
                max={12}
              />
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={decrementHours}>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-4xl mx-2">:</span>
            <div className="flex flex-col items-center mx-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={incrementMinutes}>
                <ChevronUp className="h-4 w-4" />
              </Button>
              <Input
                type="text"
                value={minutes}
                onChange={handleMinutesChange}
                className="w-[60px] text-center text-2xl h-12"
                min={0}
                max={59}
              />
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={decrementMinutes}>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAMPM}
                className="w-[60px] h-[60px] text-lg font-medium"
              >
                {isPM ? "PM" : "AM"}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end p-4 pt-0">
          <Button variant="default" size="sm" onClick={() => setIsOpen(false)}>
            Done
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
