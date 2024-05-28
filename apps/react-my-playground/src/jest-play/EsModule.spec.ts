import * as EsModule from './EsModule'

/*
 * Question 1. How can we fix this... This errors
 *   TypeError: Cannot redefine property: oneDayAfter
 *        at Function.defineProperty (<anonymous>)
 *
 */

/* Answer
* We need to mock with __esModule true. This will make this

{ oneDayBefore: [Getter], oneDayAfter: [Getter], whatever: [Getter] }

to

{
  __esModule: true,
  oneDayBefore: [Function: oneDayBefore],
  oneDayAfter: [Function: oneDayAfter],
  whatever: [Function: whatever]
}
*
*/

// without this, it will fail.
jest.mock('./EsModule', () => ({
  __esModule: true,
  ...jest.requireActual('./EsModule'),
}))

describe('Checking jest.mock and jest.spyOn with es module', () => {
  it('should ...', () => {
    console.log(EsModule)
    jest.spyOn(EsModule, 'oneDayAfter').mockImplementation(() => {
      return 2
    })

    expect(EsModule.oneDayAfter()).toBe(2)
  })
})
