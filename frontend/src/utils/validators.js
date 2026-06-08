// TODO: Add more validators as your forms grow

export const isEmail    = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isRequired = (v) => v !== undefined && v !== null && v !== '';
export const minLength  = (v, n) => v?.length >= n;
