import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  tooltip?: string;
  loading?: boolean;
  noMargin?: boolean;
}

const IconButton = (props: Props) => {
  if (props.tooltip)
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              {...props}
              loading={props.loading}
              className={cn(
                "aspect-square h-8 w-8 rounded-full",
                props.noMargin ? "h-5 w-5 p-0" : "",
                props.className
              )}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{props.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  else
    return (
      <Button
        {...props}
        className={cn(
          "aspect-square h-8 w-8 rounded-full p-2",
          props.noMargin ? "h-5 w-5 p-0" : "",
          props.className
        )}
      />
    );
};

export default IconButton;
