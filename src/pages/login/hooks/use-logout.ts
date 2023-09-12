import { client } from '../../../lib';
export function useLogout() {
  const logOut = async () => {
    client.resetStore();
    window.localStorage.removeItem('access_token');
  };

  return { logOut };
}
