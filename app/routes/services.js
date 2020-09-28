import Route from '@ember/routing/route';

export default class ServicesRoute extends Route {
    model() {
        return ['PC Repair', 'Network Diagnostics', 'Home Audio Installations'];
    }
}
