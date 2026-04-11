// import { FieldValues, Path, UseFormReturn } from "react-hook-form";
// import { FormField, FormItem, FormMessage } from "../form";

// interface Props<T extends FieldValues> {
//   name: Path<T>;
//   form?: UseFormReturn<T, any>;
//   value?: string;
//   options: SelectOptionType[];
//   label?: string;
//   className?: string;
//   isLoading?: boolean;
//   placeholder?: string;
//   searchPlaceholder?: string;
//   onValueChange?: (value: string) => void;
//   disabled?: boolean;
//   defaultValue?: string;
//   horizontal?: boolean;
//   ButtonVariant?: "ghost" | "destructive" | "outline" | "secondary";
// }

// function SelectField<T extends FieldValues>({
//   form,
//   name,
//   value,
//   options,
//   label,
//   className,
//   defaultValue,
//   isLoading,
//   placeholder = "Select an option",
//   searchPlaceholder = "Search options...",
//   onValueChange,
//   disabled,
//   horizontal,
//   ButtonVariant,
// }: Props<T>) {
//   return (
//     <FormField
//       control={form?.control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className={className}>
//           <Select
//             options={options}
//             label={label}
//             ButtonVariant={ButtonVariant}
//             value={field.value || defaultValue}
//             onValueChange={(value) => {
//               field.onChange(value);
//               onValueChange?.(value);
//             }}
//             disabled={disabled || isLoading}
//             placeholder={placeholder}
//             searchPlaceholder={searchPlaceholder}
//             className={className}
//           />
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// }

// export default SelectField;
