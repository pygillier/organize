import { createApp } from 'vue'
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

import App from './App.vue'


const app = createApp(App);

app.use(BalmUI, {
  $theme: {
    // (Optional) New in 9.28.0, See ThemeColor type in APIs.
      primary: "#1565c0",
      background: "#cfd8dc"
  }
});
app.use(BalmUIPlus);

app.mount('#app');
