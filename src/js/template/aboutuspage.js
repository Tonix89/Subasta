import { validateForm } from '../ui/validate.js';
import {
  aboutUsPageCont,
  homePage,
  listingPageCont,
  profilePageCont,
} from '../variables/dom.js';

export function aboutUsPageTemp() {
  aboutUsPageCont.classList.replace('d-none', 'd-flex');
  profilePageCont.classList.replace('d-flex', 'd-none');
  listingPageCont.classList.replace('d-flex', 'd-none');
  homePage.classList.add('d-none');
  profilePageCont.innerHTML = '';
  listingPageCont.innerHTML = '';
  homePage.innerHTML = '';
  aboutUsPageCont.innerHTML = `<div class="d-flex flex-column col-11 col-md-8 col-lg-5 align-items-center justify-content-center mb-3">
                <div class="border border-secondary border-4 rounded p-3">
                    <h3 class="d-flex text-success fw-bold justify-content-center">Abous Us</h3>
                    <p class="fw-semibold fs-5" style="text-indent: 50px;">"Subasta is a Cebuano word that means "Auction" in English. Cebuano is one of the many dialects you can find in the Philippines. Subasta website is an online auction house build for Noroff users to sell and buy items. A successful registration will give the user 1000 credits that they can use to purchase the active listing. To earn more credits you have create new listing and let people bid for it to add their bid amount to your credits.</p>
                </div>
                <div class="border border-secondary border-4 rounded p-3 w-100 mt-3">
                    <h3 class="d-flex text-success fw-bold justify-content-center">Contact Us</h3>
                    <form class="mt-5 needs-validation" id="about-us" novalidate>
                        <div class="mb-5 position-relative">
                            <label
                            for="contact-email"
                            class="form-label bg-white h4 text-success p-1 position-absolute"
                            >Email</label
                            >
                            <input
                            type="email"
                            class="form-control form-control-lg border border-3 border-primary p-3"
                            id="contact-email"
                            required
                            />
                            <div class="invalid-tooltip">
                            Must be a valid email address.
                            </div>
                        </div>
                        <div class="mb-5 position-relative">
                            <label
                                for="subject"
                                class="form-label bg-white h4 text-success p-1 position-absolute"
                                >Subject</label
                            >
                            <input
                                type="text"
                                class="form-control form-control-lg border border-3 border-primary p-3"
                                id="subject"
                                pattern="[A-Za-z0-9_]+"
                                required
                            />
                            <div class="invalid-tooltip">
                                Must not be empty.
                            </div>
                        </div>
                        <div class="mb-5 position-relative">
                        <label
                          for="message"
                          class="form-label bg-white h4 text-success p-1 position-absolute"
                          >Message</label
                        >
                        <textarea class="form-control form-control-lg border border-3 border-primary p-3" id="message" maxlength="250" required></textarea>
                        <div class="invalid-tooltip">
                          Must not be empty and atleast 250 characters.
                        </div>
                      </div>
                        <div class="d-flex flex-column">
                            <button type="submit"
                                class="btn align-self-end btn-lg fw-bold fs-5 align-self-center mt-3"
                                id="contact-btn"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div class="w-100 mt-5">
                    <h5 class="fs-semibold">Subscribe To News Letter</h5>
                    <form class="needs-validation" id="subscription" novalidate>
                        <div class="position-relative">
                            <input
                            type="email"
                            class="form-control form-control-lg border border-3 border-primary p-3" placeholder="Email Address"
                            id="sub-email"
                            required
                            />
                            <div class="invalid-tooltip">
                            Must be a valid email address.
                            </div>
                        </div>
                        <div class="d-flex flex-column mt-2">
                            <button type="submit"
                                class="btn align-self-end btn-lg fw-bold fs-5 align-self-center"
                                id="subscribe-btn" style="width:250px;"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>

    </div>`;

  validateForm();
}
