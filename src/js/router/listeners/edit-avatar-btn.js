import { changeModalTemp } from '../modals/edit-avatar-modal.js';
export function openEditAvatarModal() {
  const editAvatarModal = document.getElementById('edit-avatar-modal');

  editAvatarModal.addEventListener('show.bs.modal', () => {
    changeModalTemp();
  });
}
