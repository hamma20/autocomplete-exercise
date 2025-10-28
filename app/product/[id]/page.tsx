import { baseUrl } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export const revalidate = 60; // la page est regénérée toutes les 60s

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${baseUrl}/api/product/${params.id}`, {
    next: { revalidate: 30 }, // ou cache: "no-store"
  });
  const p = (await res.json()) ?? {};

  if (!p) {
    return <div className="p-6 text-brand-danger">Produit introuvable.</div>;
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-card shadow-sm">
      {/* entête visuelle */}
      <div className="border-b border-border-subtle bg-gradient-to-b from-surface-app to-white p-4">
        <nav className="text-b3 text-text-secondary">
          <span className="hover:underline">Accueil</span> ·{" "}
          <span className="hover:underline">Produits</span> ·{" "}
          <span className="text-text-primary">{p.category ?? "Catégorie"}</span>
        </nav>
      </div>

      <div className="grid gap-0 md:grid-cols-3">
        <div className="border-r border-border-subtle p-6">
          <img
            src={p.image || `https://picsum.photos/seed/${p.id}/600/600`}
            alt={p.name}
            className="aspect-square w-full rounded-xl object-cover"
          />

          <div className="mt-3 grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((n) => (
              <img
                key={n}
                src={`https://picsum.photos/seed/${p.id}-${n}/120/120`}
                alt=""
                className="aspect-square w-full rounded-lg object-cover hover:opacity-80"
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-h2 font-work">{p.name}</h1>
              {p.brand && (
                <p className="text-b2-r text-text-secondary">{p.brand}</p>
              )}
            </div>

            <span
              className={[
                "shrink-0 rounded-full px-3 py-1 text-b3",
                p.available
                  ? "bg-brand-success/10 text-brand-success"
                  : "bg-brand-danger/10 text-brand-danger",
              ].join(" ")}
            >
              {p.available
                ? p.stock
                  ? `En stock (${p.stock})`
                  : "Disponible"
                : "Indisponible"}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="text-2xl font-semibold text-blue-600">
              {formatPrice(p.price, p.currency)}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button
                disabled={!p.available}
                className={[
                  "rounded-lg px-4 py-2 text-sm font-medium transition",
                  p.available
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-grey-100 text-text-secondary cursor-not-allowed",
                ].join(" ")}
              >
                Ajouter au panier
              </button>
              <button className="rounded-lg bg-grey-100 px-4 py-2 text-sm font-medium text-text-primary hover:bg-grey-200">
                Favori
              </button>
            </div>
          </div>

          {p.description && (
            <p className="mt-4 max-w-prose text-b2-r text-text-primary">
              {p.description}
            </p>
          )}

          <div className="mt-6 grid gap-3 rounded-2xl border border-border-subtle bg-white p-4 sm:grid-cols-2">
            <div className="text-b3 text-text-secondary">ID</div>
            <div className="text-b2-m">{p.id}</div>
            <div className="text-b3 text-text-secondary">Catégorie</div>
            <div className="text-b2-m">{p.category ?? "—"}</div>
            <div className="text-b3 text-text-secondary">Marque</div>
            <div className="text-b2-m">{p.brand ?? "—"}</div>
            <div className="text-b3 text-text-secondary">Disponibilité</div>
            <div className="text-b2-m">
              {p.available
                ? p.stock
                  ? `${p.stock} en stock`
                  : "Disponible"
                : "Indisponible"}
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-blue-100 p-3 text-b3 text-blue-600">
            Livraison estimée 24–48h pour les produits en stock.
          </div>
        </div>
      </div>
    </div>
  );
}
