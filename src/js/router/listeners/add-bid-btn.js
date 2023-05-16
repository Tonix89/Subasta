import { addBidModalTemp } from '../modals/add-bid-modal.js';

export function openAddBidModal() {
  const addBidModal = document.getElementById('add-bid-modal');

  addBidModal.addEventListener('show.bs.modal', () => {
    const viewMoreBtns = document.querySelectorAll('.view-more-btn');
    // console.log(viewMoreBtns);
    let btnId;
    viewMoreBtns.forEach((viewMoreBtn) => {
      viewMoreBtn.addEventListener('click', (event) => {
        // console.log(event.target.id);
        btnId = event.target.id;
      });
    });
    setTimeout(() => {
      //   console.log(btnId);
      addBidModalTemp(btnId);
    }, 1000);
  });
}
