import 'components/menu-component/menu-style';
import template from 'components/menu-component/menu-template';
import { menuData } from 'models/menu-model';

let menuComponent = {
	template: template,
	data: function () {
		return {
			menu: menuData
		};
	}
};

export {menuComponent};