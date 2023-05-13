import { validateForm } from '../../ui/validate.js';

export function signupModalTemp() {
  const signupModal = document.getElementById('signup-modal-dialog');
  signupModal.innerHTML = `<div class="modal-content border-secondary">
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
    <div class="modal-body registration-form">
      <div class="d-flex flex-column mb-4">
        <img
          class="align-self-center"
          src="assets/img/Logo-sign.png"
          alt="Logo Sign"
        />
      </div>
      <form class="mt-5 needs-validation" id="sign-up" novalidate>
        <div class="mb-5 position-relative">
          <label
            for="reg-name"
            class="form-label bg-white h4 text-success p-1 position-absolute"
            >Name</label
          >
          <input
            type="text"
            class="form-control form-control-lg border border-3 border-primary p-3"
            id="reg-name"
            pattern="[A-Za-z0-9_]+"
            required
          />
          <div class="invalid-tooltip">
            Must not contain punctuation symbols apart from underscore
            (_).
          </div>
        </div>
        <div class="mb-5 position-relative">
          <label
            for="reg-avatar"
            class="form-label bg-white h4 text-success p-1 position-absolute"
            >Avatar</label
          >
          <input
            type="URL"
            class="form-control form-control-lg border border-3 border-primary p-3 pe-5"
            id="reg-avatar"
            required
          />
          <div class="invalid-tooltip">
            Must be a valid URL and be sure that it is accessible in
            public.
          </div>
        </div>
        <div class="mb-5 position-relative">
          <label
            for="reg-email"
            class="form-label bg-white h4 text-success p-1 position-absolute"
            >Email address</label
          >
          <input
            type="email"
            class="form-control form-control-lg border border-3 border-primary p-3"
            id="reg-email"
            pattern=".+@(noroff|stud.noroff).no"
            required
          />
          <div class="invalid-tooltip">
            Must be a valid "stud.noroff.no" or "noroff.no" email
            address.
          </div>
        </div>
        <div class="mb-5 position-relative">
          <label
            for="reg-password"
            class="form-label bg-white h4 text-success p-1 position-absolute"
            >Password</label
          >
          <input
            type="password"
            class="form-control form-control-lg border border-3 border-primary p-3"
            id="reg-password"
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
            id="signup-btn"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div
        class="login-btn mt-3 d-flex align-items-center justify-content-end"
      >
        <h5 class="m-0 text-success pe-3 fw-bold">
          Already Registered?
        </h5>
        <button
          type="button"
          class="btn btn-secondary align-self-end btn-lg fw-bold fs-5"
          data-bs-toggle="modal"
          data-bs-target="#login-modal"
          id="modal-login-btn"
        >
          Login
        </button>
      </div>
    </div>
  </div>`;

  validateForm();
}
