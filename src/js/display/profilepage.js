import { homePage } from '../variables/dom.js';
import { profilePageTemp } from '../template/profilepage.js';
import { getProfile } from '../api/profile.js';
import { getStorage } from '../storage/get.js';
import { url } from '../api/baseurl.js';
export function profilePageDisplay() {
  homePage.classList.add('d-none');
  profilePageTemp();
  const token = getStorage('subToken');
  const userName = getStorage('subUser');
  const newUrl = url + '/auction/profiles/' + userName;
  getProfile(newUrl, token).then((data) => {
    console.log(data);
  });
}
