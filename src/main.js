import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import VueFreezeframe from "vue-freezeframe"
import './plugins/firebase.js'
import firebase from 'firebase'


Vue.config.productionTip = false

//ここで.envへのパスをつないでいる
require("dotenv").config({ path: __dirname + "../../../.env" });

Vue.use(VueAxios, axios) //追記

Vue.use(VueFreezeframe);

const app = () => {
  firebase.auth().onAuthStateChanged((currentUser) => {
    if (currentUser) {
      console.log(currentUser);
      store.commit("setUser", currentUser);
    } else {
      store.commit("setUser", null);
    }
  }),
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
};
// 関数実行
app();
