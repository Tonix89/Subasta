export function notloggedIn(modal) {
  modal.innerHTML = `<div class="modal-content border-secondary d-flex flex-column align-items-center justify-content-center">
    <div class="modal-header border-0 align-self-end">
      <button
        type="button"
        class="fw-bold text-info border rounded-circle border-info close-modal"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        X
      </button>
    </div>
    <div class="modal-body add-bid-modal-body d-flex flex-column align-items-center justify-content-center">
                        <h3>You must login first.</h3>
                        <button type="button" class="btn  btn-secondary text-success fw-bold fs-3" style="width:150px;"  data-bs-toggle="modal"
                        data-bs-target="#login-modal">Login</button>
    </div>
    </div>`;
}
