"use client";

import type { ReactNode } from "react";
import { SidebarAdmin } from "./SidebarAdmin";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white w-full">
      <SidebarAdmin />

      <main className="flex-1 overflow-y-auto h-screen bg-slate-950">
        {children}
      </main>
    </div>
  );
}