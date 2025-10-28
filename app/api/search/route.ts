import { NextResponse } from "next/server";
import { loadAllProducts } from "@/lib/loadProducts";
import { sleep } from "@/lib/utils";

export async function GET(request: Request) {
  try {
    await sleep(500); // Simuler un délai de 500ms

    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.toLowerCase() ?? "";

    if (q.length < 1) return NextResponse.json([]);

    const merged = await loadAllProducts();

    const filtered = merged.filter(
      (p) =>
        p?.name?.toLowerCase().includes(q) ||
        p?.brand?.toLowerCase().includes(q) ||
        p?.category?.toLowerCase().includes(q)
    );

    return NextResponse.json(filtered);
  } catch (err) {
    console.error("Erreur API search:", err);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
