import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyCoolComponentComponent extends Component {
    @action
    greetUser() {
        alert("Hello");
    }
}
