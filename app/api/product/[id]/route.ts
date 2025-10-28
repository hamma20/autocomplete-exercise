import { NextResponse } from "next/server";
import { loadProductById } from "@/lib/loadProducts";
import { sleep } from "@/lib/utils";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await sleep(500); // Simuler un délai de 500ms

    const product = await loadProductById(params.id);
    if (!product) {
      return NextResponse.json(
        { error: `Produit ${params.id} introuvable` },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("Erreur API product:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
