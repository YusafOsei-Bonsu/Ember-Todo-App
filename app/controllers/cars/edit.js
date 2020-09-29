import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CarsEditController extends Controller {
    @action
    editCar(id) {
        const self = this;
        const make = this.get('model.make');
        const model = this.get('model.model');
        const year = this.get('model.year');

        this.store.findRecord('car', id)
        .then((car) => {
            car.set('make', make);
            car.set('model', model);
            car.set('year', year);
            // car.save();
            self.transitionToRoute('cars');
        })
        .catch((err) => {
            console.error(err);
        });
    }
}
