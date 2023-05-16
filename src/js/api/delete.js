import { removeParam } from '../storage/remove-param.js';

export async function deleteList(url, token) {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      removeParam('id');
      location.reload();
    } else {
      removeParam('id');
      alert(
        'Sorry, we have some problem deleting your list. Try again later. Thank you!'
      );
      location.reload();
    }
  } catch (error) {
    alert(error);
  }
}
