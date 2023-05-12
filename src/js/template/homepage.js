import { homePage } from '../variables/dom.js';
import { profilePageCont } from '../variables/dom.js';
export function homePageTemp() {
  profilePageCont.classList.add('d-none');
  homePage.innerHTML = `<div id="listing-carousel" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner d-flex align-items-center"></div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#listing-carousel"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#listing-carousel"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
}
