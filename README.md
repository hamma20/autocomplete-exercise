# 🧠 Autocomplete Product Search — Test Technique

## Getting Started:

Installer toutes les dépendances (dev incluses) :

```bash
npm install
```

Lancer le serveur de développement

```bash
npm run dev
```
## 🚀 Aperçu du projet

Ce projet est un exercice frontend basé sur **Next.js 14 **, **React 18**, et **TailwindCSS**, visant à :

- Implémenter une **recherche de produits par autocomplétion** avec debounce.
- Fusionner des données provenant de **plusieurs fichiers JSON** .
- Simuler la **latence serveur** et limiter le nombre de requêtes.
- Afficher une **liste de produits** avec design clair et responsive.
- Gérer une **page de détail produit** avec rendu serveur et cache `revalidate`.

---

## 🧩 Structure du projet

```bash
app/
 ├── api/
 │   ├── search/route.ts           # Recherche produits avec latence simulée
 │   └── product/[id]/route.ts     # Détails produit par ID
 ├── product/[id]/page.tsx         # Page SSR de détail produit
 ├── layout.tsx                    # Layout global (header/footer)
 ├── page.tsx                      # Recherche + résultats
components/
 ├── atoms/                        # Éléments de base (Input…)
 ├── molecules/                    # Composants combinés (TextField,…)
 └── organisms/                    # Structures (ProductCard…)
lib/
 ├── fetchJson.ts                  # Fetch intelligent (SSR vs Client)
 ├── mergeProducts.ts              # Fusion des 3 JSON
 ├── loadProducts.ts               # Centralisation des appels produits
 ├── utils.ts                      # Fonctions utilitaires (sleep, formatPrice…)
public/mocks/autocomplete/
 ├── all-products.json
 ├── product-availability.json
 └── product-prices.json
```
