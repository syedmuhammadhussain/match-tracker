'use client'

import Image from 'next/image'

type Team = {
  name: string
  place: number
  points: number
  total_kills: number
  players: Array<{
    username: string
    kills: number
  }>
}

export default function PlayerStats({ team }: { team: Team }) {
  return (
    <div>
      <ul className='grid grid-cols-3 gap-2'>
        {team.players.map((player, index) => (
          <li
            key={index}
            className='flex items-center justify-between bg-gray-800 rounded p-4'
            style={{ backgroundColor: '#101318' }}
          >
            <div className='flex items-center gap-2'>
              <Image
                src='/icons/user.svg'
                height={20}
                width={20}
                alt='Player Icon'
              />
              <span className='font-semibold text-gray-100'>
                {player.username}
              </span>
            </div>
            <span className='text-gray-500 text-sm'>
              Kills: <strong className='text-white'>{player.kills}</strong>
            </span>
          </li>
        ))}
      </ul>
      <div
        className='mt-4 flex justify-between bg-gray-800 rounded p-4'
        style={{ backgroundColor: '#101318' }}
      >
        <div className='text-sm'>
          <span className='text-gray-500'>Points:</span>
          <strong className='ml-2 font-medium text-white'>+{team.points}</strong>
        </div>
        <div className='text-sm'>
          <span className='text-gray-500'>Place:</span>
          <strong className='ml-2 font-medium text-white'>{team.place}</strong>
        </div>
        <div className='text-sm'>
          <span className='text-gray-500'>Total Kills:</span>
          <strong className='ml-2 font-medium text-white'>{team.total_kills}</strong>
        </div>
      </div>
    </div>
  )
}
