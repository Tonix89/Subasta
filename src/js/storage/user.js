export const userName = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
