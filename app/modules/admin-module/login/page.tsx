"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      if (correo === "admin@rosatel.com" && password === "admin2026") {
        
        router.push("/modules/admin-module/dashboard");
        
      } else {
        setError("El correo o la contraseña son incorrectos. Inténtalo de nuevo.");
        setIsLoading(false);
      }
    }, 1200); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4 text-white">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-red-500 tracking-wide">Rosatel Admin</h2>
          <p className="text-sm text-slate-400 mt-2">Control de Gestión v1.0</p>
        </div>

        {error && (
          <div className="mb-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 p-3 rounded-xl text-xs font-medium animate-in fade-in duration-200">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              placeholder="ejemplo@rosatel.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-sm font-bold transition shadow-lg shadow-red-600/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? "Autenticando..." : "Ingresar al Panel"}
          </button>
        </form>

      </div>
    </div>
  );
}