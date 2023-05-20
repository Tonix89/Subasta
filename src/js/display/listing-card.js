import { getList } from '../api/getListing.js';
import { getProfile } from '../api/profile.js';
import { isoToDate } from '../functions/convert-date.js';
import { getCountdown } from '../functions/count-down.js';
import { getParam } from '../storage/get-param.js';
import { getStorage } from '../storage/get.js';
import { url } from '../api/baseurl.js';

export function listDisplay(listUrl, listCardCont) {
  const myWins = getParam('mywins');
  if (myWins) {
    myWinsCont(listCardCont);
  } else {
    myList(listUrl, listCardCont);
  }
}

function myWinsCont(listCardCont) {
  const user = getStorage('subUser');
  const token = getStorage('subToken');
  const newUrl = url + '/auction/profiles/' + user;
  getProfile(newUrl, token).then((data) => {
    // console.log(data);
    let newData = [];
    data.wins.forEach((win) => {
      // console.log(win);
      getList(url + '/auction/listings/' + win + '?_bids=true').then((res) => {
        // console.log(res);
        if (res !== 'No listing with such ID') {
          newData.push(res);
        }
      });
    });
    setTimeout(() => {
      if (data.wins.length > newData.length) {
        alert(
          `You have ${data.wins.length} wins. But ` +
            (data.wins.length - newData.length) +
            ' ' +
            'listing was already been deleted.'
        );
      }
      // console.log(newData[0]);
      cardDisplay(newData, listCardCont);
    }, 3000);
  });
}

function myList(listUrl, listCardCont) {
  const user = getStorage('subUser');
  getList(listUrl).then((data) => {
    // console.log(data);
    if (!data) {
      listCardCont.innerHTML = `<h1 class="w-100">You must login first in order to search for users.</h1>`;
      listCardCont.classList.add('d-flex', 'justify-content-center');
      return;
    }
    const filter = getParam('filter');
    const searchFor = getParam('for');
    let param;
    let filteredData;
    let searchData;
    if (filter) {
      param = filter;
      const newArray = (data, user) => {
        return data.filter((list) => {
          return (
            list.bids.length > 0 &&
            list.bids.some((bid) => bid.bidderName === user)
          );
        });
      };

      filteredData = newArray(data, user);
    } else if (searchFor) {
      param = searchFor;
      const search = getParam('search');
      const newArray = (data, search) => {
        return data.filter((list) => {
          if (list.title === search) {
            return list;
          }
        });
      };

      searchData = newArray(data, search);
    }

    let dataArray;
    switch (param) {
      case 'newest':
        dataArray = data.sort((a, b) => {
          const dateA = new Date(a.created);
          const dateB = new Date(b.created);
          return dateB - dateA;
        });
        break;
      case 'oldest':
        dataArray = data.sort((a, b) => {
          const dateA = new Date(a.created);
          const dateB = new Date(b.created);
          return dateA - dateB;
        });
        break;
      case 'onbid':
        dataArray = filteredData;
        break;
      case 'title':
        dataArray = searchData;
        break;
      default:
        dataArray = data;
        break;
    }

    cardDisplay(dataArray, listCardCont);
  });
}

function cardDisplay(data, listCardCont) {
  // console.log(data);
  listCardCont.innerHTML = '';
  if (data) {
    data.forEach((listing) => {
      const { id, title, description, media, endsAt, bids, created } = listing;

      // console.log(id, title, description, media, endsAt, bids);
      const dateCreated = isoToDate(created);
      let bidderName;
      if (bids.length === 0) {
        bidderName = `<h3>No Bids Yet.</h3>`;
      } else {
        bids.sort((a, b) => b.amount - a.amount);

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
        <div class="col card-cont">
          <div class="card h-100 border border-3 border-primary p-1">
            <img src="${media[0]}" class="card-img-top" alt="${title}" style="height:350px;">
            <div class="card-body p-1">
              <div class="d-flex justify-content-between">
                <h5 class="card-title fw-bold">${title}</h5>
                <button type="button" class="btn cal-icon"  data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="${dateCreated}" ><img src="assets/icon/calendar_month_black_24dp.svg"  alt="calendar icon"/> </button>
              </div>
              <p class="card-text fw-semibold" style="text-indent:50px;">${description}</p>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <img src="assets/icon/timer.svg" alt="timer icon" class="timer-icon" />
                <h6 class="mb-0 listing-timer-cont fw-bold" id="${endsAt}*${id}"></h6>
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
    const isMywin = getParam('mywins');
    const isSearch = getParam('search');
    const filter = getParam('filter');

    if (data.length === 0) {
      if (isMywin) {
        listCardCont.innerHTML = `<h1 class="w-100">You have 0 win. Browse list and keep bidding.</h1>`;
      } else if (isSearch) {
        listCardCont.innerHTML = `<h1 class="w-100">There is 0 result for <span class="fw-bold text-success">" ${isSearch} "</span></h1>`;
      } else if (filter === 'onbid') {
        listCardCont.innerHTML = `<h1 class="w-100">You have no active bid. Browse list and start bidding.</h1>`;
      } else {
        listCardCont.innerHTML = `<h1 class="w-100">You have no listing.</h1>`;
      }
      listCardCont.classList.add('d-flex', 'justify-content-center');
    } else if (data.length === 1) {
      listCardCont.classList.replace('row-cols-md-3', 'row-cols-md-1');
    } else if (data.length === 2) {
      listCardCont.classList.replace('row-cols-md-3', 'row-cols-md-2');
    } else {
      listCardCont.classList.replace('row-cols-md-1', 'row-cols-md-3');
      listCardCont.classList.replace('row-cols-md-2', 'row-cols-md-3');
      listCardCont.classList.remove('d-flex');
      listCardCont.classList.remove('justify-content-center');
    }

    const timerConts = document.querySelectorAll('.listing-timer-cont');
    // console.log(timerConts);
    timerConts.forEach((timerCont) => {
      const endsAt = timerCont.id.split('*')[0];
      // console.log(endsAt);
      const endDate = new Date(endsAt).getTime();
      getCountdown(endDate, timerCont);
    });

    const image = document.querySelectorAll('.card-img-top');

    image.forEach((img) => {
      img.addEventListener('error', () => {
        img.src = 'assets/img/No_Image_Available.jpg';
      });
    });

    const calIcons = document.querySelectorAll('.cal-icon');
    calIcons.forEach((calIcon) => {
      new bootstrap.Tooltip(calIcon);
    });
  }
}
