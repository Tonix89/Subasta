import { listingPageDisplay } from '../display/listingpage.js';
import { addParam } from '../storage/add-param.js';
import { getParam } from '../storage/get-param.js';
import { getStorage } from '../storage/get.js';
import {
  aboutUsPageBtn,
  listingPageBtn,
  profilePageBtn,
} from '../variables/dom.js';
import { delAllParams } from '../storage/all-param.js';
export const listingPage = () => {
  const listing = getParam('listing');
  const search = getParam('search');
  const name = getStorage('subUser');
  if ((name && listing === 'true') || search) {
    listingPageBtn.classList.replace('bg-white', 'bg-warning');
    profilePageBtn.classList.replace('bg-warning', 'bg-white');
    aboutUsPageBtn.classList.replace('bg-warning', 'bg-white');
    listingPageDisplay();
  }
  listingPageBtn.addEventListener('click', () => {
    delAllParams();
    addParam('listing', 'true');
    profilePageBtn.classList.replace('bg-warning', 'bg-white');
    listingPageBtn.classList.replace('bg-white', 'bg-warning');
    aboutUsPageBtn.classList.replace('bg-warning', 'bg-white');
    listingPageDisplay();
  });
};
