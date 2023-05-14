import { url } from '../api/baseurl.js';
import { getList } from '../api/getListing.js';

export function profileListDisplay(name) {
  const listUrl = url + '/auction/profiles/' + name + '/listings';

  getList(listUrl).then((data) => {
    console.log(data);
  });
}
