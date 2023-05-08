import { auth, userName } from '../storage/index.js';
import { navMenu } from '../display/nav.js';

export const getUser = () => {
  const token = auth('subToken');
  const name = userName('subUser');
  if (token && name) {
    const loggedin = true;
    navMenu(loggedin);
  }
};
