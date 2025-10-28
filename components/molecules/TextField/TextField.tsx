import * as React from "react";
import { Input } from "@/components/atoms/Input";
import { cn } from "@/lib/utils";

interface TextFieldProps extends React.ComponentProps<typeof Input> {
  label?: string;
  hint?: string;
  error?: string;
}

export function TextField({
  id: idProp,
  label,
  hint,
  error,
  className,
  ...props
}: TextFieldProps) {
  const generatedId = React.useId();
  const id = idProp ?? generatedId;

  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className={cn("space-y-1", className)}>
      {label && (
        <label htmlFor={id} className="block text-b2-m text-text-primary">
          {label}
        </label>
      )}

      <Input
        id={id}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        hasError={!!error}
        {...props}
      />

      {error ? (
        <p id={`${id}-error`} className="text-b3 text-brand-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-b3 text-text-secondary">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

TextField.displayName = "TextField";
