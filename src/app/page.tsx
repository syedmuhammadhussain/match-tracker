// ** Reusable Components
import MatchListClient from '@/components/MatchListClient'

// ** Helper
import getMatches from '@/lib/getMatches'

// ** Types
import { MatchResponseData } from '@/types/match-tracker.types'

export default async function HomePage() {
  //** */ SSR: Fetch the initial data.
  const data: MatchResponseData = await getMatches()

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='max-w-3xl mx-auto mt-10'>
        <MatchListClient fallbackData={data} />
      </div>
    </div>
  )
}
