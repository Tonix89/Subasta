export const getParam = (param) => {
  const currentUrl = new URL(window.location.href);

  const searchParams = currentUrl.searchParams;

  const paramValue = searchParams.get(param);
  return paramValue;
};
