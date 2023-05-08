export const auth = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
