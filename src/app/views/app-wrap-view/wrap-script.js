import 'views/app-wrap-view/wrap-style';
import template from 'views/app-wrap-view/wrap-template';
import { menuComponent } from 'components/menu-component/menu-script';
import { navigatorComponent } from 'components/navigator-component/navigator-script';

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