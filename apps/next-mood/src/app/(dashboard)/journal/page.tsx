import { getEntries } from '../../../utils/getEntries'

const JournalPage = async () => {
  const entries = await getEntries()
  console.log(`checking journal entries: ${entries}`)
  return <div>Journal page</div>
}
export default JournalPage
