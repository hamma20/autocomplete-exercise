export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(
  value?: number,
  currency = "EUR",
  locale = "fr-FR"
) {
  if (value == null) return "—";
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    value
  );
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
