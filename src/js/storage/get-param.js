export const getParam = (param) => {
  try {
    const currentUrl = new URL(window.location.href);

    const searchParams = currentUrl.searchParams;

    const paramValue = searchParams.get(param);
    return paramValue;
  } catch {
    return null;
  }
};
