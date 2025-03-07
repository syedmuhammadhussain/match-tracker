'use client'

// ** React Imports
import { useState } from 'react'

// ** Fonts
import { Inter } from 'next/font/google'

// ** Third Components
import useSWR from 'swr'

// ** Reusable Components
import RefreshButton from './RefreshButton'
import ErrorMessage from './ErrorMessage'
import DropDown from './DropDown'
import MatchAccordionItem from './MatchAccordionItem'

// ** Types
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
  const [selectedStatus, setSelectedStatus] = useState<string>('')

  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_BASEURL}/fronttemp`,
    fetcher,
    { fallbackData, revalidateOnFocus: false }
  )

  // Filter matches based on selected status
  const filteredMatches = data?.data.matches?.filter((match: Match) => {
    if (selectedStatus === '') return true
    return match.status.toLowerCase() === selectedStatus.toLowerCase()
  })

  const handleRefresh = () => {
    setSelectedStatus('') // Reset dropdown to default.
    mutate()
  }

  return (
    <div className='min-h-screen text-white bg-[#06080C] rounded'>
      <div className='max-w-full mx-auto px-4 md:p-10'>
        <div className='flex flex-wrap justify-between text-center md:items-center mb-8'>
          <div className='w-full md:w-auto flex flex-wrap items-center gap-4 mb-3 md:mb-0'>
            <h1 className='w-full md:w-auto text-3xl font-bold italic md:text-4xl lg:text-5xl mt-4 md:mt-0'>
              Match Tracker
            </h1>
            <DropDown
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
            />
          </div>
          <div
            className={`flex w-full md:w-auto flex-wrap items-center gap-4 ${inter.className}`}
          >
            {error && <ErrorMessage error={true} message={error.message} />}
            <RefreshButton mutate={handleRefresh} isLoading={isLoading} />
          </div>
        </div>

        {filteredMatches?.length ? (
          <ul className={`space-y-4 ${inter.className}`}>
            {filteredMatches.map((match: Match, index: number) => (
              <MatchAccordionItem key={index} match={match} />
            ))}
          </ul>
        ) : (
          <p className='bg-[#101318] rounded text-center text-gray-400 p-4'>No records found.</p>
        )}
      </div>
    </div>
  )
}
