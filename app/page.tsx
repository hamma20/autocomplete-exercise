"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import type { ProductFull } from "@/lib/types";
import { TextField } from "@/components/molecules/TextField";
import { ProductCard } from "@/components/organisms/ProductCard";
import { Spinner } from "@/components/atoms/Spinner";

export default function HomePage() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<ProductFull[]>([]);
  const [loading, setLoading] = useState(false);

  const [hasSearched, setHasSearched] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  const runSearch = async (value: string) => {
    const query = value.trim();
    if (query.length < 1) {
      setResults([]);
      setLoading(false);
      setHasSearched(false);
      return;
    }
    // Annule la requête en cours (si elle existe)
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    setLoading(true);
    setHasSearched(true);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
        signal: controllerRef.current.signal,
      });
      const data = await res.json();
      setResults(data ?? []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const debounced = useMemo(() => debounce(runSearch, 400), []);
  useEffect(() => {
    debounced(q);
    return () => debounced.cancel();
  }, [q, debounced]);

  return (
    <main className="space-y-4">
      <TextField
        placeholder="Recherchez un produit, une catégorie…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {loading && (
        <div className="flex items-center gap-2 text-b2-r text-text-secondary">
          <Spinner /> <span>Recherche…</span>
        </div>
      )}

      {hasSearched && !loading && results?.length === 0 && (
        <p className="text-b2-r text-text-secondary">Aucun résultat.</p>
      )}
      <div className="grid gap-3">
        {results?.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
}
