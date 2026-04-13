// "use client";

// import type React from "react";

// import { useState } from "react";
// import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Eye, EyeOff } from "lucide-react";

// interface FloatingLabelFieldProps<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
// > {
//   form: UseFormReturn<TFieldValues>;
//   name: TName;
//   label: string;
//   type?: string;
//   placeholder?: string;
//   className?: string;
//   disabled?: boolean;
//   endIcon?: React.ReactNode;
//   showPasswordToggle?: boolean;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// function FloatingLabelField<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
// >({
//   form,
//   name,
//   label,
//   type = "text",
//   placeholder = " ",
//   className = "",
//   disabled = false,
//   endIcon,
//   showPasswordToggle = false,
//   onChange,
//   ...props
// }: FloatingLabelFieldProps<TFieldValues, TName>) {
//   const [focused, setFocused] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const hasError = !!form.formState.errors[name];

//   return (
//     <FormField
//       control={form.control}
//       name={name}
//       render={({ field }) => {
//         const isActive = focused || field.value;
//         const inputType = showPasswordToggle
//           ? showPassword
//             ? "text"
//             : "password"
//           : type;

//         return (
//           <FormItem>
//             <div className="relative">
//               <FormControl>
//                 <Input
//                   {...field}
//                   {...props}
//                   type={inputType}
//                   disabled={disabled}
//                   className={`dark:text-white dark:bg-black bg-[#F2F2F2] peer pt-6 pb-2 px-3 h-14 transition-all border-2 border-[#dadce0e3] dark:border-white rounded-xl text-black placeholder-transparent duration-200 ${
//                     showPasswordToggle || endIcon ? "pr-12" : ""
//                   } ${
//                     hasError
//                       ? "border-red-500 focus:border-red-500 focus:ring-red-500"
//                       : "focus:border-primary"
//                   } ${className}`}
//                   onFocus={(e) => {
//                     setFocused(true);
//                   }}
//                   onBlur={(e) => {
//                     setFocused(false);
//                     field.onBlur();
//                   }}
//                   placeholder={placeholder}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     onChange?.(e);
//                   }}
//                 />
//               </FormControl>

//               <label
//                 className={`absolute left-3 text-[#0d336b] dark:text-white bg-[#F2F2F2] dark:bg-black transition-all duration-200 pointer-events-none bg-background px-1 ${
//                   isActive
//                     ? "-top-2 text-sm text-muted-foreground"
//                     : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
//                 } ${hasError ? "text-red-500" : ""} ${disabled ? "text-muted-foreground/50" : ""}`}
//               >
//                 {label}
//               </label>

//               {showPasswordToggle && (
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
//                   onClick={() => setShowPassword(!showPassword)}
//                   disabled={disabled}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4 text-muted-foreground" />
//                   ) : (
//                     <Eye className="h-4 w-4 text-muted-foreground" />
//                   )}
//                 </Button>
//               )}

//               {endIcon && !showPasswordToggle && (
//                 <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                   {endIcon}
//                 </div>
//               )}
//             </div>
//             <FormMessage className="text-red-500 text-xs text-start px-2 " />
//           </FormItem>
//         );
//       }}
//     />
//   );
// }

// export default FloatingLabelField;


//----------------- new code -----------------------------------------------


"use client";

import type React from "react";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface FloatingLabelFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  form: UseFormReturn<TFieldValues>;
  name: TName;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FloatingLabelField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  form,
  name,
  label,
  type = "text",
  placeholder,
  className = "",
  disabled = false,
  endIcon,
  showPasswordToggle = false,
  onChange,
  ...props
}: FloatingLabelFieldProps<TFieldValues, TName>) {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = !!form.formState.errors[name];

  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className={`font-normal leading-normal mb-1 block text-[17px] font-manrope ${
              hasError ? "text-red-500" : "text-[#333] dark:text-white"
            }`}
          >
            {label}
            <span className="text-red-500 ml-1">*</span>
          </FormLabel>

          <div className="relative">
            <FormControl>
              <Input
                {...field}
                {...props}
                type={inputType}
                disabled={disabled}
                placeholder={placeholder}
                className={`h-14 px-3 rounded-[5px] bg-[#F2F2F2] dark:bg-black dark:text-white ${
                  hasError
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-[#dadce0e3] focus:border-primary"
                } ${showPasswordToggle || endIcon ? "pr-12" : ""} ${className}`}
                onChange={(e) => {
                  field.onChange(e);
                  onChange?.(e);
                }}
              />
            </FormControl>

            {showPasswordToggle && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setShowPassword(!showPassword)}
                disabled={disabled}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            )}

            {endIcon && !showPasswordToggle && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {endIcon}
              </div>
            )}
          </div>

          <FormMessage className="text-red-500 text-xs px-1" />
        </FormItem>
      )}
    />
  );
}

export default FloatingLabelField;

