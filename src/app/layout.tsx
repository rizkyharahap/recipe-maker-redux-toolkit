import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Maker",
  description:
    "User bisa membuat resep masakan dari website ini, mulai dari memilih bahan, tata cara pembuatan, dan menambahkan gambar resep",
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
