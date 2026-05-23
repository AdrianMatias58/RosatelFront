'use client';

import { useState } from 'react';

const MOCK_METRICAS = {
  totalVentas: 'S/. 14,250.00',
  pedidosTotales: 184,
  productosActivos: 42,
  igvRecaudado: 'S/. 2,565.00'
};

const MOCK_ULTIMAS_VENTAS = [
  { id: 'RT-10523', cliente: 'Carlos Mendoza', metodo: 'Yape', total: 150.00, estado: 'Pagado' },
  { id: 'RT-10524', cliente: 'Ana María Rossi', metodo: 'Tarjeta', total: 280.00, estado: 'En camino' },
  { id: 'RT-10525', cliente: 'Juan Pérez Ate', metodo: 'PagoEfectivo', total: 85.50, estado: 'Pendiente' },
  { id: 'RT-10526', cliente: 'Sofía Benavides', metodo: 'Yape', total: 420.00, estado: 'Entregado' },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Panel de Reportes</h1>
        <p className="text-gray-400 text-sm mt-1">Monitoreo en tiempo real de ingresos y transacciones de Rosatel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <p className="text-sm font-medium text-gray-400">Total Ingresos Brutos</p>
          <p className="text-2xl font-bold text-green-400 mt-2">{MOCK_METRICAS.totalVentas}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <p className="text-sm font-medium text-gray-400">Órdenes Procesadas</p>
          <p className="text-2xl font-bold text-white mt-2">{MOCK_METRICAS.pedidosTotales}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <p className="text-sm font-medium text-gray-400">Impuestos (IGV 18%)</p>
          <p className="text-2xl font-bold text-red-400 mt-2">{MOCK_METRICAS.igvRecaudado}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <p className="text-sm font-medium text-gray-400">Items en Catálogo</p>
          <p className="text-2xl font-bold text-blue-400 mt-2">{MOCK_METRICAS.productosActivos}</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Últimos Pedidos Registrados</h2>
          <p className="text-gray-400 text-xs mt-0.5">Historial reciente de transacciones en la plataforma</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th className="px-4 py-3">Código</th>
                <th className="px-4 py-3">Cliente</th>
                <th className="px-4 py-3">Método de Pago</th>
                <th className="px-4 py-3">Monto Total</th>
                <th className="px-4 py-3">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {MOCK_ULTIMAS_VENTAS.map((pedido) => (
                <tr key={pedido.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-4 py-3 font-mono text-red-400 font-medium">{pedido.id}</td>
                  <td className="px-4 py-3 text-white">{pedido.cliente}</td>
                  <td className="px-4 py-3">{pedido.metodo}</td>
                  <td className="px-4 py-3 font-medium text-white">S/. {pedido.total.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                      pedido.estado === 'Entregado' || pedido.estado === 'Pagado'
                        ? 'bg-green-950 text-green-400 border border-green-800'
                        : pedido.estado === 'En camino'
                        ? 'bg-blue-950 text-blue-400 border border-blue-800'
                        : 'bg-yellow-950 text-yellow-400 border border-yellow-800'
                    }`}>
                      {pedido.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}