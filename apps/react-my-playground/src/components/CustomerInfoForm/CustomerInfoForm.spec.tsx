import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CustomerInfoForm } from './CustomerInfoForm'

describe('<CustomerInfoForm />', () => {
  beforeEach(() => {
    window.alert = jest.fn()
  })
  afterEach(() => {
    ;(window.alert as jest.Mock<any, any>).mockClear()
  })
  it('should render the form and submit', async () => {
    render(<CustomerInfoForm />)
    expect(screen.getByTestId('customer-info-form')).toBeVisible()
    // This results in console.error:
    // Warning: An update to Formik inside a test was not wrapped in act(...).
    // When testing, code that causes React state updates should be wrapped into act(...):
    // userEvent.type(screen.getByLabelText('First Name'), 'FirstName')
    // So, this works
    await act(async () => {
      await userEvent.type(screen.getByLabelText('First Name'), 'FirstName')
    })

    // Same as above
    // userEvent.click(screen.getByRole('button', { name: 'Submit' }))
    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Submit' }))
    })
  })
})
