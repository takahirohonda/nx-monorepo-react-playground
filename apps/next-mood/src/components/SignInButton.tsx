import { signIn } from '../auth'

export const SignInButton = () => {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <button
        type="submit"
        className="w-[150px] p-[16px] bg-rose-400 rounded text-center"
      >
        Signin with Google
      </button>
    </form>
  )
}
