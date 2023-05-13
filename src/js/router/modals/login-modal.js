import { validateForm } from '../../ui/validate.js';

export function loginModalTemp() {
  const loginModal = document.getElementById('login-modal-dialog');
  loginModal.innerHTML = `<div class="modal-content border-secondary">
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
      <div class="modal-body login-form">
        <div class="d-flex flex-column mb-4">
          <img
            class="align-self-center"
            src="assets/img/Logo-sign.png"
            alt="Logo Sign"
          />
        </div>
        <form class="mt-5 needs-validation" id="login" novalidate>
          <div class="mb-5 position-relative">
            <label
              for="login-email"
              class="form-label bg-white h4 text-success p-1 position-absolute"
              >Email address</label
            >
            <input
              type="email"
              class="form-control form-control-lg border border-3 border-primary p-3"
              id="login-email"
              pattern=".+@(noroff|stud.noroff).no"
              required
            />
            <div class="invalid-tooltip">
              Please used a valid Noroff email address.
            </div>
          </div>
          <div class="mb-5 position-relative">
            <label
              for="login-password"
              class="form-label bg-white h4 text-success p-1 position-absolute"
              >Password</label
            >
            <input
              type="password"
              class="form-control form-control-lg border border-3 border-primary p-3"
              id="login-password"
              minlength="8"
              required
            />
            <div class="invalid-tooltip">
              Must be at least 8 characters.
            </div>
          </div>
          <div class="d-flex flex-column">
            <button type="submit"
              class="btn btn-secondary align-self-end btn-lg fw-bold fs-5"
              id="login-btn"
            >
              Login
            </button>
          </div>
        </form>
        <div
          class="login-btn mt-3 d-flex align-items-center justify-content-end"
        >
          <h5 class="m-0 text-success pe-3 fw-bold">No Account Yet?</h5>
          <button
            type="button"
            class="btn btn-secondary align-self-end btn-lg fw-bold fs-5"
            data-bs-toggle="modal"
            data-bs-target="#signup-modal"
            id="modal-signup-btn"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>`;

  validateForm();
}
