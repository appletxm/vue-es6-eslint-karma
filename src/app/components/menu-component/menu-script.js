import './menu-style.less';
import template from './menu-template.html';
import { menuData } from '../../models/menu-model';

let menuComponent = {
	template: template,
	data: function () {
		return {
			menu: menuData
		};
	}
};

export {menuComponent};