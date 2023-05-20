import { listingPageTemp } from '../template/listingpage.js';
import { listDisplay } from './listing-card.js';
import { url } from '../api/baseurl.js';
import { secondaryLoader } from '../variables/loader.js';
import { addParam } from '../storage/add-param.js';
import { removeParam } from '../storage/remove-param.js';
import { getStorage } from '../storage/get.js';
import { getParam } from '../storage/get-param.js';
import { delAllParams } from '../storage/all-param.js';
export function listingPageDisplay() {
  listingPageTemp();
  const user = getStorage('subUser');
  const onbidBtn = document.getElementById('onbid-btn');
  if (user) {
    onbidBtn.classList.remove('d-none');
  } else {
    onbidBtn.classList.add('d-none');
  }
  const allBtn = document.querySelector('.all-btn');
  const filterBtnGroup = document.querySelector('.filter-btn-group');
  const filters = document.querySelectorAll('.filter');
  const searchFor = getParam('for');
  if (searchFor) {
    filterBtnGroup.classList.remove('bg-warning');
    allBtn.classList.remove('btn-warning');
    getDisplay(searchFor);
  } else {
    allBtn.classList.add('btn-warning');
    filterBtnGroup.classList.remove('bg-warning');
    const filterParam = getParam('filter');
    getDisplay(filterParam);
  }

  allBtn.addEventListener('click', () => {
    delAllParams();
    addParam('listing', 'true');
    allBtn.classList.add('btn-warning');
    filterBtnGroup.classList.remove('bg-warning');
    filters.forEach((filter) => {
      filter.classList.remove('active');
      getDisplay('all');
    });
  });

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      filterBtnGroup.classList.add('bg-warning');
      allBtn.classList.remove('btn-warning');
      delAllParams();
      addParam('listing', 'true');
      getFilter(filters, filter.innerHTML);
    });
  });
}

function getFilter(filters, sel) {
  filters.forEach((filter) => {
    if (sel === filter.innerHTML) {
      filter.classList.add('active');
      getDisplay(filter.innerHTML);
    } else {
      filter.classList.remove('active');
    }
  });
}

function getDisplay(param) {
  removeParam('filter');
  //   console.log(param);
  let listUrl;
  let myTag;
  let name;
  switch (param) {
    case 'Active':
      addParam('filter', 'active');
      listUrl = url + '/auction/listings?_bids=true&_active=true';
      break;
    case 'Newest':
      addParam('filter', 'newest');
      listUrl = url + '/auction/listings?_bids=true&_active=true';
      break;
    case 'Oldest':
      addParam('filter', 'oldest');
      listUrl = url + '/auction/listings?_bids=true&_active=true';
      break;
    case 'On Bid':
      addParam('filter', 'onbid');
      listUrl = url + '/auction/listings?_bids=true&_active=true';
      break;
    case 'tag':
      myTag = getParam('search');
      listUrl = url + '/auction/listings?_bids=true&_active=true&_tag=' + myTag;
      break;
    case 'name':
      name = getParam('search');
      listUrl =
        url + '/auction/profiles/' + name + '/listings?_bids=true&_active=true';
      break;
    default:
      listUrl = url + '/auction/listings?_bids=true&_active=true';
      break;
  }
  const listCardCont = document.getElementById('listing-page-card-cont');
  listCardCont.innerHTML = secondaryLoader;
  listDisplay(listUrl, listCardCont);
}
