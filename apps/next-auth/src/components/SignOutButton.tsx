import { signOut } from '../auth'

export const SignOutButton = () => {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button
        type="submit"
        className="w-[150px] p-[16px] bg-blue-400 rounded text-center"
      >
        Sign Out
      </button>
    </form>
  )
}
