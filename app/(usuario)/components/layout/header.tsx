"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Prime", href: "/prime" },
    { label: "Home", href: "/home" },
    { label: "Forever", href: "/forever" },
    { label: "Memories", href: "/memories" },
    { label: "Ocasiones", href: "/ocasiones" },
    { label: "Delivery 1 hora", href: "/delivery1hora" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Header - Social Media & Currency */}
      <div>
        <div className="max-w-7xl mx-auto px-3 md:px-5 pt-3 pb-[3px] flex items-center justify-between">
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
          <Select defaultValue="PEN">
            <SelectTrigger className="w-[84px] rounded-full border-gray-300 text-xs font-light text-black hover:border-gray-400 transition font-poppins !h-6 [&>svg]:hidden relative pr-6">
              <SelectValue />
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-black">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0L5 6L10 0H0Z" fill="currentColor" />
                </svg>
              </span>
            </SelectTrigger>
            <SelectContent position="popper" align="end" className="min-w-[84px]">
              <SelectItem
                value="PEN"
                className="text-xs data-[state=checked]:text-red-600 data-[state=checked]:font-medium [&>span.absolute]:data-[state=checked]:bg-red-600 [&>span.absolute]:data-[state=checked]:rounded-full [&_svg]:data-[state=checked]:text-white [&_svg]:data-[state=checked]:stroke-[4] [&_svg]:data-[state=checked]:!w-3 [&_svg]:data-[state=checked]:!h-3"
              >
                S/ PEN
              </SelectItem>
              <SelectItem
                value="USD"
                className="text-xs data-[state=checked]:text-red-600 data-[state=checked]:font-medium [&>span.absolute]:data-[state=checked]:bg-red-600 [&>span.absolute]:data-[state=checked]:rounded-full [&_svg]:data-[state=checked]:text-white [&_svg]:data-[state=checked]:stroke-[4] [&_svg]:data-[state=checked]:!w-3 [&_svg]:data-[state=checked]:!h-3"
              >
                $ USD
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 md:px-5 pt-[3px] pb-4 flex items-center justify-between gap-4">
          {/* Left - Location */}
          <div className="flex-1 flex items-center justify-start">
            <div className="hidden md:flex items-center gap-2">
              <button className="px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-black hover:bg-gray-100 transition flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100">
                  <rect x="0" y="0" width="6.66" height="20" fill="#D91023" />
                  <rect x="6.66" y="0" width="6.66" height="20" fill="#FFFFFF" />
                  <rect x="13.33" y="0" width="6.66" height="20" fill="#D91023" />
                </svg>
                <span>PE</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-xs text-gray-700">¿A dónde envías?</span>
            </div>
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
          <div className="flex items-center justify-end gap-2 md:gap-4 flex-1">
            {/* Search - visible on larger screens */}
            <div className="hidden md:flex w-[230px] bg-white border border-gray-300 rounded-full px-4 py-2 items-center gap-2">
              <Search className="w-4 h-4 text-gray-600" />
              <input
                type="text"
                placeholder="Buscar"
                className="bg-transparent text-sm w-full outline-none"
              />
            </div>

            {/* Icons */}
            <button className="p-2 text-gray-700 hover:text-gray-900 transition md:hidden">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 transition">
              <User className="w-5 h-5" />
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-700 hover:text-gray-900 transition relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">0</span>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Carrito</SheetTitle>
                </SheetHeader>
                <div className="border-b border-gray-200 -mx-6 -mt-4"></div>
                <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
                  <ShoppingCart className="w-16 h-16 text-black" />
                  <p className="text-black mt-2">El carrito esta vacío.</p>
                </div>
              </SheetContent>
            </Sheet>

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
            <div className="flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center gap-2 px-2.5 py-1 border-2 border-red-600 rounded-full text-sm text-red-600 font-medium hover:bg-red-50 transition h-8 !bg-transparent !hover:bg-red-50">
                      <Menu className="w-4 h-4" />
                      <span>Menú</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!border-0 !shadow-none !bg-transparent !p-0">
                      <ul className="w-[300px] gap-0 p-0 max-h-[550px] overflow-y-auto bg-[#fff5f5]">
                        <li>
                          <ul className="p-4 space-y-1">
                            <li>
                              <NavigationMenuLink asChild href="/ocasiones">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Ocasiones</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/cajas">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Cajas</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/ramos">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Ramos</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/arreglos">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Arreglos</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/plantas">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Plantas</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/condolencias">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Condolencias</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/peluches">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Peluches</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/chocolates">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Chocolates</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/tortas">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Tortas y Desayunos</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/complementos">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Complementos</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild href="/vinos">
                                <a className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                  <span>Vinos y licores</span>
                                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-gray-900 transition"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/diadelamadre" className="flex items-center px-4 py-1.5 bg-red-600 text-sm text-white hover:bg-white hover:text-red-600 hover:border-red-600 border-2 border-red-600 transition h-8">
                Día de la Madre
              </Link>
            </div>
            <Link href="/promociones" className="flex items-center px-2.5 py-1 border-2 border-red-600 rounded-full text-sm text-red-600 hover:bg-red-600 hover:text-white transition h-8">
              Promociones
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
