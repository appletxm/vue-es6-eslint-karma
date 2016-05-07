import './naviagtor-style.less';
import template from './navigator-template.html';
import {navigatorData, getCurrentNavigatorCell} from '../../models/navigator-model';

let navigatorComponent = {
	template: template,

	data: function () {
		return {
			navigator: navigatorData
		};
	},

	methods: {
		getItem: function(id){
			let item;
			item = getCurrentNavigatorCell(id);
			alert(item.id);
		}
	}
};

export {navigatorComponent};