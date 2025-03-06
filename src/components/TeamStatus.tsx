// ** Types
import { Match } from '@/types/match-tracker.types'

export default function TeamStatus(match: Match) {
  const lowerStatus = match.status?.toLowerCase() ?? ''

  const statusColorMap: Record<string, string> = {
    finished: 'bg-red-500 text-white',
    ongoing: 'bg-yellow-500 text-black',
    live: 'bg-gree-500 text-white',
    scheduled: 'bg-orange-500 text-black',
  }

  const defaultStyle = 'bg-gray-300 text-black'

  const style = statusColorMap[lowerStatus] || defaultStyle

  return (
    <div className='text-center space-y-2'>
      <span>
        {match.awayTeam.points} : {match.homeTeam.points}
      </span>
      {lowerStatus && (
        <span
          className={`flex items-center ${style} px-2 py-1 rounded-sm text-xs`}
        >
          {match.status}
        </span>
      )}
    </div>
  )
}
