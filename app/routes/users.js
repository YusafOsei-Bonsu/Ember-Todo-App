import Route from '@ember/routing/route';
import axios from 'axios';

export default class UsersRoute extends Route {
    async model() {
        const url = "https://api.github.com/users";
        const response = await axios.get(url);
        const users = response.data;
        return users;  
    }
}
