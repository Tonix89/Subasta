import { loginModalTemp } from '../modals/login-modal.js';

export function openLoginModal() {
  const loginModal = document.getElementById('login-modal');

  loginModal.addEventListener('show.bs.modal', () => {
    loginModalTemp();
  });
}
