import { helper } from '@ember/component/helper';

export default helper(function toLowerCase(params) {
  return params[0].toLowerCase();
});
