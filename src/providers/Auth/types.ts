import React from 'react';

import type { LoginCredentials, RegisterHospitalData } from 'api/types';

export type Hospital = {
  id: number;
  name: string;
}

export type AuthProviderProps = {
  children?: React.ReactNode;
}

export type AuthContextValues = {
  hospital?: Hospital;
  login(credentials: LoginCredentials): Promise<void>;
  register(data: RegisterHospitalData): Promise<void>;
  logout(): Promise<void>;
}
