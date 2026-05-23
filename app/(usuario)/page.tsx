"use client";

import Link from "next/link";
import Image from "next/image";
import { type ReactNode, useRef, useState } from "react";
import { Header } from "@/app/(usuario)/components/layout/header";
import { Footer } from "@/app/(usuario)/components/layout/footer";
import { ProductCard } from "@/app/(usuario)/components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Sample product data
const featuredProducts = [
  {
    id: "1",
    name: "Ramo con Rosas y Chocolates Ferrero",
    price: 129.90,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23f5f5f5' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EFloral Arrangement%3C/text%3E%3C/svg%3E",
  },
  {
    id: "2",
    name: "Arreglo de Rosas Premium",
    price: 159.90,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23f5f5f5' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EPremium Roses%3C/text%3E%3C/svg%3E",
  },
  {
    id: "3",
    name: "Ramo Mix de Flores",
    price: 99.90,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23f5f5f5' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EMixed Bouquet%3C/text%3E%3C/svg%3E",
  },
  {
    id: "4",
    name: "Canasta de Flores Variadas",
    price: 189.90,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23f5f5f5' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EFlower Basket%3C/text%3E%3C/svg%3E",
  },
];

const occasions = [
  { label: "Amor", image: "💕", href: "/ocasiones/amor" },
  { label: "Aniversario", image: "💍", href: "/ocasiones/aniversario" },
  { label: "Condolencias", image: "🙏", href: "/condolencias" },
  { label: "Cumpleaños", image: "🎂", href: "/ocasiones/cumpleaños" },
  { label: "Graduación", image: "🎓", href: "/ocasiones/graduacion" },
  { label: "Mejórate Pronto", image: "💚", href: "/ocasiones/mejorate-pronto" },
  { label: "Nacimientos", image: "👶", href: "/ocasiones/nacimientos" },
];

const categories = [
  { label: "Variadas", href: "/variadas" },
  { label: "Girasoles", href: "/girasoles" },
  { label: "Packs", href: "/pack" },
  { label: "Rosas", href: "/rosas" },
  { label: "Tulipanes", href: "/tulipanes" },
];

const heroBanners = [
  { src: "/BannerEspeciales/bannerInicial-1.webp", alt: "Banner 1" },
  { src: "/BannerEspeciales/bannerInicial-2.webp", alt: "Banner 2" },
  { src: "/BannerEspeciales/bannerInicial-3.webp", alt: "Banner 3" },
];

export default function Index() {
  const [api, setApi] = useState<CarouselApi>();
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-4 md:py-6">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Banner 1 - Carousel */}
              <div className="md:col-span-3 rounded-lg overflow-hidden min-h-[470px] relative">
                <Carousel className="w-full" opts={{ loop: true }} plugins={[Autoplay({ delay: 6000 })]} setApi={setApi}>
                  <CarouselContent>
                    {heroBanners.map((banner) => (
                      <CarouselItem key={banner.src}>
                        <Image
                          src={banner.src}
                          alt={banner.alt}
                          width={1200}
                          height={470}
                          className="w-full h-[470px] object-cover"
                          unoptimized
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden" />
                  <CarouselNext className="hidden" />
                </Carousel>
                <button onClick={() => api?.scrollPrev()} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-transparent rounded-full p-2">
                  <img src="/Flechas/flecha-izquierda.png" alt="Previous" width={36} height={36} />
                </button>
                <button onClick={() => api?.scrollNext()} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent rounded-full p-2">
                  <img src="/Flechas/flecha-derecha.png" alt="Next" width={36} height={36} />
                </button>
              </div>
              {/* Banner 2 */}
              <div className="md:col-span-1 rounded-lg overflow-hidden min-h-96">
                <Image
                  src="/BannerEspeciales/bannerInicial-4.png"
                  alt="Banner 4"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Occasions Section */}
        <section className="py-12 bg-gray-50">
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

        {/* Products Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Productos destacados
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  href={`/product/${product.id}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Banner */}
              <Link href="/mas-vendidos" className="lg:col-span-1">
                <div className="h-96 bg-gradient-to-b from-red-100 to-red-50 rounded-lg overflow-hidden hover:shadow-lg transition flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-lg font-semibold text-red-900">Más Vendidos</p>
                  </div>
                </div>
              </Link>

              {/* Products */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {featuredProducts.slice(0, 4).map((product) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                      href={`/product/${product.id}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
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
                    🌹
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

        {/* Promo Boxes Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Large Left Box */}
              <Link href="/arreglos" className="md:col-span-1 lg:col-span-2">
                <div className="h-80 bg-gradient-to-br from-red-200 via-rose-100 to-pink-100 rounded-lg overflow-hidden hover:shadow-lg transition flex items-center justify-center">
                  <p className="text-2xl font-bold text-red-900 text-center p-6">
                    Arreglos Especiales
                  </p>
                </div>
              </Link>

              {/* Small Right Boxes */}
              <Link href="/ramos" className="md:col-span-1 lg:col-span-1">
                <div className="h-36 bg-gradient-to-br from-pink-200 to-rose-100 rounded-lg overflow-hidden hover:shadow-lg transition flex items-center justify-center">
                  <p className="text-lg font-bold text-pink-900 text-center p-4">
                    Ramos Elegantes
                  </p>
                </div>
              </Link>

              <Link href="/peluches" className="md:col-span-1 lg:col-span-1">
                <div className="h-36 bg-gradient-to-br from-amber-200 to-orange-100 rounded-lg overflow-hidden hover:shadow-lg transition flex items-center justify-center">
                  <p className="text-lg font-bold text-amber-900 text-center p-4">
                    Peluches Tiernos
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
