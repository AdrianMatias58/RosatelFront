"use client";

import Image from "next/image";
import { Search, MapPin, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function LocationSelector() {
  return (
    <div className="h-[42px] flex items-center gap-2 px-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
      <MapPin className="w-5 h-5 text-black" strokeWidth={2.5} />
      <span className="text-sm font-semibold text-black mr-2">Enviar a Lima</span>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-1 border border-[#E30613] rounded-full text-[#E30613] text-sm font-bold hover:bg-red-50 transition">
            Cambiar
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-6 rounded-3xl !rounded-[24px]">
          <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <DialogTitle className="text-xl font-bold text-black">¿A dónde envías?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <Image
              src="/Logo/Rosatel.png"
              alt="Rosatel"
              width={180}
              height={56}
              className="h-10 w-auto object-contain mb-8"
            />
            <div className="w-full space-y-4">
              <div>
                <label className="text-base font-semibold text-black mb-2 block text-left">Selecciona la ciudad</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Elige una opción"
                    className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:border-black transition"
                  />
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-start gap-3">
                <Info className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <p className="text-xs text-black leading-tight">Te mostraremos disponibilidad y costos según dónde envíes</p>
              </div>
              <button className="w-full bg-[#E30613] hover:bg-[#c30510] text-white font-bold py-3.5 rounded-xl transition text-base mt-2">
                Confirmar
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
