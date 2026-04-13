// import { Input } from "@/components/ui/input";
// import { InputHTMLAttributes, ReactNode } from "react";
// import { FieldValues, Path, UseFormReturn } from "react-hook-form";
// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { capitalize as capitalizeFun, cn, convertToNumber } from "@/lib/utils";
// import * as lodash from "lodash";
// import { Skeleton } from "../skeleton";
// // import IconButton from "../icon-button";
// import { Trash2 } from "lucide-react";
// import FileUpload from "@/components/common/Inputs/fileUpload";
// import IconButton from "../icon-button";

// interface Props<T extends FieldValues> {
//   name?: Path<T>;
//   label?: string | ReactNode;
//   disabled?: boolean;
//   type?: InputHTMLAttributes<T>["type"];
//   form?: UseFormReturn<T, any>;
//   placeholder?: string;
//   description?: string;
//   multiple?: boolean;
//   suffix?: ReactNode;
//   className?: string;
//   maxLength?: number;
//   isRequired?: boolean;
//   hideMessage?: boolean;
//   info?: string | ReactNode;
//   component?: ReactNode;
//   wrapperClassName?: string;
//   inputClassName?: string;
//   capitalize?: boolean;
//   showErrorBorder?: boolean;
//   value?: string | number | null;
//   fallbackValue?: string | number;
//   isLoading?: boolean;
//   maxFileUploadWidth?: string;
//   enableFileDelete?: boolean;
//   defaultFileInput?: boolean;
//   extra?: ReactNode;
//   convertNumber?: boolean;
// }

// function TextField<T extends FieldValues>({
//   form,
//   label,
//   name,
//   disabled,
//   type,
//   placeholder,
//   description,
//   multiple,
//   suffix,
//   className,
//   maxLength,
//   isRequired,
//   hideMessage,
//   wrapperClassName,
//   inputClassName,
//   capitalize,
//   showErrorBorder,
//   value,
//   fallbackValue,
//   isLoading,
//   maxFileUploadWidth,
//   enableFileDelete,
//   defaultFileInput,
//   extra,
//   convertNumber,
// }: Props<T>) {
//   const isError = name ? lodash.get(form?.formState.errors, name) : false;
//   if (name) {
//     if (type !== "file") {
//       // if (isLoading) return <Skeleton className="h-8 w-full" />;
//       return (
//         <FormField
//           control={form?.control}
//           name={name}
//           render={({ field }) => (
//             <FormItem
//               className={cn(
//                 "flex flex-1 flex-col items-start space-y-2",
//                 showErrorBorder && isError ? "border border-destructive" : "",
//                 wrapperClassName
//               )}
//             >
//               {label && (
//                 <div className="flex w-full items-center justify-between">
//                   <FormLabel className="font-normal">
//                     {label}{" "}
//                     {isRequired && <span className="text-destructive">*</span>}
//                   </FormLabel>
//                   {extra}
//                 </div>
//               )}
//               {isLoading && <Skeleton className="h-8 w-full" />}
//               {!isLoading && (
//                 <FormControl>
//                   <Input
//                     onKeyDown={(e) => {
//                       if (e.key === "ArrowUp" || e.key === "ArrowDown") {
//                         e.preventDefault();
//                       }
//                     }}
//                     className={cn(
//                       "border-gray-300 focus:border-gray-400 bg-white dark:bg-black focus:ring-0 rounded-none",
//                       inputClassName
//                     )}
//                     disabled={disabled}
//                     type={type}
//                     placeholder={placeholder}
//                     {...field}
//                     onChange={(e) => {
//                       if (convertNumber) {
//                         field.onChange(convertToNumber(e.target.value));
//                       } else {
//                         field.onChange(
//                           capitalize
//                             ? capitalizeFun(e.target.value)
//                             : e.target.value
//                         );
//                       }
//                     }}
//                     value={form ? field.value : value || ""}
//                     // suffix={suffix}
//                     // wrapperClassName={className}
//                   />
//                 </FormControl>
//               )}
//               {description && <FormDescription>{description}</FormDescription>}
//               {!hideMessage && <FormMessage />}
//             </FormItem>
//           )}
//         />
//       );
//     }
//     return (
//       <div>
//         <FormField
//           disabled={disabled}
//           control={form?.control}
//           name={name}
//           render={({ field }) => {
//             return (
//               <FormItem className="space-y-1">
//                 <FormLabel className="font-normal">{label}</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center justify-between gap-1">
//                     <FileUpload
//                       maxWidth={maxFileUploadWidth}
//                       multiple={multiple}
//                       field={field}
//                       defaultInput={defaultFileInput}
//                     />
//                     {enableFileDelete && field.value && (
//                       <IconButton
//                         onClick={() => field.onChange(undefined)}
//                         variant="outline"
//                         className="h-6 w-6 rounded-sm p-1 text-destructive"
//                         icon={<Trash2 size={13} />}
//                       />
//                     )}
//                   </div>
//                 </FormControl>
//                 {description && (
//                   <FormDescription>{description}</FormDescription>
//                 )}

//                 {!hideMessage && <FormMessage />}
//               </FormItem>
//             );
//           }}
//         />
//       </div>
//     );
//   } else {
//     return (
//       <div
//         className={cn(
//           "flex flex-col items-start space-y-1",
//           showErrorBorder && isError ? "border border-destructive" : "",
//           wrapperClassName
//         )}
//       >
//         {label && (
//           <FormLabel className="w-full text-start font-normal">
//             {label} {isRequired && <span className="text-destructive">*</span>}
//           </FormLabel>
//         )}

//         <Input
//           className={cn("", inputClassName)}
//           disabled={disabled}
//           type={type}
//           placeholder={placeholder}
//           value={value || fallbackValue}
//           //   suffix={suffix}
//           //   wrapperClassName={className}
//         />
//       </div>
//     );
//   }
// }

// export default TextField;
