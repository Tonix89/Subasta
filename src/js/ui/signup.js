export const signup = () => {
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
            console.log(form);
          }
          form.classList.add('was-validated');
        },
        false
      );
    });
  })();
};
