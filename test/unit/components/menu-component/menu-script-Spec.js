import Vue from 'vue'
import { menuComponent } from '../../../../src/app/components/menu-component/menu-script';
describe('menu component', function(){
	let vm,
		panel;

	beforeEach(() => {
		panel = document.createElement('div');
		panel.setAttribute('id', 'test-vue-panel');
		document.querySelectorAll('body')[0].appendChild(panel);

		vm = new Vue({
			template: '<div><test></test></div>',
			components: {
				'test': menuComponent
			}
		}).$mount('#test-vue-panel');
	});

	it('should render correct message', () => {
		expect(vm.$el.querySelectorAll('ul').length).toBe(1);
	});

	it('should render correct message', () => {
		expect(vm.$el.querySelectorAll('li').length).toBe(3);
	});

	afterEach(() => {
		panel = document.querySelector('#test-vue-panel');
		document.querySelectorAll('body')[0].removeChild(panel);
	});
});
