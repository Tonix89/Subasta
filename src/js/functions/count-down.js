import { timer } from '../variables/timer.js';
export function countDown(endDate, timerCont) {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerCont.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    timerCont.innerHTML = 'Bids Closed.';
    timerCont.classList.add('text-success');
  }
}
