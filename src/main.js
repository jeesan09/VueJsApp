// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import golobalComponent from  './components/golobalComponent.vue'
import Vuetify from 'vuetify'
 // index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueResource from 'Vue-resource'

Vue.use(Vuetify)
Vue.use(VueResource)


Vue.component('gcomponent',golobalComponent);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

    
