import Route from '@ember/routing/route';
// import axios from 'axios';

export default class CarsRoute extends Route {
    model() {
        return this.store.findAll('car');
    }

    /* 
    async model() {
        // const response = await axios.get('/cars.json');
        // const cars = response.data;
        return cars;
    }
    */
}
