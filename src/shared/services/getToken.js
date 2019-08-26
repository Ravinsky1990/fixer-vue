export const getToken = () => {
  const token = localStorage.getItem('fixerToken');
  if (token) {
    return token;
  }
  return 'Not authorized';
};
