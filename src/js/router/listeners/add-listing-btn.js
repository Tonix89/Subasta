import { addListingModalTemp } from '../modals/add-listing-modal.js';

export function openAddListingModal() {
  const addListingModal = document.getElementById('add-listing-modal');

  addListingModal.addEventListener('show.bs.modal', () => {
    addListingModalTemp();
  });
}
