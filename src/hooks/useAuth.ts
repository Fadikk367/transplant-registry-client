import { useContext } from 'react';

import { AuthContext } from 'providers/Auth';
import type { AuthContextValues } from 'providers/Auth/types';

const useAuth = (): AuthContextValues => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('No auth context available here');
  }

  return authContext; 
}

export default useAuth;
