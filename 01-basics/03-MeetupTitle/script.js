import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      checkTitle: null,
      title: '',
    };
  },

  watch: {
    checkTitle: {
      handler(newValue) {
        this.getTitle(newValue);
      },
    },
  },

  methods: {
    getTitle(meetupId) {
      fetch(`https://course-vue.javascript.ru/api/meetups/${meetupId}`)
        .then(response => response.json())
        .then(json => {
          this.title = json.title;
        });
    },
  },
});
