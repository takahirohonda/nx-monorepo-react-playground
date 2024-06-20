import { auth } from '@clerk/nextjs/server'

const AdminPage = async () => {
  const { userId } = auth()
  return (
    <>
      <h1>Admin Page</h1>
      <p>This is the userId: {userId}</p>
    </>
  )
}

export default AdminPage
