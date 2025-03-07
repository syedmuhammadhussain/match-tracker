'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import TeamName from './TeamName'
import TeamStatus from './TeamStatus'
import { Match } from '@/types/match-tracker.types'
import Image from 'next/image'

export default function MatchAccordion({ match }: { match: Match }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border-b border-gray-700 last:border-b-0'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex justify-between items-center w-full p-4 hover:bg-gray-800 transition-colors'
      >
        <div className='flex items-center space-x-4'>
          <TeamName name={match.awayTeam.name} position='left' />
          <TeamStatus {...match} />
          <TeamName name={match.homeTeam.name} position='right' />
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className='p-4 bg-gray-900'>
          {/* Add your match details here */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h3 className='text-white mb-2'>Home Team</h3>
              {match.homeTeam.players.map(player => (
                <div
                  key={player.username}
                  className='flex items-center space-x-2'
                >
                  <Image
                    src='/icons/starIcon.svg'
                    height={20}
                    width={20}
                    alt='Player Star'
                  />
                  <span className='text-gray-300'>{player.username}</span>
                  <span className='text-green-400'>{player.kills}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className='text-white mb-2'>Away Team</h3>
              {match.awayTeam.players.map(player => (
                <div
                  key={player.username}
                  className='flex items-center space-x-2'
                >
                  <Image
                    src='/icons/starIcon.svg'
                    height={20}
                    width={20}
                    alt='Player Star'
                  />
                  <span className='text-gray-300'>{player.username}</span>
                  <span className='text-green-400'>{player.kills}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
