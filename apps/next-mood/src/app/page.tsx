import { auth } from '@clerk/nextjs/server'
import { Header } from '../components/Header'
import Link from 'next/link'

const Home = async () => {
  const { userId } = await auth()

  console.log(`checking userId: ${userId}`)
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
            {userId ? (
              <Link
                href="/journal"
                className="w-[150px] p-[16px] bg-rose-400 rounded text-center"
              >
                Go To Journal
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-up"
                  className="w-[150px] p-[16px] bg-rose-400 rounded text-center"
                >
                  Sign Up Now!
                </Link>
                <div className="flex flex-col items-center gap-[16px]">
                  <span className="text-white">
                    You already have an account?
                  </span>
                  <Link
                    href="/sign-in"
                    className="text-[18px] text-white hover:underline"
                  >
                    <span className="mr-[8px]">➡️</span> Sign in now
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
