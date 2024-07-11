import { currentUser } from '@clerk/nextjs/server'

import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()
  console.log(user)

  // if (user) {
  //   const match = await prisma.user.findUnique({
  //     where: {
  //       clerkId: user?.id,
  //     },
  //   })

  //   if (!match) {
  //     await prisma.user.create({
  //       data: {
  //         clerkId: user.id,
  //         email: user.emailAddresses[0].emailAddress,
  //       },
  //     })
  //   }
  // }

  redirect('/journal')
}

const NewUserPage = async () => {
  await createNewUser()
  return <div>New User Page</div>
}

export default NewUserPage
