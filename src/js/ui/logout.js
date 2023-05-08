export const logout = () => {
  const logoutBtn = document.getElementById('logout-btn');
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('subUser');
    localStorage.removeItem('subToken');
    location.reload();
  });
};
