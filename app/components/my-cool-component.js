import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MyCoolComponentComponent extends Component {
    @tracked name = "Yusaf";
    @tracked greetingSet = false;

    @action
    greetUser(name) {
        alert(`Hello ${name}`);
        this.greetingSet = true;
    }
}
