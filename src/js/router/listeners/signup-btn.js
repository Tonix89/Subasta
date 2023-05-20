import { signupModalTemp } from '../modals/signup-modal.js';
export function openSignupModal() {
  const signupModal = document.getElementById('signup-modal');

  signupModal.addEventListener('show.bs.modal', () => {
    signupModalTemp();
  });
}
