import { validateForm } from '../../ui/validate.js';
import { url } from '../../api/baseurl.js';
import { getList } from '../../api/getListing.js';
import { getCountdown } from '../../functions/count-down.js';
import { getStorage } from '../../storage/get.js';
import { getProfile } from '../../api/profile.js';
import { addParam } from '../../storage/add-param.js';
import { removeParam } from '../../storage/remove-param.js';
import { delList } from '../listeners/del-list-btn.js';
import { notloggedIn } from '../../functions/notloggedin.js';

export function addBidModalTemp(id) {
  addParam('id', id);
  const addBidModal = document.getElementById('add-bid-modal-dialog');
  const isLogin = getStorage('subToken');
  if (!isLogin) {
    notloggedIn(addBidModal);
    return;
  }
  const singleListUrl =
    url + '/auction/listings/' + id + '?_bids=true&_seller=true';
  getList(singleListUrl).then((data) => {
    // console.log(data);
    const { bids, description, endsAt, media, seller, title } = data;

    let userImg;
    if (seller.avatar) {
      userImg = `<img src="${seller.avatar}" alt="user avatar" class="border rounded" style="width:40px;height:40px;"/>`;
    } else {
      userImg = `<img src="assets/icon/user.svg" alt="user icon"/>`;
    }

    addBidModal.innerHTML = `<div class="modal-content border-secondary">
    <div class="modal-header border-0 justify-content-between">
      <div class="d-flex align-items-center gap-1">
        ${userImg}
        <h3 class="m-0">${seller.name}</h3>
      </div>
      <button
        type="button"
        class="fw-bold text-info border rounded-circle border-info close-modal"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        X
      </button>
    </div>
    <div class="modal-body add-bid-modal-body">
        <div id="list-media-cont"></div>
        <h3>${title}</h3>
        <p style="text-indent: 50px;">${description}</p>
        <div class="d-flex justify-content-between align-items-center mb-2">
                <img src="assets/icon/timer.svg" alt="timer icon" style="width:40px;" />
                <h3 class="mb-0 add-bid-timer-cont"></h3>
        </div>
        <div class="border rounded border-secondary bg-dark text-center bid-his-cont mb-3">
            <h3 class="mt-3 fw-bold text-success">Bid History</h3>
            <div class="bid-history-list p-2"></div>
            <div class="d-flex flex-column align-items-center">
                <button type="button" class="btn  view-less-btn d-none"><img src="assets/icon/up.svg" alt="up icon" /></button>
                <button type="button" class="btn mb-3 view-more-btn d-block"><img src="assets/icon/down.svg" alt="down icon" /></button>
            </div>
        </div>
        <div class="add-bid-footer" id="${seller.name}"></div>
    </div>
  </div>`;

    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
      addBidModal.innerHTML = '';
      removeParam('id');
    });

    const mediaCont = document.getElementById('list-media-cont');
    mediaCarousel(media, mediaCont, title);
    validateForm();

    const timerConts = document.querySelector('.add-bid-timer-cont');
    const endDate = new Date(endsAt).getTime();
    getCountdown(endDate, timerConts);

    bidHistory(bids);

    const viewMoreBtn = document.querySelector('.view-more-btn');
    const viewLessBtn = document.querySelector('.view-less-btn');

    hideBidHistory(viewMoreBtn, viewLessBtn);

    viewMoreBtn.addEventListener('click', () => {
      showBidHistory(viewMoreBtn, viewLessBtn);
      viewLessBtn.classList.replace('d-none', 'd-block');
    });

    viewLessBtn.addEventListener('click', () => {
      hideBidHistory(viewMoreBtn, viewLessBtn);
    });

    footerBtn(data);
  });
}

function mediaCarousel(media, mediaCont, title) {
  if (media[0]) {
    mediaCont.innerHTML = `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner add-bid-carousel-inner">
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span aria-hidden="true"><img src="assets/icon/prev.svg" alt="prev icon" style="width:50px;height:50px;"/></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span aria-hidden="true"><img src="assets/icon/next.svg" alt="next icon" style="width:50px;height:50px;"/></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`;

    const carouselCont = mediaCont.querySelector('.add-bid-carousel-inner');
    // console.log(carouselCont);
    media.forEach((img, i) => {
      //   console.log(img, i);
      if (i === 0) {
        carouselCont.innerHTML += `<div class="carousel-item active">
        <img src="${img}" class="d-block w-100" alt="${title}">
      </div>`;
      } else {
        carouselCont.innerHTML += `<div class="carousel-item">
        <img src="${img}" class="d-block w-100" alt="${title}">
      </div>`;
      }
    });
  } else {
    mediaCont.innerHTML = `<img src="assets/img/No_Image_Available.jpg" alt="no media available image" class="w-100"/>`;
  }
}

function bidHistory(bids) {
  const bidHistoryCont = document.querySelector('.bid-history-list');
  // console.log(bids);

  if (bids.length === 0) {
    bidHistoryCont.innerHTML = `<h3 id="bid-amount">No Bids Yet.</h3>`;
  } else {
    bids.sort((a, b) => b.amount - a.amount);

    bids.forEach((bid, i) => {
      const { bidderName, amount } = bid;

      if (i === 0) {
        bidHistoryCont.innerHTML += `<div class="d-flex justify-content-between align-items-center mb-2 user-bid-show">
                        <div class="d-flex">
                          <img src="assets/icon/user.svg" class="me-2"/>
                          <h2 class="m-0">${bidderName}</h2>
                        </div>
                        <div class="d-flex">
                          <img src="assets/icon/coins.svg" class="me-2"/>
                          <h2 class="m-0 text-success" id="bid-amount">${amount}</h2>
                        </div>
                      </div>`;
      } else {
        bidHistoryCont.innerHTML += `<div class="d-flex justify-content-between text-center mb-2 user-bid-show">
            <div class="d-flex">
              <img src="assets/icon/user.svg" class="me-2"/>
              <h5 class="m-0">${bidderName}</h5>
            </div>
            <div class="d-flex">
              <img src="assets/icon/coins.svg" class="me-2"/>
              <h5 class="m-0">${amount}</h5>
            </div>
          </div>`;
      }
    });
  }
}

function hideBidHistory(viewMoreBtn, viewLessBtn) {
  const showingBids = document.querySelectorAll('.user-bid-show');
  showingBids.forEach((showingBid, i) => {
    if (i > 4) {
      showingBid.classList.replace('d-flex', 'd-none');
      showingBid.classList.replace('user-bid-show', 'user-bid-hide');
    }
  });

  if (showingBids.length + 1 > showingBids.length) {
    viewLessBtn.classList.replace('d-block', 'd-none');
    viewMoreBtn.classList.replace('d-none', 'd-block');
  }
}

function showBidHistory(viewMoreBtn, viewLessBtn) {
  const hidingBids = document.querySelectorAll('.user-bid-hide');
  hidingBids.forEach((hidingBid, i) => {
    if (i < 5) {
      hidingBid.classList.replace('d-none', 'd-flex');
      hidingBid.classList.replace('user-bid-hide', 'user-bid-show');
    }
  });

  if (hidingBids.length - 5 <= 0) {
    viewLessBtn.classList.replace('d-none', 'd-block');
    viewMoreBtn.classList.replace('d-block', 'd-none');
  }
}

async function footerBtn(data) {
  const addBidFooter = document.querySelector('.add-bid-footer');
  const user = getStorage('subUser');
  const token = getStorage('subToken');
  let userCredit;
  if (user) {
    await getProfile(url + '/auction/profiles/' + user, token).then((data) => {
      userCredit = data.credits;
    });
  }
  if (user && user === addBidFooter.id) {
    addBidFooter.innerHTML = `<div class="d-flex justify-content-between">
                        <button type="button" class="btn btn-secondary text-success fs-5 fw-bold edit-list-btn" style="width:125px;" data-bs-toggle="modal"
                        data-bs-target="#add-listing-modal" id="edit*${data.id}">Edit</button>
                        <button type="button" class="btn btn-secondary text-success fs-5 fw-bold" style="width:125px;" id="del-list-btn">Delete</button>
   </div> `;

    delList();
  } else {
    addBidFooter.innerHTML = `<div><form class="mt-5 needs-validation" id="add-bid-form" novalidate>
    <div class="mb-5 position-relative">
      <label
        for="add-bid-input"
        class="form-label bg-white h4 text-success p-1 position-absolute"
        >Add Bid Amount</label
      >
      <input
        type="number"
        class="form-control form-control-lg border border-3 border-primary p-3 pe-5 text-success fw-bold"
        id="add-bid-input"
        required
      />
      <div class="invalid-tooltip" id="add-bid-tooltip">
      </div>
    </div>
    <div class="d-flex flex-column">
      <button type="submit"
        class="btn btn-secondary btn-lg fw-bold fs-5 align-self-center" disabled=true
        id="add-bid-btn"
      >
        Add Bid
      </button>
    </div>
  </form>
  </div>`;

    const bidInput = document.getElementById('add-bid-input');
    const bidBtn = document.getElementById('add-bid-btn');
    const addBidTooltip = document.getElementById('add-bid-tooltip');
    const bidAmountCont = document.getElementById('bid-amount');

    let bidAmount;
    if (bidAmountCont.innerHTML === 'No Bids Yet.') {
      bidAmount = 0;
    } else {
      bidAmount = parseInt(bidAmountCont.innerHTML);
    }

    bidInput.addEventListener('input', function () {
      const inputValue = Number(bidInput.value);
      //   console.log(inputValue);
      //   console.log(userCredit);
      //   console.log(bidAmount);
      let dec = false;
      if (inputValue.toString().includes('.')) {
        dec = true;
      }

      if (inputValue <= bidAmount && user && userCredit >= inputValue && !dec) {
        bidInput.classList.add('is-invalid');
        addBidTooltip.innerHTML = 'Must be greater than the highest bid.';
        bidBtn.disabled = true;
      } else if (
        inputValue > bidAmount &&
        user &&
        userCredit < inputValue &&
        !dec
      ) {
        bidInput.classList.add('is-invalid');
        addBidTooltip.innerHTML =
          "You don't have enough credits. Win more auction to gain more credits.";
        bidBtn.disabled = true;
      } else if (
        inputValue > bidAmount &&
        user &&
        userCredit > inputValue &&
        dec
      ) {
        bidInput.classList.add('is-invalid');
        addBidTooltip.innerHTML = 'Bid amount must be whole number';
        bidBtn.disabled = true;
      } else if (
        inputValue > bidAmount &&
        user &&
        userCredit > inputValue &&
        !dec
      ) {
        bidInput.classList.remove('is-invalid');
        bidBtn.disabled = false;
      } else {
        bidBtn.disabled = true;
        bidBtn.innerHTML = 'You must login first in order to add bid';
        bidBtn.classList.add('w-100');
      }
    });

    validateForm();
  }
}
