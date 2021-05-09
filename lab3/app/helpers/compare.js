import { helper } from '@ember/component/helper';

export default helper(function compare(params) {
  return params[0] === params[1];
});
