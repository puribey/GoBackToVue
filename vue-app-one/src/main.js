import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDEYKKxXWszLwOFBMD9VZhCD5QnGjihXPY',
      authDomain: 'meetups-vueappone.firebaseapp.com',
      databaseURL: 'https://meetups-vueappone.firebaseio.com',
      projectId: 'meetups-vueappone',
      storageBucket: 'meetups-vueappone.appspot.com'
    })
  }
})
