import { cn } from "@/lib/utils";

type Tone = "neutral" | "success" | "danger" | "info";

const tones: Record<Tone, string> = {
  neutral: "bg-grey-100 text-text-secondary",
  success: "bg-brand-success/10 text-brand-success",
  danger: "bg-brand-danger/10 text-brand-danger",
  info: "bg-blue-100 text-blue-600",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
