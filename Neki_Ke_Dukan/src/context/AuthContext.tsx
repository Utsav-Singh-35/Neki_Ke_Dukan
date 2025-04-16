import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userType: string | null;
  login: (type: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userType: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);

  // Check for existing auth state on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const { isAuthenticated: storedIsAuthenticated, userType: storedUserType } = JSON.parse(storedAuth);
      setIsAuthenticated(storedIsAuthenticated);
      setUserType(storedUserType);
    }
  }, []);

  const login = (type: string) => {
    setIsAuthenticated(true);
    setUserType(type);
    // Store auth state in localStorage
    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, userType: type }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    // Clear auth state from localStorage
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}