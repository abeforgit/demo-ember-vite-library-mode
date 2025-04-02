import Route from 'ember-route-template';
import { pageTitle } from 'ember-page-title';

export default Route(
  <template>
    {{pageTitle "EmbeddableTestVite"}}

    {{outlet}}

    "hello"
  </template>,
) as unknown;
