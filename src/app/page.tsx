"use client";

import Header from "@/components/atoms/Header";
import { Separator } from "@/components/atoms/Separator";

import IngredientList from "./components/IngredientList";
import IngredientSection from "./components/IngredientSection";
import MainSection from "./components/MainSection";
import StepSection from "./components/StepSection";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight text-indigo-600">
            Recipe Maker
          </h2>
          <p className="text-muted-foreground">
            Buat resep kamu dengan menggunakan bahan-bahan yang sudah
            disediakan, atur jumlah bahan yang akan digunakan, tentukan cara
            pembuatannya, dan anda dapat memasukan gambar resep anda.
          </p>
        </div>

        <Separator />

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 relative">
          <aside className="lg:w-1/5 h-screen sticky top-0">
            <IngredientList />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-12">
              <div className="space-y-6">
                <Header
                  title="Nama dan Gambar"
                  description="Masukan nama dan gambar resep kamu agar lebih menarik."
                />

                <Separator />
                <MainSection />
              </div>

              <div className="space-y-6">
                <Header
                  title="Bahan-Bahan"
                  description="Pilih bahan-bahan yang tersedia dan atur jumlahnya sesuai
                    yang kamu agar enak."
                />

                <Separator />
                <IngredientSection />
              </div>

              <div className="space-y-6">
                <Header
                  title="Tata Cara"
                  description="Tentukan tata cara pembuatan yang baik dan benar, agar tidak
                  terjadi kesalahan yang buat makanan kamu tidak enak."
                />

                <Separator />
                <StepSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
