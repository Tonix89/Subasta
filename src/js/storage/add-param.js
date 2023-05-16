export const addParam = (param, value) => {
  const currentUrl = new URL(window.location.href);

  if (currentUrl.searchParams) {
    const searchParams = currentUrl.searchParams;
    searchParams.append(param, value);
  } else {
    currentUrl.search = `?${param}=${value}`;
  }

  const newUrl = currentUrl.href;

  window.history.pushState({ path: newUrl }, '', newUrl);
};
