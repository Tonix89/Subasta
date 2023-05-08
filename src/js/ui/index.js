import { forms } from './validate.js';
import { getUser } from './loggedin.js';
import { logout } from './logout.js';

export default () => {
  forms();
  getUser();
  logout();
};
