import React from 'react';

import { HashRouter  } from 'react-router-dom';
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
    <HashRouter  basename={process.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HashRouter >
  )
}

export default Providers;
