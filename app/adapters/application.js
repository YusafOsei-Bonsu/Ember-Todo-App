import RESTAdapter from '@ember-data/adapter/rest';

export default RESTAdapter.extend({
    host: "cars.json?json=?",
    shouldReloadAll() {
        return true;
    }
});
