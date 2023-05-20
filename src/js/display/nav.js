export function navMenu(loggedin) {
  if (loggedin) {
    const notLoginbtn = document.querySelectorAll('.not-login');
    notLoginbtn.forEach((btn) => {
      btn.classList.add('d-none');
    });

    const loggedinBtn = document.querySelectorAll('.loggedin');
    loggedinBtn.forEach((btn) => {
      btn.classList.remove('d-none');
    });
  } else {
    const notLoginbtn = document.querySelectorAll('.loggedin');
    notLoginbtn.forEach((btn) => {
      btn.classList.add('d-none');
    });

    const loggedinBtn = document.querySelectorAll('.not-login');
    loggedinBtn.forEach((btn) => {
      btn.classList.remove('d-none');
    });
  }
}
