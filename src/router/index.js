/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/home';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		}, {
			path: '*',
			component: Home
		}
	]
});
