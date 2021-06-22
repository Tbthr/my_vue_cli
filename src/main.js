// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 导入上面创建的路由配置目录
// 导入 elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 配置路由
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
