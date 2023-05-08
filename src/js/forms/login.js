import { url } from '../api/baseurl.js';
import { postApi } from '../api/post.js';

export async function goLogin(form) {
  //   console.log(form);
  const formInput = form.querySelectorAll('input, textarea');

  let inputValue = [];
  formInput.forEach((input) => {
    // console.log(input.value);
    inputValue.push(input.value);
  });
  //   console.log(inputValue);

  const [email, password] = inputValue;
  //   console.log(email, password);

  const bodyData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  const regUrl = url + '/auction/auth/login';
  postApi(bodyData, regUrl).then((loginRes) => {
    if (loginRes) {
      localStorage.setItem('subToken', loginRes.accessToken);
      location.href = location.href + '?user=' + loginRes.name;
    }
  });
}
