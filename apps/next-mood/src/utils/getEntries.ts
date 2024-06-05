import { getUserByClerkId } from './auth'
import { prisma } from './db'

export const getEntries = async () => {
  const user = await getUserByClerkId({})
  if (user) {
    const entries = await prisma.journalEntry.findMany({
      where: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        userId: (user as any).id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return entries
  }

  return
}
