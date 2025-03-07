'use client'

import LoadingSpinner from './LoadingSpinner'

interface RefreshButtonProps {
  mutate: () => void
  isLoading: boolean
}

export default function RefreshButton({
  mutate,
  isLoading,
}: RefreshButtonProps) {
  return (
    <button
      onClick={() => mutate()}
      className='flex w-full md:w-auto items-center justify-center md:justify-left bg-[#EB0237] hover:bg-[#d60333] text-white font-semibold py-2 px-12 rounded cursor-pointer'
    >
      Refresh
      {isLoading && (
        <div className='ml-2'>
          <LoadingSpinner />
        </div>
      )}
    </button>
  )
}
