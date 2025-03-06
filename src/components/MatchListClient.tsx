'use client'

// ** Third Components
import useSWR from 'swr'

// ** Reusable Components
import RefreshButton from './RefreshButton'
import ErrorMessage from './ErrorMessage'
import TeamStatus from './TeamStatus'
import TeamName from './TeamName'

// ** Types
import {
  MatchListClientProps,
  MatchResponseData,
} from '@/types/match-tracker.types'

// ** fetch reponse
const fetcher = async (url: string): Promise<MatchResponseData> => {
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function MatchListClient({
  fallbackData,
}: MatchListClientProps) {
  const { data, error, isLoading, mutate } = useSWR<MatchResponseData>(
    `${process.env.NEXT_PUBLIC_BASEURL}/fronttemp`,
    fetcher,
    { fallbackData, revalidateOnFocus: false }
  )

  return (
    <>
      <div className='flex justify-between align-center'>
        <h1 className='text-3xl font-bold text-center'>Match Tracker</h1>
        <RefreshButton mutate={mutate} isLoading={isLoading} />
      </div>
      <div className='bg-white shadow rounded p-4 mt-4'>
        {error && <ErrorMessage error={true} message={error.message} />}

        {data?.data.matches && data.data.matches.length > 0 ? (
          <ul>
            {data.data.matches.map((match, index) => (
              <li
                key={index}
                className={`border-gray-200 py-3 ${
                  index === data.data.matches.length - 1 ? '' : 'border-b'
                }`}
              >
                <div className='flex justify-between items-center'>
                  <TeamName name={match.awayTeam.name} position='left' />
                  <TeamStatus {...match} />
                  <TeamName name={match.homeTeam.name} position='right' />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-gray-600'>No matches found.</p>
        )}
      </div>
    </>
  )
}
