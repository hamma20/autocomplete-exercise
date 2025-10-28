import { fetchJson } from "@/lib/fetchJson";
import { mergeProducts } from "@/lib/mergeProducts";
import { PATHS } from "@/lib/constants";
import type { Product, Availability, Price, ProductFull } from "@/lib/types";

export async function loadAllProducts(): Promise<ProductFull[]> {
  const [products, availability, prices] = await Promise.all([
    fetchJson<Product[]>(PATHS.PRODUCTS),
    fetchJson<Availability[]>(PATHS.AVAILABILITY),
    fetchJson<Price[]>(PATHS.PRICES),
  ]);

  return mergeProducts(products, availability, prices);
}

export async function loadProductById(id: string) {
  const merged = await loadAllProducts();
  return merged.find((p) => p.id === id);
}
