"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui/popover";

interface Props<T extends FieldValues> {
  name: Path<T>;
  form?: UseFormReturn<T>;
  value?: string;
  label?: string;
  className?: string;
  ButtonClassName?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  defaultValue?: string;
  horizontal?: boolean;
  ButtonVariant?: "ghost" | "destructive" | "outline" | "secondary";
}

export function DatePicker<T extends FieldValues>({
  form,
  name,
  label,
  className,
  placeholder = "Pick a Date",
  ButtonClassName,
  ButtonVariant,
}: Props<T>) {
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", className)}>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={ButtonVariant}
                  className={cn(
                    "flex w-full justify-between items-center space-x-1",
                    !field.value && "text-muted-foreground",
                    ButtonClassName
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
