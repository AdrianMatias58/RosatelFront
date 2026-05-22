"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const navItems = [
    { label: "Prime", href: "/prime" },
    { label: "Home", href: "/home" },
    { label: "Forever", href: "/forever" },
    { label: "Memories", href: "/memories" },
    { label: "Ocasiones", href: "/ocasiones" },
    { label: "Delivery 1 hora", href: "/delivery-1-hora" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Header - Social Media & Currency */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 md:px-5 py-3 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <a
              href="https://www.facebook.com/rosatelperu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-75"
            >
              <Image
                src="/RedesSociales/IconoFacebook.png"
                alt="Facebook"
                width={20}
                height={20}
                unoptimized
                className="h-5 w-5 object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/rosatel.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-75"
            >
              <Image
                src="/RedesSociales/IconoInstagram.png"
                alt="Instagram"
                width={20}
                height={20}
                unoptimized
                className="h-5 w-5 object-contain"
              />
            </a>
            <a
              href="https://www.tiktok.com/@rosatelperu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-75"
            >
              <Image
                src="/RedesSociales/IconoTikTok.png"
                alt="TikTok"
                width={20}
                height={20}
                unoptimized
                className="h-5 w-5 object-contain"
              />
            </a>
          </div>

          {/* Currency Selector */}
          <div className="relative">
            <button
              onClick={() => setCurrencyOpen(!currencyOpen)}
              className="px-4 py-2 border border-gray-300 rounded-full text-xs font-light text-gray-700 hover:border-gray-400 transition font-poppins flex items-center gap-2"
            >
              S/ PEN
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {currencyOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded-lg p-3 w-24 shadow-md text-xs">
                <div className="py-1 text-red-600 font-medium">S/ PEN</div>
                <div className="py-1 text-gray-700">USD</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 md:px-5 py-4 flex items-center justify-between gap-4">
          {/* Left - Location */}
          <div className="hidden md:flex items-center gap-2">
            <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs font-medium hover:border-gray-400 transition flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              PE
            </button>
            <span className="text-xs text-gray-700">¿A dónde envías?</span>
          </div>

          {/* Center - Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Logo/Rosatel.png"
              alt="Rosatel"
              width={180}
              height={56}
              priority
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          {/* Right - Search & Icons */}
          <div className="flex items-center gap-2 md:gap-4 flex-1 md:flex-none">
            {/* Search - visible on larger screens */}
            <div className="hidden md:flex flex-1 max-w-xs bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Buscar"
                className="bg-transparent text-sm w-full outline-none"
              />
              <button className="text-gray-600 hover:text-gray-900">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Icons */}
            <button className="p-2 text-gray-700 hover:text-gray-900 transition md:hidden">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 transition">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 transition relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">0</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 md:px-5">
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/promociones" className="block px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition">
                Promociones
              </Link>
            </nav>
          )}

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center justify-between py-3">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-gray-900 transition font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/promociones" className="text-sm font-semibold text-red-600 hover:text-red-700 transition">
              Promociones
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
