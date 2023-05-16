import { url } from '../api/baseurl.js';
import { getList } from '../api/getListing.js';
import { getCountdown } from '../functions/count-down.js';

export function profileListDisplay(name) {
  const listUrl = url + '/auction/profiles/' + name + '/listings?_bids=true';

  getList(listUrl).then((data) => {
    // console.log(data);
    if (data) {
      const listCardCont = document.getElementById('listing-cards-cont');

      data.forEach((listing) => {
        const { id, title, description, media, endsAt, bids } = listing;

        // console.log(id, title, description, media, endsAt, bids);

        let bidderName;
        if (bids.length === 0) {
          bidderName = `<h3>No Bids Yet.</h3>`;
        } else {
          bids.sort((a, b) => b.amount - a.amount);

          // console.log(bids);

          bidderName = `<div class="d-flex justify-content-between align-items-center">
          <div class="d-flex overflow-hidden">
            <img src="assets/icon/user.svg" alt="user icon"  class="user-img"/>
            <h6 class="card-text text-overflow mb-0 p-1 fw-bold">${bids[0].bidderName}</h6>
          </div>
          <div class="d-flex ps-2">
            <img src="assets/icon/coins.svg" alt="coins icon" class="coins-icon" />
            <h6 class="mb-0 ps-2 fw-bold text-success">${bids[0].amount}</h6>
          </div>
        </div>`;
        }

        listCardCont.innerHTML += `
        <div class="col">
          <div class="card h-100 border border-3 border-primary p-1">
            <img src="${media[0]}" class="card-img-top" alt="${title}">
            <div class="card-body p-1">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <img src="assets/icon/timer.svg" alt="timer icon" class="timer-icon" />
                <h6 class="mb-0 listing-timer-cont" id="${endsAt}*${id}"></h6>
              </div>
              ${bidderName}
            </div>
            <div class="card-footer border-top-0 text-center">
              <button type="button" class="btn btn-primary text-success w-75 fw-bold listing-viewMore-btn view-more-btn" data-bs-toggle="modal"
              data-bs-target="#add-bid-modal" id="${id}">View More</button>
            </div>
          </div>
        </div>`;
      });
      const timerConts = document.querySelectorAll('.listing-timer-cont');
      // console.log(timerConts);
      timerConts.forEach((timerCont) => {
        const endsAt = timerCont.id.split('*')[0];
        // console.log(endsAt);
        const endDate = new Date(endsAt).getTime();
        getCountdown(endDate, timerCont);
      });
    }
  });
}
