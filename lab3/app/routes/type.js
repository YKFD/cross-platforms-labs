import Route from '@ember/routing/route';
import Cookies from 'js-cookie';
import { COOKIES_CATEGORY } from '../constants';
//Local
import { getData } from '../shared';

export default class TypeRoute extends Route {
  _getCategoryChildren(type) {
    const categories = JSON.parse(Cookies.get(COOKIES_CATEGORY));

    const children = categories.find(
      (category) => category.name.toLowerCase() === type
    ).children;

    return children.map((child) => {
      return {
        url: child.name.toLowerCase(),
        name: child.name,
      };
    });
  }

  async _getValues(url, type) {
    const { status, data } = await getData(url);
    const values = this._getCategoryChildren(type);
    if (status < 400) {
      return { values, data, type };
    } else {
      return {
        values,
        type,
      };
    }
  }

  async model({ type }) {
    return this._getValues(`app/${type}`, type);
  }
}
