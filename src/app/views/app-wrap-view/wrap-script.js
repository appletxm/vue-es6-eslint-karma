import './wrap-style.less';
import template from './wrap-template.html';
import { menuComponent } from '../../components/menu-component/menu-script';
import { navigatorComponent } from '../../components/navigator-component/navigator-script';

let appWrapView = {
	template: template,

	data: function () {
		return {
			msg: 'my wrap begin'
		};
	},

	components:{
		'my-menu': menuComponent,
		'my-navigator': navigatorComponent
	}
};

export { appWrapView };