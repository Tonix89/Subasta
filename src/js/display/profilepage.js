import { homePage } from '../variables/dom.js';
import { profilePageTemp } from '../template/profilepage.js';
export function profilePageDisplay() {
  homePage.classList.add('d-none');
  profilePageTemp();
}
