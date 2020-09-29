import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CarsNewController extends Controller {
    @action
    addCar() {
        let self = this;
        let rand = Math.floor((Math.random() * 10000) + 1);
        // Creates a new car
        const newCar = this.store.createRecord('car', {
            id: rand,
            make: this.get('carMake'),
            model: this.get('carModel'),
            year: this.get('carYear')
        });

        newCar.save();

        self.transitionToRoute('cars')
    }
}
