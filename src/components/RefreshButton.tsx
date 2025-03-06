'use client'

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
      disabled={isLoading}
      className='bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded cursor-pointer'
    >
      Refresh
    </button>
  )
}
