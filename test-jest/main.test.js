const sum = require('./main')

test('properly add two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})