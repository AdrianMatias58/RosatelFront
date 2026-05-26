"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/(usuario)/components/layout/header";
import { Footer } from "@/app/(usuario)/components/layout/footer";
import { ProductCard } from "@/app/(usuario)/components/ProductCard";
import {
  catalog,
  filterAndSortProducts,
  getPageContent,
  getPriceBounds,
  getProductsBySlug,
  type SortOption,
} from "@/app/(usuario)/data/catalog";

const { filtros } = catalog;
const priceBounds = getPriceBounds();

export default function CategoryDynamicPage() {
  const params = useParams();
  const currentCategory = (params?.categoria as string) || "default";

  const content = getPageContent(currentCategory);
  const baseProducts = useMemo(
    () => getProductsBySlug(currentCategory),
    [currentCategory]
  );

  const [sortBy, setSortBy] = useState<SortOption>("ventas");
  const [priceRange, setPriceRange] = useState([priceBounds.min, priceBounds.max]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const products = useMemo(
    () =>
      filterAndSortProducts(baseProducts, {
        sortBy,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
        selectedOccasions,
        selectedColors,
      }),
    [baseProducts, sortBy, priceRange, selectedOccasions, selectedColors]
  );

  const toggleFilter = (
    value: string,
    selected: string[],
    setter: (values: string[]) => void
  ) => {
    setter(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <section className="w-full bg-white flex flex-col">
          <div className="w-full h-32 md:h-48 relative overflow-hidden select-none">
            <Image
              src={content.bannerImg}
              alt={`Banner de ${content.title}`}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="w-full bg-white min-h-48 flex items-center justify-center relative px-10 md:px-20">
            <div className="absolute left-4 md:left-8 top-6 bottom-6 w-[2px] bg-[#E30613]" />
            <div className="text-black font-normal leading-relaxed text-[10px] md:text-xs text-justify max-w-xl select-none">
              <p>{content.descripcion}</p>
            </div>
            <div className="absolute right-4 md:right-8 top-6 bottom-6 w-[2px] bg-[#E30613]" />
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5 py-3">
            <div className="flex items-center gap-2 text-sm text-black">
              <Link href="/" className="hover:text-blue-900">
                Rosatel
              </Link>
              <span>/</span>
              <span className="text-black font-medium capitalize">{currentCategory}</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="max-w-[1400px] mx-auto px-3 md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Filtros</h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Ocasiones</h4>
                    <div className="space-y-2 text-sm">
                      {filtros.ocasiones.map((occ) => (
                        <label
                          key={occ}
                          className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded"
                            checked={selectedOccasions.includes(occ)}
                            onChange={() =>
                              toggleFilter(occ, selectedOccasions, setSelectedOccasions)
                            }
                          />
                          {occ}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Color</h4>
                    <div className="space-y-2 text-sm">
                      {filtros.colores.map((col) => (
                        <label
                          key={col}
                          className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded"
                            checked={selectedColors.includes(col)}
                            onChange={() => toggleFilter(col, selectedColors, setSelectedColors)}
                          />
                          {col}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Rango de Precio</h4>
                    <div className="space-y-3">
                      <input
                        type="range"
                        min={priceBounds.min}
                        max={priceBounds.max}
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], parseInt(e.target.value, 10)])
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>S/ {priceRange[0].toFixed(2)}</span>
                        <span>S/ {priceRange[1].toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="mb-6 flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 capitalize">{content.title}</h2>
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Ordenar por:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                    >
                      <option value="relevancia">Relevancia</option>
                      <option value="ventas">Ventas</option>
                      <option value="precio-mayor">Precio: mayor a menor</option>
                      <option value="precio-menor">Precio: menor a mayor</option>
                    </select>
                  </div>
                </div>

                {products.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-12 text-center shadow-sm">
                    <p className="text-gray-600">No hay productos que coincidan con los filtros.</p>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition"
                  >
                    Mostrar más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
