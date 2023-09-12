import { createContext, useEffect, useState } from 'react';
import { IAuthContext } from './types';
import { IMe, GenericProps } from '../../types';
import { voidFunction } from '../../utilities';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../lib';
import { LoadingFallback } from '../../components';

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: voidFunction,
  logout: voidFunction,
});

function AuthProvider({ children }: GenericProps) {
  const { loading, data } = useQuery<{ me: IMe }>(GET_ME);

  const [user, setUser] = useState<IMe | null>(data ? data.me : null);
  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    if (data) {
      setUser(data.me);
    }
  }, [data]);

  if (loading) {
    return <LoadingFallback />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
