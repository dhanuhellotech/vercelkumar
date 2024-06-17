// AuthContext.js
import React, { createContext, useState } from 'react';

// Create context object
export const AuthContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Logic to authenticate user
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logic to log out user
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
