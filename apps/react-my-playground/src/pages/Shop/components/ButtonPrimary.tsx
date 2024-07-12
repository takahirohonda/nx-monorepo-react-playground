import { clsx } from 'clsx'

export interface ButtonPrimaryProps {
  onClickHandler: () => void
  label: string
  variant: 'blue' | 'green' | 'yellow' | 'red' | 'pink'
}

const getStyle = (variant: ButtonPrimaryProps['variant']) => {
  const blueStyle =
    'hover:bg-white hover:text-blue-600 border-blue-600 bg-blue-600'
  switch (variant) {
    case 'blue':
      return blueStyle
    case 'green':
      return 'hover:bg-white hover:text-green-600 border-green-600 bg-green-600'
    case 'yellow':
      return 'hover:bg-white hover:text-yellow-600 border-yellow-600 bg-yellow-600'
    case 'red':
      return 'hover:bg-white hover:text-red-600 border-red-600 bg-red-600'
    case 'pink':
      return 'hover:bg-white hover:text-pink-600 border-pink-600 bg-pink-600'
    default:
      return blueStyle
  }
}

export const ButtonPrimary = ({
  onClickHandler,
  label,
  variant,
}: ButtonPrimaryProps) => {
  return (
    <button
      onClick={onClickHandler}
      className={clsx(
        `p-3 w-40 rounded-md border
      text-white text-lg`,
        getStyle(variant)
      )}
    >
      {label}
    </button>
  )
}
