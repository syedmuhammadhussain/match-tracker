'use client'

import LoadingSpinner from './LoadingSpinner'

export default function RefreshButton({
  mutate,
  isLoading,
}: {
  mutate: () => void
  isLoading: boolean
}) {
  return (
    <button
      onClick={() => mutate()}
      className='flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-12 rounded cursor-pointer'
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
