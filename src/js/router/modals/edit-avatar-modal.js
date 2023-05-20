import { validateForm } from '../../ui/validate.js';

export function changeModalTemp() {
  const avatarImg = document.getElementById('profilePage-avatar');
  const avatarLink = avatarImg.getAttribute('src');
  //   console.log(avatarLink);
  const editAvatar = document.getElementById('edit-avatar-modal-dialog');
  editAvatar.innerHTML = `<div class="modal-content border-secondary">
  <div class="modal-header border-0 justify-content-end">
    <button
      type="button"
      class="fw-bold text-info border rounded-circle border-info"
      data-bs-dismiss="modal"
      aria-label="Close"
    >
      X
    </button>
  </div>
  <div class="modal-body change-avatar-form">
    <div class="d-flex flex-column mb-4">
      <img
        class="align-self-center"
        src="assets/img/Logo-sign.png"
        alt="Logo Sign"
      />
    </div>
    <form class="mt-5 needs-validation" id="change-avatar" novalidate>
      <div class="mb-5 position-relative">
        <label
          for="change-avatar-input"
          class="form-label bg-white h4 text-success p-1 position-absolute"
          >Avatar</label
        >
        <input
          type="URL"
          class="form-control form-control-lg border border-3 border-primary p-3 pe-5" value="${avatarLink}" 
          id="change-avatar-input"
          required
        />
        <div class="invalid-tooltip">
          Must be a valid URL and be sure that it is accessible in
          public.
        </div>
      </div>
      <div class="d-flex flex-column">
        <button type="submit"
          class="btn btn-secondary btn-lg fw-bold fs-5 align-self-center"
          id="change-avatar-btn"
        >
          Change Avatar
        </button>
      </div>
    </form>
  </div>
</div>`;

  validateForm();
}
