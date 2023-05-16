export const removeParam = (param) => {
  // Get the current URL
  const currentUrl = new URL(window.location.href);

  // Get the search parameters from the URL
  const searchParams = currentUrl.searchParams;

  // Delete the specific parameter
  searchParams.delete(param);

  // Generate the new URL with updated parameters
  const searchParamsString = searchParams.toString();
  const newUrl = `${currentUrl.origin}${currentUrl.pathname}${
    searchParamsString ? `?${searchParamsString}` : ''
  }`;

  // Change the URL without reloading
  window.history.pushState({ path: newUrl }, '', newUrl);
};
