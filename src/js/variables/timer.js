import { getTimer } from '../display/home-display.js';
export const timer = setInterval(() => {
  getTimer();
}, 1000);
