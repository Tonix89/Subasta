import { removeStorage } from '../storage/remove.js';
export const logout = () => {
  const logoutBtn = document.getElementById('logout-btn');
  logoutBtn.addEventListener('click', () => {
    removeStorage('subUser');
    removeStorage('subToken');
    removeStorage('subId');

    const delParams = window.location.href.split('?');
    if (delParams[1]) {
      window.location.href = delParams[0];
    } else {
      location.reload();
    }
  });
};
