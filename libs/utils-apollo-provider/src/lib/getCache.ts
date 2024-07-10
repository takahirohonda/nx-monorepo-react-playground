import { defaultDataIdFromObject, InMemoryCache } from '@apollo/client'

const possibleTypes = {
  CatalogProductOption: [
    'MultipleChoiceOption',
    'NumberFieldOption',
    'TextFieldOption',
    'MultiLineTextFieldOption',
    'FileUploadFieldOption',
    'DateFieldOption',
    'CheckboxOption',
  ],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customDataIdFromObject = (object: any) => {
  if (object.entityId && object.__typename) {
    return `${object.__typename}:${object.entityId}`
  }
  return defaultDataIdFromObject(object)
}

export const getCache = () =>
  new InMemoryCache({
    possibleTypes,
    dataIdFromObject: customDataIdFromObject,
  })
