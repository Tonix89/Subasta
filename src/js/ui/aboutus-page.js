import { aboutUsDisplay } from '../display/aboutuspage.js';
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
    aboutUsDisplay();
  });
};
