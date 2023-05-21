import { url } from '../../api/baseurl.js';
import { getList } from '../../api/getListing.js';
import { addParam } from '../../storage/add-param.js';
import { delAllParams } from '../../storage/all-param.js';
import { listingPage } from '../../ui/listing-page.js';

export function searchBar() {
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');
  const searchList = document.getElementById('search-list');
  const searchForm = document.getElementById('search-form');

  const listUrl = url + '/auction/listings' + '?_active=true&_seller=true';
  const searchArrays = [];
  getList(listUrl).then((lists) => {
    // console.log(lists);
    lists.forEach((list) => {
      const { title, tags, seller } = list;
      searchArrays.push(title);
      searchArrays.push('@' + seller.name);
      tags.forEach((tag) => {
        searchArrays.push('#' + tag);
      });
    });
  });
  searchInput.addEventListener('input', (e) => {
    const sortedArrays = [...new Set(searchArrays)];
    searchList.classList.add('show');

    // console.log(sortedArrays);
    const searchText = e.target.value.toLowerCase();

    const matchingItems = sortedArrays.filter((sortedArray) =>
      sortedArray.toLowerCase().includes(searchText)
    );

    // console.log(matchingItems);

    const lis = searchList.getElementsByTagName('li');
    for (let i = lis.length - 1; i > 0; i--) {
      searchList.removeChild(lis[i]);
    }

    matchingItems.forEach((matchingItem) => {
      const list = document.createElement('li');
      const listBtn = document.createElement('button');
      listBtn.type = 'button';
      listBtn.className = 'btn btn-light search-suggest';
      list.className = 'dropdown-item';
      const listText = document.createTextNode(matchingItem);
      listBtn.appendChild(listText);
      list.appendChild(listBtn);
      searchList.appendChild(list);
    });

    searchList.addEventListener('mouseleave', () => {
      searchList.classList.remove('show');
    });

    const searchSuggests = document.querySelectorAll('.search-suggest');
    searchSuggests.forEach((choosen) => {
      choosen.addEventListener('click', () => {
        searchInput.value = choosen.innerHTML;
      });
    });
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = searchInput.value;
    if (!searchValue) {
      return;
    }

    delAllParams();

    if (searchValue[0] === '@') {
      addParam('search', searchValue.slice(1));
      addParam('for', 'name');
    } else if (searchValue[0] === '#') {
      addParam('search', searchValue.slice(1));
      addParam('for', 'tag');
    } else {
      addParam('search', searchValue);
      addParam('for', 'title');
    }

    addParam('listing', 'true');

    listingPage();
  });
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const searchValue = searchInput.value;
    if (!searchValue) {
      return;
    }

    delAllParams();

    if (searchValue[0] === '@') {
      addParam('search', searchValue.slice(1));
      addParam('for', 'name');
    } else if (searchValue[0] === '#') {
      addParam('search', searchValue.slice(1));
      addParam('for', 'tag');
    } else {
      addParam('search', searchValue);
      addParam('for', 'title');
    }

    addParam('listing', 'true');

    listingPage();
  });
}
