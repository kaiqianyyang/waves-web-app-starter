import { createContext, useState } from 'react';
import { IAuthContext } from './types';
import { IMe, GenericProps } from '../../types';
import { generateIntMaxedAt, voidFunction } from '../../utilities';
import jwtDecode from 'jwt-decode';

// const initialState = {
//   user: null
// }

// if (window.localStorage.getItem("access-token") !== null) {
//   const decodedToken = jwtDecode(window.localStorage.getItem("access-token")) as IMe;
//   initialState.user = decodedToken;
// }

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: voidFunction,
  logOut: voidFunction,
});

function AuthProvider({ children }: GenericProps) {
  // const [user, setUser] = useState<IMe | null>({
  //   id: generateIntMaxedAt(20),
  // });
  const [user, setUser] = useState<IMe | null>(() => {
    // Initialize user state with a user from local storage if available
    const accessToken = window.localStorage.getItem('access-token');
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken) as IMe;
      return decodedToken;
    }
    return null;
  });

  // const [user, setUser] = useState<IMe | null>(null);

  const logOut = () => {
    setUser(null);
    window.localStorage.removeItem('access-token');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
