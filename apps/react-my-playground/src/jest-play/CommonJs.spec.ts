// eslint-disable-next-line @typescript-eslint/no-var-requires
const commonJsMultiplyBy2 = require('./CommonJs')
jest.mock('./CommonJs')

describe('Mocking Common JS Module', () => {

  it('should return the mocked value', () => {

    commonJsMultiplyBy2.mockReturnValue(4)

    expect(commonJsMultiplyBy2()).toBe(4)
  })
})