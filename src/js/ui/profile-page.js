import { profilePageDisplay } from '../display/profilepage.js';
import { userName } from '../storage/user.js';
import { profilePageBtn } from '../variables/dom.js';
export const profilePage = () => {
  const params = new URLSearchParams(window.location.search);
  const user = params.get('user');
  const name = userName('subUser');
  if (user && user === name) {
    profilePageBtn.classList.replace('bg-white', 'bg-warning');
    profilePageDisplay();
  } else {
    profilePageBtn.addEventListener('click', () => {
      const name = userName('subUser');
      const url = new URL(window.location.href);
      url.searchParams.set('user', name);
      const newUrl = url.pathname + url.search + url.hash;
      window.history.pushState({ path: newUrl }, '', newUrl);
      profilePageBtn.classList.replace('bg-white', 'bg-warning');
      profilePageDisplay();
    });
  }
};
