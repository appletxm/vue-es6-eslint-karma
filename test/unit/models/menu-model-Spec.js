import { menuData } from '../../../src/app/models/menu-model';

describe('menu model', function(){
	it('should have items', function(){
		expect(menuData.length).toEqual(3);
	});

	it('should have event items', function(){
		expect(menuData[0]['event']).toBeDefined();
	});
});
