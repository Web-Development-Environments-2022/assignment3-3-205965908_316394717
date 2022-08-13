require("dotenv").config();
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import routes from "./routes";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  IconsPlugin,
  BootstrapVue
} from "bootstrap-vue";
import "./scss/form-style.scss";

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
Vue.use(Vuelidate);
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  IconsPlugin,
  BootstrapVue
].forEach((x) => Vue.use(x));


const axiosInstanceAPI = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://127.0.0.1:80" : undefined,
  withCredentials: true
});
Vue.use(VueAxios, axiosInstanceAPI);


/* middleware */
// axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
//
// // Add a response interceptor
// axios.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

Vue.config.productionTip = false;

const shared_data = {
  username: localStorage.username,
  baseURL: process.env.NODE_ENV === "development" ? "http://127.0.0.1:80" : undefined,
  ingredients: [],
  equipments: [],
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
  },
  logout() {
    localStorage.clear();
    this.numberOfItemsInCart = 0;
    this.username = undefined;
  }
};
// Vue.prototype.$root.store = shared_data;
new Vue({
  router,
  data() {
    return {
      store: shared_data,
      numberOfItemsInCart: this.getNumberOfItemsInMealList()
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000
      });
    },
    isIdInMealList(id, inDb) {
      let list = localStorage.getItem("meal list");
      if (list === null) {
        localStorage.setItem("meal list", "");
        return false;
      }
      let key = `${inDb === true ? "D" : "S"}${id}`;
      let splitter = list.split(";");
      for (let i = 0; i < splitter.length; i++) {
        if (splitter[i] === key) return true;
      }
      return false;
    },
    addIdToMealList(id, inDb) {
      if (!this.isIdInMealList(id, inDb)) {
        let list = localStorage.getItem("meal list");
        if (list.length != 0) list = list + ";";
        let key = `${inDb === true ? "D" : "S"}${id}`;
        list = list + key;
        localStorage.setItem("meal list", list);
      }
      this.numberOfItemsInCart = this.getNumberOfItemsInMealList();
    },
    removeIdFromMealList(id, inDb) {
      if (this.isIdInMealList(id, inDb)) {
        let list = localStorage.getItem("meal list");
        let key = `${inDb === true ? "D" : "S"}${id}`;
        let splitter = list.split(";");
        for (let i = 0; i < splitter.length; i++) {
          if (splitter[i] === key) {
            splitter.splice(i, 1);
            localStorage.removeItem(key);
            break;
          }
        }
        list = splitter.join(";");
        localStorage.setItem("meal list", list);
      }
      this.numberOfItemsInCart = this.getNumberOfItemsInMealList();
    },
    getNumberOfItemsInMealList() {
      let list = localStorage.getItem("meal list");
      if (list === null || list === "") return 0;
      return list.split(";").length;
    },
    removeAllMealList() {
      let list = localStorage.getItem("meal list") ?? "";
      let splitter = list.split(";");
      splitter.forEach(x => localStorage.removeItem(x));
      localStorage.removeItem("meal list");
      this.numberOfItemsInCart = this.getNumberOfItemsInMealList();
    },
    updateMealPosition(id, inDb, flag) {
      if (this.isIdInMealList(id, inDb)) {
        let list = localStorage.getItem("meal list");
        let key = `${inDb === true ? "D" : "S"}${id}`;
        let splitter = list.split(";");
        if (splitter.length <= 1)
          return;
        for (let i = 0; i < splitter.length; i++) {
          if (splitter[i] === key) {
            if (flag && i != 0)
              [splitter[i - 1], splitter[i]] = [splitter[i], splitter[i - 1]];
            else if (!flag && i != splitter.length - 1)
              [splitter[i], splitter[i + 1]] = [splitter[i + 1], splitter[i]];
            break;
          }
        }
        list = splitter.join(";");
        localStorage.setItem("meal list", list);
      }
      this.numberOfItemsInCart = this.getNumberOfItemsInMealList();
    }
  },
  render: (h) => h(App)
}).$mount("#app");
