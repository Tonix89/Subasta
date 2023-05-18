export function delAllParams() {
  const currentUrl = new URL(window.location.href);
  const newUrl = new URL(currentUrl.origin + currentUrl.pathname);
  window.history.pushState({ path: newUrl.href }, '', newUrl.href);
}
