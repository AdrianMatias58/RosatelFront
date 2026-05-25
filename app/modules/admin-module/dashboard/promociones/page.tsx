"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

interface Campana {
  id: number;
  nombre: string;
  descripcion: string;
  precio_combo: number;
  imagen_url: string; 
  activo: boolean;
  fecha_expiracion: string;
}

export default function PromocionesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [campanas, setCampanas] = useState<Campana[]>([
    {
      id: 1,
      nombre: "Campaña Día de la Madre",
      descripcion: "Combo Premium: Arreglo de rosas de exportación + Caja de chocolates Ferrero + Oso de felpa gigante.",
      precio_combo: 189.90,
      imagen_url: "/banners/dia-madre.jpeg", 
      activo: true,
      fecha_expiracion: "2026-05-31"
    },
    {
      id: 2,
      nombre: "Especial San Valentín",
      descripcion: "Pack Amor Eterno: 24 rosas rojas en caja premium, botella de vino tinto seleccionado y globo metálico.",
      precio_combo: 220.00,
      imagen_url: "/banners/san-valentin.jpeg",
      activo: false, 
      fecha_expiracion: "2026-02-15"
    }
  ]);

  const [newCampana, setNewCampana] = useState({
    nombre: "",
    descripcion: "",
    precio_combo: "",
    fecha_expiracion: "",
    imagen_local: "dia-madre.jpg" 
  });

  const handleToggleActivo = (id: number) => {
    setCampanas(campanas.map(c => c.id === id ? { ...c, activo: !c.activo } : c));
  };

  const handleSaveCampana = (e: FormEvent) => {
    e.preventDefault();
    const item: Campana = {
      id: campanas.length + 1,
      nombre: newCampana.nombre,
      descripcion: newCampana.descripcion,
      precio_combo: parseFloat(newCampana.precio_combo) || 0,
      imagen_url: `/banners/${newCampana.imagen_local}`,
      activo: true,
      fecha_expiracion: newCampana.fecha_expiracion
    };

    setCampanas([item, ...campanas]);
    setIsModalOpen(false);
    setNewCampana({ nombre: "", descripcion: "", precio_combo: "", fecha_expiracion: "", imagen_local: "dia-madre.jpg" });
  };

  return (
    <div className="p-8 text-white min-h-screen bg-slate-950">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestión de Campañas</h1>
          <p className="text-sm text-slate-400 mt-1">Control de banners promocionales dinámicos y combos estacionales</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-lg shadow-red-600/20 active:scale-95"
        >
          + Crear Nueva Campaña
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {campanas.map((campana) => (
          <div key={campana.id} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            
            <div className="relative w-full md:w-48 h-48 md:h-auto bg-slate-900 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-slate-700">
              <img
                src={campana.imagen_url}
                alt={campana.nombre}
                className="object-cover w-full h-full opacity-80"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/1e293b/ffffff?text=Banner+Rosatel";
                }}
              />
              <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                campana.activo ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-700 text-slate-400"
              }`}>
                {campana.activo ? "Vigente" : "Inactivo"}
              </span>
            </div>

            {/* Cuerpo de Datos */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-bold text-slate-100">{campana.nombre}</h3>
                <p className="text-xs text-slate-400 mt-1">Expira el: <span className="font-mono text-slate-300">{campana.fecha_expiracion}</span></p>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">{campana.descripcion}</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-700/50 mt-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Precio Combo</span>
                  <span className="text-xl font-extrabold text-emerald-400">S/. {campana.precio_combo.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={() => handleToggleActivo(campana.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
                    campana.activo 
                      ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border-amber-500/20" 
                      : "bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600"
                  }`}
                >
                  {campana.activo ? "De baja" : "Activar"}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-700 flex justify-between bg-slate-700/20">
              <h2 className="text-xl font-bold text-white">Crear Nueva Campaña</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={handleSaveCampana} className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Nombre de la Campaña</label>
                <input type="text" required value={newCampana.nombre} onChange={(e) => setNewCampana({...newCampana, nombre: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Precio Especial (S/.)</label>
                  <input type="number" step="0.01" required value={newCampana.precio_combo} onChange={(e) => setNewCampana({...newCampana, precio_combo: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"/>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Fecha Fin</label>
                  <input type="date" required value={newCampana.fecha_expiracion} onChange={(e) => setNewCampana({...newCampana, fecha_expiracion: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1 text-slate-300"/>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Imagen del Banner (Asignación Local)</label>
                <select 
                  value={newCampana.imagen_local} 
                  onChange={(e) => setNewCampana({...newCampana, imagen_local: e.target.value})} 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white outline-none focus:border-red-500 text-sm mt-1"
                >
                  <option value="dia-madre.jpg">dia-madre.jpeg</option>
                  <option value="san-valentin.jpg">san-valentin.jpeg</option>
                  <option value="aniversario.jpg">aniversario.jpeg</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Detalle del Combo o Paquete</label>
                <textarea required value={newCampana.descripcion} onChange={(e) => setNewCampana({...newCampana, descripcion: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white outline-none focus:border-red-500 h-20 text-sm resize-none mt-1" placeholder="Escribe los productos incluidos en la promoción..."/>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-400 hover:text-white font-medium">Cancelar</button>
                <button type="submit" className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition">Lanzar Campaña</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}