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
    <div className='min-h-screen p-0 md:p-10 bg-[#171717]'>
      <div className='max-w-full mx-auto'>
        <MatchListClient fallbackData={data} />
      </div>
    </div>
  )
}
