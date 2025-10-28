import { cn } from "@/lib/utils";

export function Spinner({
  className,
  size = 16,
  light = false,
}: {
  className?: string;
  size?: number;
  light?: boolean;
}) {
  return (
    <span
      role="status"
      aria-label="loading"
      className={cn("inline-flex items-center justify-center", className)}
    >
      <span
        className={cn(
          "animate-spin rounded-full border-2",
          light
            ? "border-white/30 border-t-white"
            : "border-grey-300 border-t-blue-600"
        )}
        style={{ width: size, height: size }}
      />
    </span>
  );
}
