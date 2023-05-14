import { validateForm } from '../../ui/validate.js';

export function addListingModalTemp() {
  const addListingModal = document.getElementById('add-listing-modal-dialog');
  addListingModal.innerHTML = `<div class="modal-content border-secondary">
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
    <div class="modal-body add-listing-form">
      <div class="d-flex flex-column mb-4">
        <img
          class="align-self-center"
          src="assets/img/Logo-sign.png"
          alt="Logo Sign"
        />
      </div>
      <form class="mt-5 needs-validation" id="add-listing" novalidate>
        <div class="mb-5 position-relative">
          <label
            for="title"
            class="form-label bg-white h4 text-success p-1 position-absolute"
            >Title</label
          >
          <input
            type="text"
            class="form-control form-control-lg border border-3 border-primary p-3"
            id="title"
            required
          />
          <div class="invalid-tooltip">
            Must not be empty.
          </div>
        </div>
        <div class="mb-5 position-relative">
          <label
            for="description"
            class="form-label bg-white h4 text-success p-1 position-absolute"
            >Description</label
          >
          <textarea class="form-control form-control-lg border border-3 border-primary p-3" id="description" required></textarea>
          <div class="invalid-tooltip">
            Describe what you sale.
          </div>
        </div>
        <div class="mb-5 position-relative">
          <label
            for="tags"
            class="form-label bg-white h4 text-success p-1 position-absolute"
            >Tags</label
          >
          <input
            type="text"
            class="form-control form-control-lg border border-3 border-primary p-3"
            id="tags"
            required
          />
          <div class="invalid-tooltip">
            Must not be empty. If you have multiple tags use comma(,)
          </div>
          <div class="valid-tooltip">
            You can add multiple tags by using comma(,) to separate them.
          </div>
        </div>
        <div class="mb-5 position-relative date">
          <label
            for="date"
            class="form-label bg-white h4 text-success p-1 position-absolute"
            >Date-Ended</label
          >
          <input
            type="date"
            class="form-control form-control-lg border border-3 border-primary p-3 mt-5" min=""
            id="date"
            required
          />
          <div class="invalid-tooltip">
            Please choose date.
          </div>
        </div>
        <div id="media-cont">
            <div class="mb-5 position-relative">
                <label
                        for="media"
                        class="form-label bg-white h4 text-success p-1 position-absolute"
                        >Media URL</label>
                <input
                        type="URL"
                        class="media form-control form-control-lg border border-3 border-primary p-3 pe-5"
                        id="Media"
                        required />
                <div class="invalid-tooltip">
                        Must be a valid URL and be sure that it is accessible in
                        public.
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end align-items-center mt-5">
            <button type="button" class="btn btn-light text-info border border-info fw-bold fs-5 align-self-end me-2" id="remove-media">-</button>
            <h5 class="m-0 text-success fw-bold">Media</h5>
            <button type="button" class="btn btn-light text-info border border-info fw-bold fs-5 align-self-end ms-2" id="add-media">+</button>
        </div>
        <div class="d-flex flex-column">
          <button
            class="btn align-self-end btn-lg fw-bold fs-5 align-self-center mt-3"
            id="add-listing-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>`;

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const minDate = tomorrow.toISOString().substring(0, 10);
  document.getElementById('date').min = minDate;

  const addMediaBtn = document.getElementById('add-media');
  addMediaBtn.addEventListener('click', newMedia);

  const removeMediaBtn = document.getElementById('remove-media');
  removeMediaBtn.addEventListener('click', removeMedia);

  validateForm();
}

function newMedia() {
  const mediaCont = document.getElementById('media-cont');
  const mediaUrls = document.querySelectorAll('input.media');

  mediaUrls.forEach((mediaUrl, i) => {
    if (i === mediaUrls.length - 1) {
      if (!mediaUrl.value) {
        return;
      }

      const newMediaInput = document.createElement('div');
      newMediaInput.classList.add('mb-5', 'position-relative', 'newMedia');
      newMediaInput.innerHTML = `
        <input
                type="URL"
                class="media form-control form-control-lg border border-3 border-primary p-3 pe-5"
                required />
        <div class="invalid-tooltip">
                Must be a valid URL and be sure that it is accessible in
                public.
        </div>`;
      mediaCont.appendChild(newMediaInput);
    }
  });
}

function removeMedia() {
  const mediaUrls = document.querySelectorAll('.newMedia');

  mediaUrls.forEach((mediaUrl, i) => {
    if (i + 1 === mediaUrls.length) {
      mediaUrl.remove();
    }
  });
}
