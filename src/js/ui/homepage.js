import { homeDisplay } from '../display/home-display.js';
import { delAllParams } from '../storage/all-param.js';
import { getParam } from '../storage/get-param.js';
import {
  aboutUsPageBtn,
  homePageBtn,
  listingPageBtn,
  profilePageBtn,
} from '../variables/dom.js';

export const homePage = () => {
  const user = getParam('user');
  const listing = getParam('listing');
  if (!user && !listing) {
    homeDisplay();
  }
  homePageBtn.addEventListener('click', () => {
    delAllParams();
    listingPageBtn.classList.replace('bg-warning', 'bg-white');
    profilePageBtn.classList.replace('bg-warning', 'bg-white');
    aboutUsPageBtn.classList.replace('bg-warning', 'bg-white');
    homeDisplay();
  });
};
