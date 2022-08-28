import { Navigate } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

function withAuth<T extends {}>(Component: React.ComponentType<T>): (props: T) => JSX.Element {
  return (props: T) => {
    const auth = useAuth();

    if (!auth.hospital) {
      return <Navigate to='/login' replace={true} />;
    }

    return <Component {...props}/>;
  }
}

export default withAuth;
