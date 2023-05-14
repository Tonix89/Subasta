import { profilePageCont } from '../variables/dom.js';
export function profilePageTemp() {
  profilePageCont.classList.remove('d-none');
  profilePageCont.innerHTML = `<div id="profile-cont" class="border border-primary rounded mb-4">
  </div>
  <button
    type="button"
    class="btn btn-secondary fw-bold fs-4 text-success border rounded p-1 mb-4" data-bs-toggle="modal"
    data-bs-target="#add-listing-modal"
    style="width: 200px"
  >
    Add Listing
  </button>
  <div class="container-fluid d-flex justify-content-around">
    <button
      type="button"
      class="list-win btn btn-warning border border-primary fw-bold fs-4 text-success border rounded p-1"
    >
      Listing
    </button>
    <button
      type="button"
      class="list-win btn btn-light border border-primary fw-bold fs-4 text-success border rounded p-1"
    >
      Winnings
    </button>
  </div>
  <div class="listing-cards-cont"></div>`;
}
