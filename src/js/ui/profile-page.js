import { profilePageDisplay } from '../display/profilepage.js';
import { getStorage } from '../storage/get.js';
import { profilePageBtn } from '../variables/dom.js';
export const profilePage = () => {
  const params = new URLSearchParams(window.location.search);
  const user = params.get('user');
  const name = getStorage('subUser');
  if (user && user === name) {
    profilePageBtn.classList.replace('bg-white', 'bg-warning');
    profilePageDisplay();
  } else {
    profilePageBtn.addEventListener('click', () => {
      const url = new URL(window.location.href);
      url.searchParams.set('user', name);
      const newUrl = url.pathname + url.search + url.hash;
      window.history.pushState({ path: newUrl }, '', newUrl);
      profilePageBtn.classList.replace('bg-white', 'bg-warning');
      profilePageDisplay();
    });
  }
};
