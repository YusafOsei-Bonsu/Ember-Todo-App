import Route from '@ember/routing/route';
import axios from 'axios';

export default class GithubRoute extends Route {
    async model() {
        const url = "https://api.github.com/users/YusafOsei-Bonsu/repos?sort=created_at&order=desc";
        const response = await axios.get(url);
        const repos = response.data.splice(0, 5);
        console.log(repos);
        return repos;
    }
}
