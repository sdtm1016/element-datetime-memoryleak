import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.mixin({
  beforeDestroy() {
    console.log(`%c component ${this.name || this.$options.name} will be destoryed`, 'color:red');
  },
  created() {
    console.log(`%c component ${this.name || this.$options.name} will be created`, 'color:green');
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
