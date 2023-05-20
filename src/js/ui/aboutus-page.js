import { aboutUsDisplay } from '../display/aboutuspage.js';
import { delAllParams } from '../storage/all-param.js';
import {
  aboutUsPageBtn,
  listingPageBtn,
  profilePageBtn,
} from '../variables/dom.js';

export const aboutUsPage = () => {
  aboutUsPageBtn.addEventListener('click', () => {
    listingPageBtn.classList.replace('bg-warning', 'bg-white');
    profilePageBtn.classList.replace('bg-warning', 'bg-white');
    aboutUsPageBtn.classList.replace('bg-white', 'bg-warning');
    delAllParams();
    aboutUsDisplay();
  });
};
