import { validateForm } from './validate.js';
import { getUser } from './loggedin.js';
import { logout } from './logout.js';
import { homePage } from './homepage.js';
import { profilePage } from './profile-page.js';

export default () => {
  validateForm();
  getUser();
  logout();
  homePage();
  profilePage();
};
