'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'my-app',
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*.firebase.com"
    },
    firebase: {
      apiKey: "AIzaSyDB7U3rIrljRaZQ0YR555iHUdJhKZe5Cqk",
      authDomain: "ember-cars.firebaseapp.com",
      databaseURL: "https://ember-cars.firebaseio.com",
      projectId: "ember-cars",
      storageBucket: "ember-cars.appspot.com",
      messagingSenderId: "720133446170",
      appId: "1:720133446170:web:c07e6efe0c516db5cfcfa3",
      measurementId: "G-NV9HXFDLV3"
    },
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
