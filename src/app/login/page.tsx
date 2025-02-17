'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../components/LoginForm';
import { auth } from '../services/auth';

export default function LoginPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Verificamos si el usuario está autenticado
    if (auth.isAuthenticated()) {
      router.push('/dashboard');
    } else {
      setIsChecking(false);
    }
  }, [router]);

  // Mientras se verifica, podemos mostrar un indicador de carga
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <p>Verificando sesión...</p>
      </div>
    );
  }

  // Si no está autenticado, mostramos el formulario de login
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <LoginForm />
    </div>
  );
}