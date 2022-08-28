import React, { useState } from 'react';

import type {AuthContextValues, AuthProviderProps, LoginCredentials, Hospital} from './types'

export const AuthContext = React.createContext<AuthContextValues | undefined>(undefined);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [hospital, setHospital] = useState<Hospital>();

  const login = async (credentials: LoginCredentials) => {
    const hospital = {
      id: 1,
      name: 'Rydygiera',
    }
    const token = '....';
  
    setHospital(hospital);
    localStorage.setItem('accessToken', token);
  };

  const logout = async () => {
    setHospital(undefined);
    localStorage.removeItem('accessToken');
  }

  const values = {
    hospital,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
