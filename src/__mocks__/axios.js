module.exports = {
  get: jest.fn((url) => {
    if (url === '/something') {
      return Promise.resolve({
        data: {
          data: {
            results: ['hero1', 'hero2', 'hero3'],
          },
        },
      })
    }
  }),
}
