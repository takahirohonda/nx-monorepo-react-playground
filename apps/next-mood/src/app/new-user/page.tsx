import { currentUser } from '@clerk/nextjs/server'

import { redirect } from 'next/navigation'
import dataSource from '../../data-source'
import { User } from '../../entity'

const createNewUser = async () => {
  const user = await currentUser()
  const clerkId = user?.id
  const emailAddress = user?.primaryEmailAddress?.emailAddress
  const name = user?.fullName

  console.log(JSON.stringify(user))

  const { manager } = dataSource

  if (user) {
    const match = await manager.findOneBy(User, {
      clerkId,
    })

    if (!match && clerkId && emailAddress && name) {
      await manager.insert(User, {
        clerkId,
        email: emailAddress,
        name,
      })
    }
  }

  redirect('/journal')
}

const NewUserPage = async () => {
  await createNewUser()
  return <div>New User Page</div>
}

export default NewUserPage
