import { url } from '../api/baseurl.js';
import { postApi } from '../api/post.js';
import { getStorage } from '../storage/get.js';

export async function goChangeAvatar(form) {
  const userName = getStorage('subUser');
  const token = getStorage('subToken');
  const formInput = form.querySelector('input, textarea');

  //   console.log(formInput.value);

  const bodyData = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      avatar: formInput.value,
    }),
  };
  const avatarUrl = url + '/auction/profiles/' + userName + '/media';
  postApi(bodyData, avatarUrl).then((avatarRes) => {
    // console.log(avatarRes);
    if (avatarRes) {
      location.reload();
    }
  });
}
