const navigatorData = [
	{
		id: 'operation_1',
		label : 'operation 1'
	},

	{
		id: 'operation_2',
		label : 'operation 2'
	},

	{
		id: 'operation_3',
		label : 'operation 3'
	}
];

function getCurrentNavigatorCell(navigatorId){
	let matchedItem;

	for(let item of navigatorData){
		if(item['id'] === navigatorId){
			matchedItem =  item;
		}
		if(matchedItem){
			break;
		}
	}

	return matchedItem;
}

export {navigatorData, getCurrentNavigatorCell};
