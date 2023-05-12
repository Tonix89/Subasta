import { homePage } from '../variables/dom.js';
import { profilePageTemp } from '../template/profilepage.js';
import { getProfile } from '../api/profile.js';
import { getStorage } from '../storage/get.js';
import { url } from '../api/baseurl.js';
import { secondaryLoader } from '../variables/loader.js';
export function profilePageDisplay() {
  homePage.classList.add('d-none');
  profilePageTemp();
  const profileCont = document.getElementById('profile-cont');
  profileCont.innerHTML = secondaryLoader;
  const token = getStorage('subToken');
  const userName = getStorage('subUser');
  const newUrl = url + '/auction/profiles/' + userName;
  getProfile(newUrl, token).then((data) => {
    // console.log(data);
    const { name, email, avatar, credits, wins, _count } = data;
    profileCont.innerHTML = `<div class="container-fluid text-center m-2">
                            <img src="${avatar}" alt="profile avatar" class="mb-2 avatar border border-secondary rounded-circle"/>
                            <h3>${name}</h3>
                            <div class="text-start">
                                <h5 class="fw-bold">Email : ${email}</h5>
                                <h5 class="fw-bold">Credits : <img src="assets/icon/coins.svg" alt="coins icon"/><span class="text-success ms-2">${credits}</span></h5>
                                <h5 class="fw-bold">Listing : <span class="text-secondary">${_count.listings}</span></h5>
                                <h5 class="fw-bold">Wins : <span class="text-secondary">${wins.length}</span></h5>
                            </div>
                            <button type="button" class="btn btn-light border border-secondary rounded w-75 fw-bold fs-3 text-success">Edit Avatar</button>
    </div>`;
  });
}
