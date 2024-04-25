import { TextField } from '@mui/material'
import { useField } from 'formik'

interface TextInputFormikProps {
  name: string
  label: string
}
export const TextInputFormik = ({ name, label }: TextInputFormikProps) => {
  const [field] = useField({ name })
  const { value, onBlur, onChange } = field

  return (
    <TextField
      id={name}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  )
}
