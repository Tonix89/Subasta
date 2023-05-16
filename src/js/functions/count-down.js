export async function getCountdown(endDate, timerCont) {
  // console.log(endDate);
  while (endDate > new Date().getTime()) {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerCont.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  timerCont.innerHTML = 'Bid Ended';
  timerCont.classList.add('text-success', 'fw-bold');
}
