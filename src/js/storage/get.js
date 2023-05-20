export const getStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
