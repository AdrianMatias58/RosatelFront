"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

// 1. Mock Data estructurada para los gráficos (Ventas de la semana en Rosatel)
const datosVentas = [
  { name: "Lun", ingresos: 1200, ordenes: 15 },
  { name: "Mar", ingresos: 1900, ordenes: 22 },
  { name: "Mie", ingresos: 1500, ordenes: 18 },
  { name: "Jue", ingresos: 2500, ordenes: 29 },
  { name: "Vie", ingresos: 3100, ordenes: 35 },
  { name: "Sab", ingresos: 4000, ordenes: 48 },
  { name: "Dom", ingresos: 14250, ordenes: 184 }, // Tu cierre actual
];

export default function DashboardPage() {
  return (
    <div className="p-8 text-white">
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Panel de Reportes</h1>
        <p className="text-sm text-slate-400 mt-1">
          Monitoreo visual y estadísticas de rendimiento en tiempo real
        </p>
      </div>

      {/* Grid de Tarjetas / KPIs (Tus métricas de ayer) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
          <p className="text-sm font-medium text-slate-400">Total Ingresos Brutos</p>
          <p className="text-2xl font-bold text-emerald-400 mt-2">S/. 14,250.00</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
          <p className="text-sm font-medium text-slate-400">Órdenes Procesadas</p>
          <p className="text-2xl font-bold text-white mt-2">184</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
          <p className="text-sm font-medium text-slate-400">Impuestos (IGV 18%)</p>
          <p className="text-2xl font-bold text-rose-400 mt-2">S/. 2,565.00</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
          <p className="text-sm font-medium text-slate-400">Items en Catálogo</p>
          <p className="text-2xl font-bold text-sky-400 mt-2">42</p>
        </div>
      </div>

      {/* SECCIÓN DE GRÁFICOS EN PARALELO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* Gráfico 1: Tendencia de Ingresos */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
          <h3 className="text-base font-semibold mb-4 text-slate-200">Curva de Ingresos Semanales (S/.)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={datosVentas} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155", borderRadius: "8px", color: "#fff" }} />
                <Area type="monotone" dataKey="ingresos" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorIngresos)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 2: Volumen de Pedidos */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
          <h3 className="text-base font-semibold mb-4 text-slate-200">Volumen de Órdenes por Día</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datosVentas} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155", borderRadius: "8px", color: "#fff" }} />
                <Bar dataKey="ordenes" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}