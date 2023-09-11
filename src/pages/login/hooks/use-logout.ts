export function useLogout() {
  const logOut = async () => {
    window.localStorage.removeItem('access_token');
  };

  return { logOut };
}
