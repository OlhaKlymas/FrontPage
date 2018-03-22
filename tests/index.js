describe('Test group for front-app1', function(){
	it('1', function(){
		expect(Math.floor(4.5)).toBe(4);
	})

	it('2', function(){
		expect(Math.round(7.8)).toBe(8);
		expect(Math.round(7.2)).toBe(7);
	})
})

describe('Test group for front-app2', function(){
	it('3', function(){
		expect('vlad'.replace("a", "o")).toBe('vlod');
	})

	it('4', function(){
		expect('Itea'.indexOf('w')).not.toBe(+1);
	})
})