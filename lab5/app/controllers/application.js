import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import classic from 'ember-classic-decorator';
//Local
import { getData } from '../shared';

@classic
export default class Application extends Controller {
  @tracked posts;

  async init() {
    super.init();
    const blogResponse = await getData('app/blogs');
    const newsResponse = await getData('app/news');
    const forumResponse = await getData('app/forum');
    this.posts = [
      { title: 'Blogs', data: blogResponse.data },
      { title: 'News', data: newsResponse.data },
      { title: 'Forum', data: forumResponse.data },
    ];
  }
}
