import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el: '#counterBtn',
  data: {
    count: 0,
  },

  methods: {
    addCount() {
      this.count++;
    },
  },
});
