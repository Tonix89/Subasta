import { profilePageCont } from '../variables/dom.js';
export function profilePageTemp() {
  profilePageCont.classList.remove('d-none');
  profilePageCont.innerHTML = `<div id="profile-cont" class="border border-primary rounded mb-4">
  </div>
  <button
    type="button"
    class="btn btn-secondary fw-bold fs-4 text-success border rounded p-1 mb-4"
    style="width: 200px"
  >
    Add Listing
  </button>
  <div class="container-fluid d-flex justify-content-around">
    <button
      type="button"
      class="btn btn-warning border border-primary fw-bold fs-4 text-success border rounded p-1"
      style="width: 200px"
    >
      Listing
    </button>
    <button
      type="button"
      class="btn btn-light border border-primary fw-bold fs-4 text-success border rounded p-1"
      style="width: 200px"
    >
      Winnings
    </button>
  </div>
  <div id="listing-card-cont"></div>`;
}
