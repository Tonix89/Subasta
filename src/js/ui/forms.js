import { goSignup } from '../api/signup.js';

export const forms = () => {
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
};
