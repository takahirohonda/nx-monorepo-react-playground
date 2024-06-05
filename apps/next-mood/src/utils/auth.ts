import { auth } from '@clerk/nextjs/server'
import { prisma } from './db'

export const getUserByClerkId = async ({
  select,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  select?: any
}) => {
  const { userId } = await auth()

  if (userId) {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        clerkId: userId,
      },
      select,
    })

    return user
  }

  return
}
