import { profilePageDisplay } from '../display/profilepage.js';
import { addParam } from '../storage/add-param.js';
import { delAllParams } from '../storage/all-param.js';
import { getParam } from '../storage/get-param.js';
import { getStorage } from '../storage/get.js';
import {
  profilePageBtn,
  listingPageBtn,
  aboutUsPageBtn,
} from '../variables/dom.js';
export const profilePage = () => {
  const user = getParam('user');
  const name = getStorage('subUser');
  if (user && user === name) {
    profilePageBtn.classList.replace('bg-white', 'bg-warning');
    listingPageBtn.classList.replace('bg-warning', 'bg-white');
    aboutUsPageBtn.classList.replace('bg-warning', 'bg-white');
    profilePageDisplay();
  }
  profilePageBtn.addEventListener('click', () => {
    delAllParams();
    addParam('user', name);
    listingPageBtn.classList.replace('bg-warning', 'bg-white');
    profilePageBtn.classList.replace('bg-white', 'bg-warning');
    aboutUsPageBtn.classList.replace('bg-warning', 'bg-white');
    profilePageDisplay();
  });
};
