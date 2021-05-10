import { helper } from '@ember/component/helper';

export default helper(function firstLetterCapitalize(params) {
  return params[0].charAt(0).toUpperCase() + params[0].slice(1);
});
