import { removeParam } from '../../storage/remove-param.js';

export function onReload() {
  removeParam('id');
}
