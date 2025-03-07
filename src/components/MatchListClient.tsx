'use client'

import { Inter } from 'next/font/google'
import useSWR from 'swr'
import RefreshButton from './RefreshButton'
import ErrorMessage from './ErrorMessage'
import DropDown from './DropDown'
import MatchAccordionItem from './MatchAccordionItem'
import { Match, MatchListClientProps } from '@/types/match-tracker.types'

const inter = Inter({ subsets: ['latin'] })

const fetcher = async (url: string) => {
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function MatchListClient({
  fallbackData,
}: MatchListClientProps) {
  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_BASEURL}/fronttemp`,
    fetcher,
    { fallbackData, revalidateOnFocus: false }
  )

  return (
    <div
      className='min-h-screen bg-gray-900 text-white'
      style={{ backgroundColor: '#06080C' }}
    >
      <div className='max-w-full mx-auto p-10'>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center gap-4'>
            <h1 className='text-3xl font-bold italic'>Match Tracker</h1>
            <DropDown />
          </div>
          <div className={`flex items-center gap-4 ${inter.className}`}>
            {error && <ErrorMessage error={true} message={error.message} />}
            <RefreshButton mutate={mutate} isLoading={isLoading} />
          </div>
        </div>

        {data?.data.matches?.length ? (
          <ul className={`space-y-4 ${inter.className}`}>
            {data.data.matches.map((match: Match, index: number) => (
              <MatchAccordionItem key={index} match={match} />
            ))}
          </ul>
        ) : (
          <p className='text-center text-gray-400'>No matches found.</p>
        )}
      </div>
    </div>
  )
}
