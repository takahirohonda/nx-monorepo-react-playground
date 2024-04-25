import { TextInputFormik } from '../../TextInputFormik/TextInputFormik'

export const AddressStage = () => (
  <>
    <TextInputFormik name="country" label="Country" />
    <TextInputFormik name="state" label="State" />
    <TextInputFormik name="address line 1" label="Address Line 1" />
  </>
)
