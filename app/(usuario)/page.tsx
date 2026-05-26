"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/app/(usuario)/components/layout/header";
import { Footer } from "@/app/(usuario)/components/layout/footer";
import { ProductCard } from "@/app/(usuario)/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  catalog,
  getBestSellers,
  getCategories,
  getFeaturedProducts,
  getOccasionsHome,
} from "@/app/(usuario)/data/catalog";

const featuredProducts = getFeaturedProducts();
const bestSellers = getBestSellers();
const occasions = getOccasionsHome();
const categories = getCategories();
const { home } = catalog;

const promoBoxStyles: Record<string, string> = {
  large: "h-80 bg-gradient-to-br from-red-200 via-rose-100 to-pink-100",
  small: "h-36 bg-gradient-to-br from-pink-200 to-rose-100",
};

export default function Index() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <section className="bg-white py-4 md:py-6">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-3 rounded-3xl overflow-hidden min-h-[470px] relative">
                <Carousel
                  className="w-full"
                  opts={{ loop: true }}
                  plugins={[Autoplay({ delay: 6000 })]}
                  setApi={setApi}
                >
                  <CarouselContent>
                    {home.hero_banners.map((banner) => (
                      <CarouselItem key={banner.src}>
                        <Image
                          src={banner.src}
                          alt={banner.alt}
                          width={1200}
                          height={470}
                          className="w-full h-[490px] object-cover"
                          unoptimized
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden" />
                  <CarouselNext className="hidden" />
                </Carousel>
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-transparent rounded-full p-2"
                >
                  <img src="/Flechas/flecha-izquierda.png" alt="Anterior" width={36} height={36} />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent rounded-full p-2"
                >
                  <img src="/Flechas/flecha-derecha.png" alt="Siguiente" width={36} height={36} />
                </button>
              </div>
              <div className="md:col-span-1 rounded-3xl overflow-hidden min-h-96">
                <Image
                  src={home.side_banner.src}
                  alt={home.side_banner.alt}
                  width={400}
                  height={384}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Tenemos arreglos para todas las ocasiones
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {occasions.map((occasion) => (
                <Link
                  key={occasion.href}
                  href={occasion.href}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl hover:scale-105 transition">
                    {occasion.image}
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition">
                      {occasion.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Productos destacados
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Link href={home.mas_vendidos.href} className="lg:col-span-1">
                <div className="h-96 bg-gradient-to-b from-red-100 to-red-50 rounded-lg overflow-hidden hover:shadow-lg transition flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-lg font-semibold text-red-900">{home.mas_vendidos.titulo}</p>
                  </div>
                </div>
              </Link>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {bestSellers.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Todos los regalos terminan en sonrisas
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center hover:scale-105 transition text-3xl">
                    {category.emoji}
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition">
                      {category.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {home.promo_boxes.map((box) => (
                <Link
                  key={box.href}
                  href={box.href}
                  className={
                    box.variante === "large"
                      ? "md:col-span-1 lg:col-span-2"
                      : "md:col-span-1 lg:col-span-1"
                  }
                >
                  <div
                    className={`${promoBoxStyles[box.variante]} rounded-lg overflow-hidden hover:shadow-lg transition flex items-center justify-center`}
                  >
                    <p
                      className={`font-bold text-center ${
                        box.variante === "large"
                          ? "text-2xl text-red-900 p-6"
                          : "text-lg text-pink-900 p-4"
                      }`}
                    >
                      {box.titulo}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
