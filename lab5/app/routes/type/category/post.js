import Route from '@ember/routing/route';
//Local
import { getData } from '../../../shared';

export default class TypeCategoryPostRoute extends Route {
  async model({ type, category, post }) {
    const response = await getData(`app/${type}/${category}/${post}`);

    return response.status < 400 ? response.data : null;
  }
}
