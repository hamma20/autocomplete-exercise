export type Product = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  category?: string;
  brand?: string;
  logo?: string;
};

export type Availability = {
  productId: string;
  available: boolean;
  stock?: number;
};

export type Price = {
  productId: string;
  price: number;
  currency?: string;
};

export type ProductFull = Product & {
  available?: boolean;
  stock?: number;
  price?: number;
  currency?: string;
};
