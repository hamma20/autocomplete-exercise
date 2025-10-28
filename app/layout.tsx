import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Produit Autocomplete",
  description: "Autocomplete exercice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-b from-surface-app to-white text-text-primary">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
