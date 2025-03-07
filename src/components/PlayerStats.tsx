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
            className='flex flex-wrap items-center justify-center md:justify-between rounded p-2 md:p-4 bg-[#101318]'
          >
            <div className='flex items-center gap-2 mb-2 md:mb-0'>
              <Image
                src='/icons/user.svg'
                alt='Player Icon'
                width={20}
                height={20}
                className='w-7 h-7'
              />
              <span className='font-semibold text-gray-100 text-xs md:text-base'>
                {player.username}
              </span>
            </div>
            <span className='text-gray-500 text-sm'>
              Kills: <strong className='text-white'>{player.kills}</strong>
            </span>
          </li>
        ))}
      </ul>
      <div className='mt-4 flex justify-between rounded p-4 bg-[#101318]'>
        <div className='text-sm'>
          <span className='text-gray-500'>Points:</span>
          <strong className='ml-2 font-medium text-white'>
            +{team.points}
          </strong>
        </div>
        <div className='text-sm'>
          <span className='text-gray-500'>Place:</span>
          <strong className='ml-2 font-medium text-white'>{team.place}</strong>
        </div>
        <div className='text-sm'>
          <span className='text-gray-500'>Total Kills:</span>
          <strong className='ml-2 font-medium text-white'>
            {team.total_kills}
          </strong>
        </div>
      </div>
    </div>
  )
}
