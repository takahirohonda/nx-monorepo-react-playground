import { customDataIdFromObject } from './getCache'

describe('customDataIdFromObject', () => {
  it('should return a custom data ID for objects with entityId and __typename', () => {
    const obj = {
      __typename: 'MultipleChoiceOption',
      entityId: 123,
    }
    expect(customDataIdFromObject(obj)).toBe('MultipleChoiceOption:123')
  })

  it('should fallback to defaultDataIdFromObject for objects without entityId', () => {
    const obj = {
      __typename: 'SomeOtherType',
      id: 456,
    }
    expect(customDataIdFromObject(obj)).toBe('SomeOtherType:456')
  })

  it('should fallback to defaultDataIdFromObject for objects without __typename', () => {
    const obj = {
      entityId: 789,
      id: 456,
    }
    expect(customDataIdFromObject(obj)).toBe(undefined)
  })

  it('should fallback to defaultDataIdFromObject for objects without entityId and __typename', () => {
    const obj = {
      id: 456,
    }
    expect(customDataIdFromObject(obj)).toBe(undefined)
  })
})
