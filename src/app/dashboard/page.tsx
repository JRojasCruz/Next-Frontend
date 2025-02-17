"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, logout } from '../services/auth';
import { LogOutIcon } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Limpia la sesión con la función de logout
    auth.logout();
    
    // Redirige al usuario a la página de login
    router.push('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header con botón de logout */}
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-100">Dashboard</h1>
          
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            aria-label="Cerrar sesión"
          >
            <LogOutIcon className="h-4 w-4 mr-2" />
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Contenido principal del dashboard */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 flex flex-col justify-center items-center">
            <h2 className="text-xl text-gray-600 mb-4">Bienvenido al Dashboard</h2>
            <p className="text-gray-500">Aquí puedes colocar el contenido principal de tu aplicación.</p>
          </div>
        </div>
      </main>
    </div>
  );
}