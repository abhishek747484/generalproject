// TODO: Add more formatting helpers as needed

export const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export const truncate = (str, n = 100) =>
  str?.length > n ? str.slice(0, n) + '…' : str;
