import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';

import {theme} from 'theme';

import AuthProvider from './Auth';

type ProvidersProps = {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default Providers;
