import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

import type { Hospital, LoginCredentials, RegisterHospitalData } from 'api/types';

import type {AuthContextValues, AuthProviderProps} from './types'
import { loginHospital, registerHospital, fetchProfile } from 'api';
import Typography from '@mui/material/Typography';

export const AuthContext = React.createContext<AuthContextValues | undefined>(undefined);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [hospital, setHospital] = useState<Hospital>();
  const [isRestoring, setIsRestoring] = useState(Boolean(localStorage.getItem('accessToken')));

  useEffect(() => {
    async function restore(token: string) {
      try {
        const hospital = await fetchProfile();
        setHospital(hospital);
      } finally {
        setIsRestoring(false);
      }
    }
    const accessToken = localStorage.getItem('accessToken');

    if(accessToken) {
      restore(accessToken);
    }
  }, [setIsRestoring, setHospital]);

  const login = async (credentials: LoginCredentials) => {
    const {accessToken, hospital} = await loginHospital(credentials);
  
    setHospital(hospital);
    localStorage.setItem('accessToken', accessToken);
  };

  const register = async (data: RegisterHospitalData) => {
    const {accessToken, hospital} = await registerHospital(data);
  
    setHospital(hospital);
    localStorage.setItem('accessToken', accessToken);
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

  if (isRestoring) {
    return (
      <Stack spacing={3} sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
        <Typography variant="h5">Loading...</Typography>
      </Stack>
    )
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
