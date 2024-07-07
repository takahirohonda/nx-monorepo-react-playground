import { Header } from '../components/Header'
import Link from 'next/link'

import { auth } from '../auth'
import { SignInButton } from '../components/SignInButton'
import { SignOutButton } from '../components/SignOutButton'

const Home = async () => {
  const session = await auth()

  const isSignedIn = Boolean(session?.user)

  console.log(JSON.stringify(session))

  return (
    <div className="bg-slate-800 h-screen flex">
      <div className="container flex flex-col">
        <div className="fixed m-[16px]">
          <Header />
        </div>
        <div className="flex justify-center grow items-center">
          <div className="flex flex-col gap-[40px] items-center">
            <h1 className="text-8xl text-white">Here it comes...</h1>
            <h2 className="text-4xl text-white">
              Certainty of death. Small chance of success. What are we waiting
              for?
            </h2>

            <Link
              href="/journal"
              className="w-[150px] p-[16px] bg-rose-400 rounded text-center"
            >
              Go To Journal
            </Link>
            {!isSignedIn && <SignInButton />}
            {isSignedIn && <SignOutButton />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
