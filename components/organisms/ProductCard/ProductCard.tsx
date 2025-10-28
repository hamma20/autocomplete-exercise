import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { formatPrice, cn } from "@/lib/utils";
import type { ProductFull } from "@/lib/types";

export interface ProductCardProps extends ProductFull {
  className?: string;
}

export function ProductCard({
  id,
  name,
  brand,
  image,
  price,
  currency,
  available,
  stock,
  description,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className={cn(
        "block rounded-2xl border border-border-subtle bg-surface-card p-4 shadow-sm hover:shadow-md transition",
        "hover:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-16 w-16 rounded-lg object-cover"
          />
        ) : (
          <div className="h-16 w-16 rounded-lg bg-grey-200" />
        )}

        <div className="min-w-0 flex-1">
          <p className="truncate text-h3">{name}</p>
          {brand && (
            <p className="text-b3 text-text-secondary truncate">{brand}</p>
          )}
          {description && (
            <p className="text-b3 text-grey-600 truncate">{description}</p>
          )}
          <p className="mt-1 text-b2-m text-blue-600">
            {formatPrice(price, currency)}
          </p>
        </div>

        <Badge tone={available ? "success" : "danger"}>
          {available
            ? stock
              ? `En stock (${stock})`
              : "Disponible"
            : "Indisponible"}
        </Badge>
      </div>
    </Link>
  );
}

ProductCard.displayName = "ProductCard";
