import type { Metadata } from "next";
import { Exo_2, Manrope } from "next/font/google";
import "./globals.css";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "greek"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DL Electric | Ηλεκτρολογικές Λύσεις & Εγκαταστάσεις",
  description:
    "DL Electric by Dimitris Lykos. Ηλεκτρολογικές μελέτες, εγκαταστάσεις μέσης και υψηλής τάσης, smart home, CCTV και βιομηχανικά έργα με 22 χρόνια εμπειρίας.",
  metadataBase: new URL(process.env.AUTH_URL || "http://localhost:3000"),
  openGraph: {
    title: "DL Electric | Ηλεκτρολογικές Λύσεις & Εγκαταστάσεις",
    description:
      "DL Electric by Dimitris Lykos. Ηλεκτρολογικές μελέτες, εγκαταστάσεις μέσης και υψηλής τάσης, smart home, CCTV και βιομηχανικά έργα με 22 χρόνια εμπειρίας.",
    type: "website",
    locale: "el_GR",
    siteName: "DL Electric",
  },
  twitter: {
    card: "summary_large_image",
    title: "DL Electric | Ηλεκτρολογικές Λύσεις & Εγκαταστάσεις",
    description:
      "Ηλεκτρολογικές μελέτες, εγκαταστάσεις μέσης και υψηλής τάσης, smart home και CCTV με 22 χρόνια εμπειρίας.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="el" className={`${exo.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
