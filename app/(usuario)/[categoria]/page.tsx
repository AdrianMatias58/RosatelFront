"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/(usuario)/components/layout/header";
import { Footer } from "@/app/(usuario)/components/layout/footer";
import { ProductCard } from "@/app/(usuario)/components/ProductCard";

// Diccionario con las rutas de las imágenes y los títulos correspondientes
const contentByLayout: Record<string, { title: string; bannerImg: string }> = {
    prime: {
        title: "Rosatel Prime",
        bannerImg: "/BannerEspeciales/banner-prime.jpg",
    },
    home: {
        title: "Rosatel Home",
        bannerImg: "/BannerEspeciales/banner-home.jpg"
    },
    forever: {
        title: "Colección Forever",
        bannerImg: "/BannerEspeciales/banner-forever.jpg",
    },
    memories: {
        title: "Colección Memories",
        bannerImg: "/BannerEspeciales/banner-memories.jpg",
    },
    ocasiones: {
        title: "Ocasiones Especiales",
        bannerImg: "/BannerEspeciales/banner-gift.jpg",
    },
    delivery1hora: {
        title: "Delivery",
        bannerImg: "/BannerEspeciales/banner-delivery.png",
    },
    diadelamadre: {
        title: "Día de la Madre",
        bannerImg: "/BannerEspeciales/banner-diamadre.png",
    },
    promociones: {
        title: "Promociones Exclusivas",
        bannerImg: "/BannerEspeciales/banner-promociones.jpg",
    },
    default: {
        title: "Nuestros Productos",
        bannerImg: "/BannerEspeciales/banner-default.jpg", // Asegúrate de tener un fallback general aquí
    }
};

// Mock de productos (Luego harás tu fetch filtrando por la categoría de la URL)
const allProductsMock = [
    {
        id: "bianca",
        name: "Arreglo Bianca",
        price: 290.00,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23f5f5f5' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EArreglo Bianca%3C/text%3E%3C/svg%3E",
    },
    {
        id: "alessia",
        name: "Arreglo Alessia",
        price: 290.00,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23f5f5f5' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EArreglo Alessia%3C/text%3E%3C/svg%3E",
    },
];

export default function CategoryDynamicPage() {
    const params = useParams();
    const currentCategory = (params?.categoria as string) || "default";

    const content = contentByLayout[currentCategory.toLowerCase()] || contentByLayout.default;

    const [sortBy, setSortBy] = useState("ventas");
    const [priceRange, setPriceRange] = useState([1, 680]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1">
                {/* Hero Section Dinámico */}
                <section className="w-full bg-white flex flex-col">

                    {/* Bloque Superior: El Banner con Imagen Vacío */}
                    <div className="w-full h-32 md:h-48 relative overflow-hidden select-none">
                        <Image
                            src={content.bannerImg}
                            alt={`Banner de ${content.title}`}
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Bloque Inferior: La nueva sección que por el momento estará en blanco */}
                    <div className="w-full bg-white min-h-48 flex items-center justify-center border-b border-gray-100">
                        {/* Espacio disponible para lo que necesites colocar abajo después */}
                        <span className="text-gray-300 text-sm italic select-none">Sección inferior disponible</span>
                    </div>

                </section>

                {/* Breadcrumb Dinámico */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-[1400px] mx-auto px-3 md:px-5 py-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-gray-900">Rosatel</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium capitalize">{currentCategory}</span>
                        </div>
                    </div>
                </section>

                {/* Catalog Section */}
                <section className="bg-gray-50 py-8">
                    <div className="max-w-[1400px] mx-auto px-3 md:px-5">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* Filtros Lateral */}
                            <div className="md:col-span-1">
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-6">Filtros</h3>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Ocasiones</h4>
                                        <div className="space-y-2 text-sm">
                                            {["Cumpleaños", "Amor", "Aniversario", "Graduación"].map((occ) => (
                                                <label key={occ} className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900">
                                                    <input type="checkbox" className="w-4 h-4 rounded" />
                                                    {occ}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Color</h4>
                                        <div className="space-y-2 text-sm">
                                            {["Rojo", "Rosado", "Amarillo", "Crema"].map((col) => (
                                                <label key={col} className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900">
                                                    <input type="checkbox" className="w-4 h-4 rounded" />
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
                                                min="1"
                                                max="680"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
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

                            {/* Grid de Productos Dinámico */}
                            <div className="md:col-span-3">
                                <div className="mb-6 flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                    <h2 className="text-2xl font-bold text-gray-900 capitalize">{content.title}</h2>
                                    <div className="flex items-center gap-2">
                                        <label className="text-sm text-gray-600">Ordenar por:</label>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                                        >
                                            <option value="relevancia">Relevancia</option>
                                            <option value="ventas">Ventas</option>
                                            <option value="precio-mayor">Precio: mayor a menor</option>
                                            <option value="precio-menor">Precio: menor a mayor</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {allProductsMock.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                            href={`/product/${product.id}`}
                                        />
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition">
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