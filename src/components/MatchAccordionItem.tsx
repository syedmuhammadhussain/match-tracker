'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import TeamName from './TeamName'
import TeamStatus from './TeamStatus'
import PlayerStats from './PlayerStats'
import { Match } from '@/types/match-tracker.types'

export default function MatchAccordionItem({ match }: { match: Match }) {
  return (
    <Disclosure
      as='li'
      className='bg-gray-900 rounded-lg p-3 mb-2'
      style={{ backgroundColor: '#06080c' }}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className='flex justify-between items-center w-full text-left focus:outline-none cursor-pointer'>
            <div className='flex items-center gap-4'>
              <TeamName name={match.awayTeam.name} position='left' />
            </div>
            <TeamStatus {...match} />
            <div className='flex items-center'>
              <TeamName name={match.homeTeam.name} position='right' />
              <ChevronDownIcon
                className={`w-5 h-5 text-white transition-transform duration-300 transform ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className='pt-4 text-gray-300'>
            <div className='grid grid-cols-2 gap-4'>
              <PlayerStats team={match.awayTeam} />
              <PlayerStats team={match.homeTeam} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
