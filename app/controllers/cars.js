import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CarsController extends Controller {
    @action
    deleteCar(id) {
        // Deletes a certain car
        let car = this.store.peekRecord('car', id);
        car.destroyRecord();
        car.save();
    }
}
