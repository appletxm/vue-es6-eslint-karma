import { menuData } from 'models/menu-model';

describe('menu', function(){
	it('should have items', function(){
		expect(menuData.length).toEqual(3);
	});
});
