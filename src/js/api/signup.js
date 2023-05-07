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
}
