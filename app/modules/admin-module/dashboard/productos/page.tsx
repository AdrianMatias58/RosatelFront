"use client";

import { useState, type FormEvent } from "react";

interface Product {
  id: string;
  id_categoria: number; 
  nombre: string;
  precio: number;
  stock: number;
  descripcion: string;
}

const categoriasBD = [
  { id: 1, nombreCategoria: "Lágrimas" },
  { id: 2, nombreCategoria: "Coronas" },
  { id: 3, nombreCategoria: "Cruces" },
  { id: 4, nombreCategoria: "Arreglos" },
  { id: 5, nombreCategoria: "Ramos" },
];

export default function ProductosDashboard() {
  const [search, setSearch] = useState("");
  
  const [productos, setProductos] = useState<Product[]>([
    { 
      id: "RT-001", 
      id_categoria: 1, 
      nombre: "Lágrima Fúnebre Especial Premium", 
      descripcion: "Delicado arreglo fúnebre en tonos blancos y sutiles follajes verdes, armado en forma de lágrima sobre un soporte de metal reforzado. Incluye tarjeta de condolencias.", 
      stock: 15, 
      precio: 129.90 
    },
    { 
      id: "RT-002", 
      id_categoria: 2, 
      nombre: "Corona de Flores Blancas Tradicional", 
      descripcion: "Elegante e imponente corona armada con lirios, rosas e hilachas seleccionadas sobre una base circular compacta. Coronada con una cinta satinada impresa para dedicatoria.", 
      stock: 5, 
      precio: 250.00 
    },
    { 
      id: "RT-003", 
      id_categoria: 3, 
      nombre: "Cruz Fúnebre In Memoriam", 
      descripcion: "Arreglo conmemorativo estructurado en forma de cruz sobre un fondo denso de follaje fino, decorado con rosas blancas importadas en el centro. Diseñado para el velatorio.", 
      stock: 8, 
      precio: 199.90 
    },
    { 
      id: "RT-004", 
      id_categoria: 4, 
      nombre: "Arreglo Condolencias en Pedestal", 
      descripcion: "Arreglo floral alto en tonos suaves con una fina selección de flores de estación, montado sobre un fino pedestal de metal plateado. Brinda paz y sobriedad.", 
      stock: 12, 
      precio: 180.00 
    },
    { 
      id: "RT-005", 
      id_categoria: 5, 
      nombre: "Ramo de Condolencias Fino", 
      descripcion: "Ramo fúnebre para entrega directa, compuesto por finos lirios y flores blancas de tallo largo, envuelto en papel texturizado importado con lazo negro de gasa.", 
      stock: 20, 
      precio: 99.90 
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState({
    nombre: "",
    id_categoria: 1,
    precio: "",
    stock: "0",
    descripcion: ""
  });

  const getCategoriaNombre = (idCat: number) => {
    return categoriasBD.find(c => c.id === idCat)?.nombreCategoria || "Categoría Base";
  };

  const handleRegisterClick = () => setIsRegisterModalOpen(true);

  const handleSaveNew = (e: FormEvent) => {
    e.preventDefault();
    const idGenerado = `RT-00${productos.length + 1}`;
    const item: Product = {
      id: idGenerado,
      id_categoria: Number(newProduct.id_categoria),
      nombre: newProduct.nombre,
      precio: parseFloat(newProduct.precio) || 0,
      stock: parseInt(newProduct.stock) || 0,
      descripcion: newProduct.descripcion
    };

    setProductos([item, ...productos]);
    setIsRegisterModalOpen(false);
    setNewProduct({ nombre: "", id_categoria: 1, precio: "", stock: "0", descripcion: "" });
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct({ ...product });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    setProductos(productos.map(p => p.id === editingProduct.id ? editingProduct : p));
    setIsEditModalOpen(false);
  };

  const handleSoftDelete = (id: string) => {
    if (confirm(`¿Seguro que deseas eliminar el producto ${id}?`)) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  const itemsFiltrados = productos.filter(p => p.nombre.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-8 text-white min-h-screen bg-[#0b0f19]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventario de Productos</h1>
          <p className="text-sm text-slate-400 mt-1">Gestión del catálogo oficial de condolencias y memories</p>
        </div>
        <button
          onClick={handleRegisterClick}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition active:scale-95 shadow-lg shadow-red-600/10"
        >
          + Registrar Nuevo Arreglo
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Buscar arreglo por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-red-500 transition text-white placeholder-slate-400"
        />
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-700/30 text-slate-400 text-sm tracking-wide border-b border-slate-700">
                <th className="p-5 font-medium">Código</th>
                <th className="p-5 font-medium">Nombre / Detalle</th>
                <th className="p-5 font-medium max-w-xs">Descripción Comercial</th>
                <th className="p-5 font-medium">Categoría Base</th>
                <th className="p-5 font-medium">Stock</th>
                <th className="p-5 font-medium">Precio</th>
                <th className="p-5 font-medium text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50 text-sm text-slate-300">
              {itemsFiltrados.map((item) => (
                <tr key={item.id} className="hover:bg-slate-700/10 transition-colors">
                  <td className="p-5 font-mono text-red-400 font-bold">{item.id}</td>
                  <td className="p-5 font-semibold text-slate-200">{item.nombre}</td>
                  <td className="p-5 text-slate-400 max-w-xs leading-relaxed">{item.descripcion}</td>
                  <td className="p-5">
                    <span className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-md text-xs text-slate-300 font-medium">
                      {getCategoriaNombre(item.id_categoria)}
                    </span>
                  </td>
                  <td className="p-5 font-mono text-slate-200">{item.stock} u.</td>
                  <td className="p-5 font-bold text-emerald-400">S/. {item.precio.toFixed(2)}</td>
                  <td className="p-5">
                    <div className="flex justify-center gap-2">
                      <button onClick={() => handleEditClick(item)} className="p-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 rounded-lg transition">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                      </button>
                      <button onClick={() => handleSoftDelete(item.id)} className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500/20 rounded-lg transition">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-700 flex justify-between bg-slate-700/20">
              <h2 className="text-xl font-bold text-white">Registrar Nuevo Arreglo</h2>
              <button onClick={() => setIsRegisterModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={handleSaveNew} className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Nombre del Arreglo</label>
                <input type="text" required value={newProduct.nombre} onChange={(e) => setNewProduct({...newProduct, nombre: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Categoría Base</label>
                  <select 
                    value={newProduct.id_categoria} 
                    onChange={(e) => setNewProduct({...newProduct, id_categoria: Number(e.target.value)})} 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"
                  >
                    {categoriasBD.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.nombreCategoria}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Precio (S/.)</label>
                  <input type="number" step="0.01" required value={newProduct.precio} onChange={(e) => setNewProduct({...newProduct, precio: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"/>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Stock Inicial</label>
                <input type="number" required value={newProduct.stock} onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"/>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Descripción Comercial</label>
                <textarea required value={newProduct.descripcion} onChange={(e) => setNewProduct({...newProduct, descripcion: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white outline-none focus:border-red-500 h-24 text-sm resize-none mt-1" placeholder="Detalles de la composición floral y dedicatorias..."/>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsRegisterModalOpen(false)} className="px-4 py-2 text-slate-400 hover:text-white font-medium">Cancelar</button>
                <button type="submit" className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition">Publicar Arreglo</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-700 flex justify-between bg-slate-700/20">
              <h2 className="text-xl font-bold text-white">Editar Arreglo {editingProduct.id}</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={handleSaveEdit} className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Nombre</label>
                <input type="text" required value={editingProduct.nombre} onChange={(e) => setEditingProduct({...editingProduct, nombre: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Categoría</label>
                  <select 
                    value={editingProduct.id_categoria} 
                    onChange={(e) => setEditingProduct({...editingProduct, id_categoria: Number(e.target.value)})} 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"
                  >
                    {categoriasBD.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.nombreCategoria}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Precio (S/.)</label>
                  <input type="number" step="0.01" required value={editingProduct.precio} onChange={(e) => setEditingProduct({...editingProduct, precio: parseFloat(e.target.value) || 0})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"/>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Stock</label>
                <input type="number" required value={editingProduct.stock} onChange={(e) => setEditingProduct({...editingProduct, stock: parseInt(e.target.value) || 0})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"/>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Descripción Comercial</label>
                <textarea required value={editingProduct.descripcion} onChange={(e) => setEditingProduct({...editingProduct, descripcion: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white outline-none focus:border-red-500 h-24 text-sm resize-none mt-1"/>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-slate-400 hover:text-white font-medium">Cancelar</button>
                <button type="submit" className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-xl font-bold transition">Actualizar Datos</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}