import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CarsNewController extends Controller {
    @action
    addCar() {
        let self = this;
        // Creates a new car
        const newCar = this.store.createRecord('car', {
            make: this.get('carMake'),
            model: this.get('carModel'),
            year: this.get('carYear')
        });

        newCar.save();

        self.transitionToRoute('cars')
    }
}
