import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

export default {
  get(url, paramas) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          paramas: {
            ...paramas
          }
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
