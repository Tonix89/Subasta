import { getStorage } from '../storage/get.js';

export async function getList(url) {
  try {
    const token = getStorage('subToken');
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    if (res.ok) {
      return resData;
    } else {
      // console.log(resData);
      alert(resData.errors[0].message);
    }
  } catch (error) {
    alert(error);
  }
}
