export const isAuthenticate = () => {
  const token = localStorage.getItem('loja-do-sebastiao-token');
  return token != null;
};
