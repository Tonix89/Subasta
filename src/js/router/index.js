import { openEditAvatarModal } from './listeners/edit-avatar-btn.js';
import { openLoginModal } from './listeners/login-btn.js';
import { openSignupModal } from './listeners/signup-btn.js';
import { openAddListingModal } from './listeners/add-listing-btn.js';
import { openAddBidModal } from './listeners/add-bid-btn.js';
import { onReload } from './listeners/reload.js';
import { searchBar } from './listeners/search-btn.js';

export default () => {
  openEditAvatarModal();
  openLoginModal();
  openSignupModal();
  openAddListingModal();
  openAddBidModal();
  onReload();
  searchBar();
};
