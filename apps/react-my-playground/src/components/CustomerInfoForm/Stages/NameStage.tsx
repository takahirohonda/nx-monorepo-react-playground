import { TextInputFormik } from '../../TextInputFormik/TextInputFormik'

export const NameStage = () => (
  <>
    <TextInputFormik name="firstName" label="First Name" />
    <TextInputFormik name="lastName" label="Last Name" />
  </>
)
