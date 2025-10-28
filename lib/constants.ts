export const AUTOCOMPLETE_BASE = "/mocks";

export const PATHS = {
  PRODUCTS: `${AUTOCOMPLETE_BASE}/all-products.json`,
  AVAILABILITY: `${AUTOCOMPLETE_BASE}/product-availability.json`,
  PRICES: `${AUTOCOMPLETE_BASE}/product-prices.json`,
} as const;

export const baseUrl = "http://localhost:3000";
