import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CarsNewController extends Controller {
    @action
    addCar() {
        alert(this.get('carMake'));
    }
}
