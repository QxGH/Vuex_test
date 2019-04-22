/* jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from './router';

/* 引入 Element-UI 全部组件 */
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

/* Element-UI 按需引入加载; 依赖于: babel-plugin-component */ 
import { Progress, Message } from 'element-ui';
Vue.use(Progress);
// Vue.use(Message);	
Vue.prototype.$message = Message; // message,msgbox,alert等组件不使用 Vue.use()；需要用 Vue.prototype 加载；

/* 引入 animate */
import animate from 'animate.css';

/* 引入vuex */
import store from '@/store';

/* 引入css */
import '@/assets/css/style.css';

/* 组件 */ 
// import ProgressBar from '@/components/progress';
// Vue.component('myProgress', ProgressBar);
import Tips from '@/components/Tips';
Vue.component('myTips', Tips);

Vue.config.productionTip = false;	// 不显示 Vue 警告

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
