export const removeStorage = (key) => {
  try {
    return localStorage.removeItem(key);
  } catch {
    return null;
  }
};
