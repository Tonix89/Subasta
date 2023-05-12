import { navMenu } from '../display/nav.js';
import { getStorage } from '../storage/get.js';

export const getUser = () => {
  const token = getStorage('subToken');
  const name = getStorage('subUser');
  if (token && name) {
    const loggedin = true;
    navMenu(loggedin);
  }
};
