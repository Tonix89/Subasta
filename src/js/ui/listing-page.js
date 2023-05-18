import { listingPageDisplay } from '../display/listingpage.js';
import { addParam } from '../storage/add-param.js';
import { removeParam } from '../storage/remove-param.js';
import { getParam } from '../storage/get-param.js';
import { getStorage } from '../storage/get.js';
import { listingPageBtn, profilePageBtn } from '../variables/dom.js';
export const listingPage = () => {
  const listing = getParam('listing');
  const name = getStorage('subUser');
  if (name && listing === 'true') {
    listingPageBtn.classList.replace('bg-white', 'bg-warning');
    listingPageDisplay();
  }
  listingPageBtn.addEventListener('click', () => {
    addParam('listing', 'true');
    removeParam('user');
    profilePageBtn.classList.replace('bg-warning', 'bg-white');
    listingPageBtn.classList.replace('bg-white', 'bg-warning');
    listingPageDisplay();
  });
};
