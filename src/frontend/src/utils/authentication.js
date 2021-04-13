export const checkIsAuthenticated = (auth) => {
  const { isAuthenticated, token } = auth;
  if (isAuthenticated === true && token) {
    return true;
  }
  return false;
};
