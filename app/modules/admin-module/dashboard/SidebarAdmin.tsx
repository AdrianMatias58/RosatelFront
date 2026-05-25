"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarAdmin() {
  const pathname = usePathname();

  const links = [
    { href: "/modules/admin-module/dashboard", label: "📊 Panel de Reportes" },
    { href: "/modules/admin-module/dashboard/productos", label: "🌹 Inventario de Productos" },
    { href: "/modules/admin-module/dashboard/promociones", label: "🎯 Campañas y Banners" },
  ];

  return (
    <aside className="w-64 bg-slate-800 text-white p-6 border-r border-slate-700 flex flex-col justify-between shrink-0 min-h-screen">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-red-500 tracking-wide">Rosatel Admin</h2>
          <p className="text-xs text-slate-400 mt-1">Control de Gestión v1.0</p>
        </div>
        <nav className="space-y-1.5">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-slate-300 hover:bg-slate-700/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="text-xs text-slate-500 border-t border-slate-700 pt-4">
        Sesión: Administrador
      </div>
    </aside>
  );
}