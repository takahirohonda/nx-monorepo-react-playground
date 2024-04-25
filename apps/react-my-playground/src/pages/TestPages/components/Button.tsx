import { clsx } from 'clsx'
import z from 'zod'

const buttonVariantSchema = z.enum(['primary', 'secondary', 'tertiary'])
type ButtonVariant = z.infer<typeof buttonVariantSchema>

interface ButtonProps {
  text: string
  onClick: () => void
  variant: ButtonVariant
}

export const Button = ({ text, onClick, variant }: ButtonProps) => {
  const buttonColour = variant === 'primary' ? 'bg-blue-700' : 'bg-red-700'
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'text-white',
        buttonColour,
        'hover:bg-blue-800 ',
        'focus:outline-none',
        'focus:ring-4',
        'focus:ring-blue-300',
        'font-medium',
        'rounded-full',
        'text-md',
        'px-5',
        'py-2.5',
        'text-center',
        'me-2',
        'mb-2',
        'dark:bg-blue-600',
        'dark:hover:bg-blue-700',
        'dark:focus:ring-blue-800'
      )}
    >
      {text}
    </button>
  )
}
