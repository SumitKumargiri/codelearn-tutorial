import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  wrapperClass?: string;
  loading?: boolean | null | undefined;
  icon?: React.ReactNode;
  tooltip?: string | React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      wrapperClass,
      variant,
      size,
      tooltip,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    if (tooltip) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
              >
                <div
                  className={cn(
                    "flex w-full items-center sm:items-start justify-center sm:justify-start gap-[2px] text",
                    wrapperClass
                  )}
                >
                  {props.loading ? (
                    <div className="animate-spin-slow">
                      <Loader2 className="h-4 animate-spin" />
                    </div>
                  ) : (
                    props.icon
                  )}
                  {props.children}
                </div>
              </Comp>
            </TooltipTrigger>
            <TooltipContent>
              {" "}
              <div className="max-w-[250px] text-muted-foreground">
                <div className="hyphens-auto text-[12px] leading-relaxed text-white dark:text-black capitalize">
                  {tooltip}
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "flex w-full items-center justify-center gap-[2px]",
            wrapperClass
          )}
        >
          {props.loading ? (
            <div className="animate-spin-slow">
              <Loader2 className="h-4 animate-spin" />
            </div>
          ) : (
            props.icon
          )}
          {props.children}
        </div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
