module.exports = {
	get: jest.fn((url) => {
		if (url === '/something') {
			return Promise.resolve({
				data: {
					data: {
						results: ['hero1', 'hero2', 'hero3'],
					},
				},
			});
		}
	}),
	post: jest.fn((url) => {
		if (url === '/something') {
			return Promise.resolve({
				data: 'data',
			});
		}
		if (url === '/something2') {
			return Promise.resolve({
				data: 'data2',
			});
		}
	}),
	create: jest.fn(function () {
		return this;
	}),
};
