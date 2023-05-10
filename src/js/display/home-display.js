import { url } from '../api/baseurl.js';
import { getApi } from '../api/get.js';
export function homeDisplay() {
  const getUrl = url + '/auction/listings?_seller=true&_bids=true&_active=true';
  getApi(getUrl).then((data) => {
    const carouselCont = document.querySelector('.carousel-inner');

    for (let i = 0; i < data.length; i++) {
      const listing = data[i];

      console.log(listing);

      let listImg;
      if (listing.media[0]) {
        listImg = `<img src="${listing.media[0]}" class="d-block list-img" alt="${listing.title}" />`;
      } else {
        listImg = `<img src="assets/img/No_Image_Available.jpg" class="d-block list-img " alt="No media available" />`;
      }
      carouselCont.innerHTML += `<div class="carousel-item">
           ${listImg}
           <div class="container-fluid mt-3">
              <div class="row">
                <div class="col-12 col-md-6 justify-content-between">
                  <h1>${listing.title}</h1>
                  <p class="list-desc">${listing.description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="m-0">Created By:</h3>
                    <div class="d-flex align-items-center">
                      <img src="${listing.seller.avatar}" alt="${listing.seller.name} avatar" class="rounded-circle user-avatar border border-3 border-primary"/>
                      <h3 class="m-0 ps-4">${listing.seller.name}</h3>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-3 mb-3">
                    <h5 class="m-0">Time Left To Bid:</h5>
                    <div class="d-flex align-items-center">
                      <img src="assets/icon/timer.svg" alt="Timer icon" class="timer-icon"/>
                      <h5 class="m-0 ps-1">04:04:00 HRS.</h5>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 border rounded border-secondary bg-dark text-center bid-his-cont mb-3">
                    <h6 class="mt-3 fw-bold text-success">Bid History</h6>
                    <div class="bid-history"></div>
                    <div></div>
                    <button type="button" class="btn btn-primary text-success fw-bold w-75" >View More</button>
                </div>
              </div>
           </div>
         </div>`;
    }

    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems[0].classList.add('active');
  });
}
