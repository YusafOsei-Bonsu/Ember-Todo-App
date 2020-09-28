import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PostController extends Controller {
    get title() {
        return this.model.title;
    }
    get body() {
        return this.model.body;
    }
    get authors() {
        return this.model.authors;
    }
    get comments() {
        return this.model.comments;
    }
    get created() {
        return this.model.created;
    }
    
    @action
    sayHello() {
        alert("Hello world!");
    }

    @action
    toggleBody() {
        this.toggleProperty('isShowingBody');
    }

    @action
    submitAction() {
        alert(`${this.get('name')} said ${this.get('comment')}`);
    }
}
