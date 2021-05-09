import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import Cookies from 'js-cookie';
//Local
import { getData } from '../shared';
import { COOKIES_CATEGORY } from '../constants';

export default class AppHeader extends Component {
  @tracked categories;

  constructor(owner, args) {
    super(owner, args);
    this.getCategories();
  }

  async getCategories() {
    const response = await getData('app/categories');
    if (response.status < 400) {
      this.categories = response.data;
      Cookies.set(COOKIES_CATEGORY, JSON.stringify(response.data));
    }
  }
}
