import 'components/navigator-component/naviagtor-style';
import template from 'components/navigator-component/navigator-template';
import {navigatorData, getCurrentNavigatorCell} from 'models/navigator-model';

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