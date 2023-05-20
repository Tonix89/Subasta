import { getParam } from '../../storage/get-param.js';
import { url } from '../../api/baseurl.js';
import { getStorage } from '../../storage/get.js';
import { deleteList } from '../../api/delete.js';

export function delList() {
  const delListBtn = document.getElementById('del-list-btn');
  delListBtn.addEventListener('click', () => {
    const id = getParam('id');
    const delListUrl = url + '/auction/listings/' + id;
    const token = getStorage('subToken');
    const okDel = window.confirm('Are you sure you  want to delete it?');
    if (okDel) {
      deleteList(delListUrl, token);
      //   location.reload();
    }
  });
}
