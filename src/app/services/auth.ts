const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Error during login");
  }

  const data = await response.json();

  // Guardamos el token en localStorage
  localStorage.setItem("authToken", data.token);

  return data;
};

// Función para verificar si el usuario está autenticado
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem("authToken");
  return !!token; // Retorna true si existe un token
};

// Función para cerrar sesión
export const logout = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("authToken");
};

// Función para obtener el token actual
export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("authToken");
};

// Agrupa todas las funciones en un objeto para facilitar su importación
export const auth = {
  login,
  isAuthenticated,
  logout,
  getToken,
};
