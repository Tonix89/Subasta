import { url } from '../api/baseurl.js';
import { postApi } from '../api/post.js';

export async function goSignup(form) {
  //   console.log(form);
  const formInput = form.querySelectorAll('input, textarea');

  let inputValue = [];
  formInput.forEach((input) => {
    // console.log(input.value);
    inputValue.push(input.value);
  });
  //   console.log(inputValue);

  const [name, avatar, email, password] = inputValue;
  console.log(name, avatar, email, password);

  const regData = {
    name: name,
    email: email,
    password: password,
    avatar: avatar,
  };
  const regUrl = url + '/auction/auth/register';
  postApi(regData, regUrl).then((regRes) => {
    if (regRes) {
      const loginUrl = url + '/auction/auth/login';
      const loginData = {
        email: email,
        password: password,
      };
      postApi(loginData, loginUrl).then((loginRes) => {
        localStorage.setItem('subToken', loginRes.accessToken);
        location.href = location.href + '?user=' + name;
      });
    }
  });
}
