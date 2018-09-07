const getSprintName = require('./index')

test('should export function', () => {
  expect(getSprintName).toBeDefined()
  expect(typeof getSprintName).toBe('function')
})

test('should get a random sprint name', () => {
  const result = getSprintName()

  expect(typeof result).toBe('string')
  expect(result.split(' ').length > 2).toBeTruthy()
})
