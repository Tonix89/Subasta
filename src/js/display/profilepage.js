import { profilePageTemp } from '../template/profilepage.js';
import { getProfile } from '../api/profile.js';
import { getStorage } from '../storage/get.js';
import { url } from '../api/baseurl.js';
import { secondaryLoader } from '../variables/loader.js';
import { listDisplay } from './listing-card.js';
import { removeParam } from '../storage/remove-param.js';
import { addParam } from '../storage/add-param.js';
import { getParam } from '../storage/get-param.js';

export function profilePageDisplay() {
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
                            <img src="${avatar}" id="profilePage-avatar" alt="profile avatar" class="mb-2 avatar border border-secondary rounded-circle"/>
                            <h3>${name}</h3>
                            <div class="text-start">
                                <h5 class="fw-bold">Email : ${email}</h5>
                                <h5 class="fw-bold">Credits : <img src="assets/icon/coins.svg" alt="coins icon"/><span class="text-success ms-2">${credits}</span></h5>
                                <h5 class="fw-bold">Listing : <span class="text-secondary">${_count.listings}</span></h5>
                                <h5 class="fw-bold">Wins : <span class="text-secondary">${wins.length}</span></h5>
                            </div>
                            <button type="button" class="btn btn-light border border-secondary rounded w-75 fw-bold fs-3 text-success" data-bs-toggle="modal"
                            data-bs-target="#edit-avatar-modal">Edit Avatar</button>
    </div>`;
    const listUrl = url + '/auction/profiles/' + name + '/listings?_bids=true';
    const listCardCont = document.getElementById('listing-cards-cont');
    const myListBtn = document.getElementById('my-list-btn');
    const myWinBtn = document.getElementById('my-win-btn');
    const avatarSrc = document.getElementById('profilePage-avatar');

    avatarSrc.addEventListener('error', () => {
      avatarSrc.src = 'assets/icon/user.svg';
    });

    listCardCont.innerHTML = secondaryLoader;

    const myWins = getParam('mywins');
    if (myWins) {
      myListBtn.classList.replace('btn-warning', 'btn-light');
      myWinBtn.classList.replace('btn-light', 'btn-warning');
    }
    listDisplay(listUrl, listCardCont);

    myListBtn.addEventListener('click', () => {
      listCardCont.innerHTML = secondaryLoader;
      removeParam('mywins');
      myListBtn.classList.replace('btn-light', 'btn-warning');
      myWinBtn.classList.replace('btn-warning', 'btn-light');
      listDisplay(listUrl, listCardCont);
    });

    myWinBtn.addEventListener('click', () => {
      listCardCont.innerHTML = secondaryLoader;
      myListBtn.classList.replace('btn-warning', 'btn-light');
      myWinBtn.classList.replace('btn-light', 'btn-warning');
      removeParam('mywins');
      addParam('mywins', 'true');
      listDisplay(listUrl, listCardCont);
    });
  });
}
