export const removeParam = (param) => {
  const currentUrl = new URL(window.location.href);

  const searchParams = currentUrl.searchParams;

  searchParams.delete(param);

  const searchParamsString = searchParams.toString();
  const newUrl = `${currentUrl.origin}${currentUrl.pathname}${
    searchParamsString ? `?${searchParamsString}` : ''
  }`;

  window.history.pushState({ path: newUrl }, '', newUrl);
};
