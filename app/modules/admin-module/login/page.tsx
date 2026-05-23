'use client';

import { useState } from 'react';

export default function AdminLoginPage() {
  const [isRecovering, setIsRecovering] = useState<boolean>(false);
  

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', { email, password });
  };

  const handleRecoverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando correo de recuperación a:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Rosatel <span className="text-red-500">Admin</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {isRecovering 
              ? 'Ingresa tu correo para restablecer tu cuenta' 
              : 'Panel de Control de Administrador'}
          </p>
        </div>

        {!isRecovering ? (
          <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
            <div className="rounded-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="admin@rosatel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-end text-sm">
              <button
                type="button"
                className="font-medium text-red-400 hover:text-red-300 transition-colors"
                onClick={() => {
                  setIsRecovering(true);
                  setPassword(''); 
                }}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 transition-colors"
              >
                Ingresar al Panel
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleRecoverySubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Correo Electrónico Administrativo
              </label>
              <input
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                placeholder="admin@rosatel.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-400 transition-colors"
              >
                Enviar correo de verificación
              </button>
              
              <button
                type="button"
                className="w-full text-center text-sm font-medium text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsRecovering(false)}
              >
                Volver al Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}