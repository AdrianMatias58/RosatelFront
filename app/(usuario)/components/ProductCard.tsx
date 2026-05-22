"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  href: string;
}

export function ProductCard({ name, price, image, href }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Link
      href={href}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition flex flex-col h-full"
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          unoptimized
          className="object-contain p-4 hover:scale-105 transition"
        />
      </div>

      <div className="flex-1 p-4 flex flex-col justify-between">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
          {name}
        </h3>

        <div className="space-y-3">
          <div className="text-lg font-bold text-gray-900">
            S/ {price.toFixed(2)}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setQuantity(Math.max(1, quantity - 1));
              }}
              className="p-1 border border-gray-300 rounded hover:border-gray-400 transition"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              type="tel"
              value={quantity}
              readOnly
              className="w-8 text-center text-sm font-medium"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setQuantity(quantity + 1);
              }}
              className="p-1 border border-gray-300 rounded hover:border-gray-400 transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(`Added ${quantity} of ${name} to cart`);
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Añadir al carrito
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(`Buying ${quantity} of ${name} now`);
            }}
            className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-2 rounded-lg transition text-sm"
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </Link>
  );
}
