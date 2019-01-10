// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'     //解决移动端300ms点击事件延迟的问题
import VueAwesomeSwiper from 'vue-awesome-swiper' //swiper 轮播
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'    //设置默认样式
import 'styles/border.css'   //设置1px像素边框问题
import 'styles/iconfont.css' //引入矢量小图标

Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
