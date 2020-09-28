import Controller from '@ember/controller';

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
    
}
