import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

export default {
  get(url, paramas) {
    // eslint-disable-next-line no-console
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          paramas: { key: "70fe29c55282cdfd0535c4507a5367db", keywords: "千峰" }
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
