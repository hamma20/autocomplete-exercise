import type { Availability, Price, Product, ProductFull } from "./types";

export function mergeProducts(
  products: Product[],
  availability: Availability[],
  prices: Price[]
): ProductFull[] {
  const availById = new Map(availability.map((a) => [a.productId, a]));
  const priceById = new Map(prices.map((p) => [p.productId, p]));

  return products.map((p) => {
    const av = availById.get(p.id);
    const pr = priceById.get(p.id);
    return {
      ...p,
      available: av?.available ?? false,
      stock: av?.stock ?? 0,
      price: pr?.price,
      currency: pr?.currency ?? "EUR",
    };
  });
}
