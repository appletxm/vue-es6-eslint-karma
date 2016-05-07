import Vue from '../../node_modules/vue/dist/vue';
import { appWrapView } from './views/app-wrap-view/wrap-script';

let vue = new Vue({
	data: {
		app: 'txm test app',
		view: 'txm test view'
	},

	components:{
		'my-app-wrap': appWrapView
	}
});

vue.$mount('#my-app');