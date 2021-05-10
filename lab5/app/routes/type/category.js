import Route from '@ember/routing/route';
//Local
import { getData } from '../../shared';

export default class TypeCategoryRoute extends Route {
  async model({ type, category }) {
    const response = await getData(`app/${type}/${category}`);
    if (response.status < 400) {
      return { type, name: category, data: response.data };
    } else {
      return null;
    }
  }
}
