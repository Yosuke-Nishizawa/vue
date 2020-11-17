// simple
new Vue({
  el: '#simple',
  data: {
    menu_position: {
      left: 0,
      top: 0
    },
    show: false
  },
  methods: {
    onleftclick: function() {
      this.show = false;
    },
    onrightclick: function(e) {
      this.menu_position = {
        top: `${e.pageY}px`,
        left: `${e.pageX}px`
      };
      this.show = true;
    }
  }
})
// colorful
new Vue({
  el: '#colorful',
  data: {
    menu_position: {
      left: 0,
      top: 0
    },
    show: false
  },
  methods: {
    onleftclick: function() {
      this.show = false;
    },
    onrightclick: function(e) {
      this.menu_position = {
        top: `${e.pageY}px`,
        left: `${e.pageX}px`
      };
      this.show = true;
    }
  }
})