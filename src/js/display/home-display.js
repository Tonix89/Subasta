import { url } from '../api/baseurl.js';
import { getApi } from '../api/get.js';
import { countDown } from '../functions/count-down.js';
import { homePageTemp } from '../template/homepage.js';
import { secondaryLoader } from '../variables/loader.js';

export function homeDisplay() {
  homePageTemp();
  const carouselCont = document.querySelector('.carousel-inner');
  carouselCont.innerHTML = secondaryLoader;
  const getUrl = url + '/auction/listings?_seller=true&_bids=true&_active=true';
  getApi(getUrl).then((data) => {
    carouselCont.innerHTML = '';
    data.forEach((listing) => {
      // console.log(listing);
      const { id, title, description, media, seller, bids, endsAt } = listing;
      // console.log(id, title, description, media, endsAt, seller, bids);

      let listImg;
      if (media[0]) {
        listImg = `<img src="${media[0]}" class="d-block list-img" alt="${title}" />`;
      } else {
        listImg = `<img src="assets/img/No_Image_Available.jpg" class="d-block list-img " alt="No media available" />`;
      }
      carouselCont.innerHTML += `<div class="carousel-item">
           ${listImg}
           <div class="container-fluid mt-3">
              <div class="row">
                <div class="col-12 col-md-6 justify-content-between">
                  <h1>${title}</h1>
                  <p class="list-desc">${description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="m-0">Created By:</h3>
                    <div class="d-flex align-items-center">
                      <img src="${seller.avatar}" alt="${seller.name} avatar" class="rounded-circle user-avatar border border-3 border-primary"/>
                      <h3 class="m-0 ps-2">${seller.name}</h3>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-3 mb-3">
                    <h5 class="m-0">Bid Ends:</h5>
                    <div class="d-flex align-items-center">
                      <img src="assets/icon/timer.svg" alt="Timer icon" class="timer-icon"/>
                      <h5 class="m-0 ps-1 timer-cont" id="timer*${endsAt}"></h5>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 border rounded border-secondary bg-dark text-center bid-his-cont mb-3">
                    <h3 class="mt-3 fw-bold text-success">Bid History</h3>
                    <div class="bid-history-${id}"></div>
                    <button type="button" class="btn btn-primary text-success fs-4 fw-bold w-75 mb-3" >View More</button>
                </div>
              </div>
           </div>
         </div>`;

      const bidHistoryCont = document.querySelector('.bid-history-' + id);
      // console.log(bids);

      if (bids.length === 0) {
        bidHistoryCont.innerHTML = `<h3>No Bids Yet.</h3>`;
      } else {
        bids.sort((a, b) => b.amount - a.amount);

        bids.forEach((bid, i) => {
          const { bidderName, amount } = bid;

          if (i < 5) {
            if (i === 0) {
              bidHistoryCont.innerHTML += `<div class="d-flex justify-content-between align-items-center mb-2">
                          <div class="d-flex">
                            <img src="assets/icon/user.svg" class="me-2"/>
                            <h1 class="m-0">${bidderName}</h1>
                          </div>
                          <div class="d-flex">
                            <img src="assets/icon/coins.svg" class="me-2"/>
                            <h1 class="m-0">${amount}</h1>
                          </div>
                        </div>`;
            } else {
              bidHistoryCont.innerHTML += `<div class="d-flex justify-content-between text-center mb-2">
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
          }
        });
      }
    });
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems[0].classList.add('active');

    getTimer();
  });
}

export function getTimer() {
  const activeList = document.querySelector('.carousel-item.active');
  const timerCont = activeList.querySelector('.timer-cont');
  const [, endsAt] = timerCont.id.split('*');
  // console.log(endsAt);
  const endDate = new Date(endsAt).getTime();
  countDown(endDate, timerCont);
}
