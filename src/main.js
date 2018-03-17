import Vue from 'vue'
import App from './App.vue'

Vue.directive('success', {
  bind (el, binding) {
    el.style.color = binding.value.color
    el.style.background = binding.value.background
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
