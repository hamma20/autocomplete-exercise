import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className={cn("relative")}>
        {leftIcon && (
          <span className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-grey-600">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-2 shadow-sm",
            "focus:border-blue-600 focus:ring-2 focus:ring-blue-600",
            hasError ? "border-brand-danger" : "border-border-subtle",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            className
          )}
          {...props}
        />
        {rightIcon && (
          <span className="absolute inset-y-0 right-3 inline-flex items-center text-grey-600">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
