/* jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from './router';
/* 引入Element */
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
/* element 按需封装加载 */ 
import { Progress, Message } from 'element-ui';
Vue.use(Progress);
// Vue.use(Message);
Vue.prototype.$message = Message;
/* 引入vuex */
import store from '@/store';
/* 引入css */
import '@/assets/css/style.css';

/* 组件 */ 
import ProgressBar from '@/components/progress';
Vue.component('myProgress', ProgressBar);

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
