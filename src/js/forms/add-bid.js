import { getStorage } from '../storage/get.js';
import { url } from '../api/baseurl.js';
import { postApi } from '../api/post.js';
import { getParam } from '../storage/get-param.js';
import { addBidModalTemp } from '../router/modals/add-bid-modal.js';
import { listingPageDisplay } from '../display/listingpage.js';
export async function goAddBid(form) {
  const id = getParam('id');
  const token = getStorage('subToken');
  const formInput = form.querySelector('input');

  //   console.log(formInput.value);

  const amount = parseInt(formInput.value);

  const bodyData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      amount: amount,
    }),
  };
  const addBidUrl = url + '/auction/listings/' + id + '/bids';
  postApi(bodyData, addBidUrl).then((res) => {
    // console.log(res);
    if (res) {
      alert('COngratulations! You are the highest bidder now.');
      addBidModalTemp(id);
      const listing = getParam('listing');
      if (listing) {
        listingPageDisplay();
      }
    }
  });
}
