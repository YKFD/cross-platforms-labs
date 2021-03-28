import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Application extends Controller {
  @tracked
  list = [{ fullName: 'Illia Chervonchuk', phoneNumber: 'll' }];
  @tracked
  fullName = '';
  @tracked
  phoneNumber = '';
  @tracked
  showList = true;

  @action
  addValue() {
    this.list = [
      ...this.list,
      {
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
      },
    ];
    this.fullName = '';
    this.phoneNumber = '';
  }
  @action
  removeValue(index) {
    this.list = this.list.filter((_, i) => i !== index);
  }
}
