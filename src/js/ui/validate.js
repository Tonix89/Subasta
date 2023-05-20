import { goSignup } from '../forms/signup.js';
import { goLogin } from '../forms/login.js';
import { goChangeAvatar } from '../forms/change-avatar.js';
import { addNewList } from '../forms/add-listing.js';
import { goAddBid } from '../forms/add-bid.js';
import { aboutUsDisplay } from '../display/aboutuspage.js';

export function validateForm() {
  (() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          event.preventDefault();
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            switch (form.id) {
              case 'sign-up':
                goSignup(form);
                break;
              case 'login':
                goLogin(form);
                break;
              case 'change-avatar':
                goChangeAvatar(form);
                break;
              case 'add-listing':
                addNewList(form);
                break;
              case 'add-bid-form':
                goAddBid(form);
                break;
              case 'about-us':
                alert('Thank you for reaching us! We will contact you soon.');
                aboutUsDisplay();
                break;
              case 'subscription':
                alert('Thank you for subscribing to our newsletter.');
                aboutUsDisplay();
                break;
              default:
                break;
            }
          }
          form.classList.add('was-validated');
        },
        false
      );
    });
  })();
}
