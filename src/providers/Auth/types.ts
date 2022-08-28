import React from "react";

export type Hospital = {
  id: number;
  name: string;
}

export type LoginCredentials = {
  name: string;
  password: string;
}

export type AuthProviderProps = {
  children?: React.ReactNode;
}

export type AuthContextValues = {
  hospital?: Hospital;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): Promise<void>;
}
