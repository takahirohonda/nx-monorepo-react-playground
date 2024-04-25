import { useCallback } from 'react'
import { Box, Button } from '@mui/material'
import { Form, Formik } from 'formik'

import { TextInputFormik } from '../TextInputFormik/TextInputFormik'
import { CustomerInfoFormValues } from './CustomerInfoForm.types'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressStreet: '',
  addressState: '',
  addressCountry: '',
}

export const CustomerInfoForm = () => {
  const onSubmit = useCallback((values: CustomerInfoFormValues) => {
    /* eslint-disable no-alert */
    alert(`Submitted form with: ${JSON.stringify(values)}`)
  }, [])

  return (
    <Formik<CustomerInfoFormValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form data-testid="customer-info-form">
        <Box display="flex" flexDirection="column" rowGap="20px">
          <TextInputFormik name="firstName" label="First Name" />
          <TextInputFormik name="lastName" label="Last Name" />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  )
}
