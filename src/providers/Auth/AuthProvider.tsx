import React, { useState } from 'react';

import type { LoginCredentials, RegisterHospitalData } from 'api/types';

import type {AuthContextValues, AuthProviderProps, Hospital} from './types'
import { loginHospital, registerHospital } from 'api';

export const AuthContext = React.createContext<AuthContextValues | undefined>(undefined);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [hospital, setHospital] = useState<Hospital>();

  const login = async (credentials: LoginCredentials) => {
    const {accesToken, hospital} = await loginHospital(credentials);
  
    setHospital(hospital);
    localStorage.setItem('accessToken', accesToken);
  };

  const register = async (data: RegisterHospitalData) => {
    const {accesToken, hospital} = await registerHospital(data);
  
    setHospital(hospital);
    localStorage.setItem('accessToken', accesToken);
  };

  const logout = async () => {
    setHospital(undefined);
    localStorage.removeItem('accessToken');
  };

  const values = {
    hospital,
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
