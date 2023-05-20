import {
  homePage,
  profilePageCont,
  listingPageCont,
  aboutUsPageCont,
} from '../variables/dom.js';
export function listingPageTemp() {
  listingPageCont.classList.replace('d-none', 'd-flex');
  profilePageCont.classList.replace('d-flex', 'd-none');
  aboutUsPageCont.classList.replace('d-flex', 'd-none');
  homePage.classList.add('d-none');
  profilePageCont.innerHTML = '';
  homePage.innerHTML = '';
  aboutUsPageCont.innerHTML = '';
  listingPageCont.innerHTML = `
                <button type="button" class="btn btn-secondary border rounded-pill fw-bold fs-3 text-success" style="width:250px;" data-bs-toggle="modal"
                data-bs-target="#add-listing-modal">Add Listing</button>
                <div class="container-fluid d-flex justify-content-around mt-3">
                    <button
                    type="button"
                    class="btn btn-warning border border-primary fw-bold fs-4 text-success border rounded-pill p-1 all-btn" style="width:150px;"
                    >
                    All
                    </button>
                    <div class="btn-group filter-btn-group">
                        <button type="button" class="btn btn-light border border-primary fw-bold fs-4 text-success  " style="width:150px;">Filter</button>
                        <button type="button" class="btn btn-light border border-primary fw-bold fs-4 text-success  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                            <li><button type="button" class="dropdown-item text-success fs-5 fw-bold rounded-1 filter">Active</button></li>
                            <li><button type="button" class="dropdown-item text-success fs-5 fw-bold filter">Newest</button></li>
                            <li><button type="button" class="dropdown-item text-success fs-5 fw-bold filter">Oldest</button></li>
                            <li><button type="button" class="dropdown-item text-success fs-5 fw-bold  rounded-1 filter" id="onbid-btn">On Bid</button></li>
                        </ul>
                    </div>
                </div>
                <div id="listing-page-card-cont" class="row row-cols-1 row-cols-md-3 g-2 mt-3 mb-3"></div>
  `;
}
