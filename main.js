Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    product: 'socks for shoes',
    colors: [
      { id: 0, text: 'Red' },
      { id: 1, text: 'Blue' },
      { id: 2, text: 'Green' },
    ]
  },
  methods: {
    reverseMessage: function () {
      this.product = this.product.split(' ').reverse().join(' ')
    }
  }
})
