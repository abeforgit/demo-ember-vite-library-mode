import Application from '@ember/application';
import compatModules from '@embroider/virtual/compat-modules';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

const ENV = {
  modulePrefix: 'embeddable-test-vite',
  environment: 'production',
  rootURL: '/',
  locationType: 'history',
  EmberENV: {
    EXTEND_PROTOTYPES: false,
    FEATURES: {
      // Here you can enable experimental features on an ember canary build
      // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
    },
  },

  APP: {
    // Here you can pass flags/options to your application instance
    // when it is created
  },
};
export default class App extends Application {
  declare create: (opts: { name: string; autoboot: boolean }) => {
    visit: (
      route: string,
      opts: { rootElement: string | HTMLElement; location: string },
    ) => void;
  };
  modulePrefix = ENV.modulePrefix;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  Resolver = Resolver.withModules(compatModules);
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
loadInitializers(App, ENV.modulePrefix, compatModules);
