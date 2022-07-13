import { createApp } from 'vue'
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';
import { createPinia } from 'pinia'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import titleMixin from './mixins/titleMixin'
import App from './App.vue'

console.info("using endpoint: "+import.meta.env.VITE_GRAPHQL_ENDPOINT)

const app = createApp(App);

// UI
app.use(BalmUI, {
  $theme: {
    // (Optional) New in 9.28.0, See ThemeColor type in APIs.
      primary: "#1565c0",
      background: "#cfd8dc"
  }
});
app.use(BalmUIPlus);

// Datastore
app.use(createPinia());

// GraphQL
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
})

// Various
app.mixin(titleMixin);

app.mount('#app');
