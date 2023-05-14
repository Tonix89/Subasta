import { url } from '../api/baseurl.js';
import { postApi } from '../api/post.js';
import { getStorage } from '../storage/get.js';
export function addNewList(form) {
  //   console.log(form);
  const formInput = form.querySelectorAll('input, textarea');

  let inputValue = [];
  let mediaInput = [];
  formInput.forEach((input, i) => {
    // console.log(input.value);

    if (i < 4) {
      inputValue.push(input.value);
    } else {
      mediaInput.push(input.value);
    }
  });

  const [title, description, tags, date] = inputValue;
  const tagArrays = tags.split(',');
  const tag = tagArrays.map((tagArray) => tagArray.trim());

  const setTime = new Date(date);
  setTime.setHours(23, 0, 0, 0);
  const dateEnded = setTime.toISOString();

  const token = getStorage('subToken');
  const postUrl = url + '/auction/listings';
  const bodyData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
      tags: tag,
      media: mediaInput,
      endsAt: dateEnded,
    }),
  };

  postApi(bodyData, postUrl).then((data) => {
    if (data) {
      location.reload();
    }
  });
}
