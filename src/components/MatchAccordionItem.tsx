'use client'

// ** Third Components
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// ** Reusable Components
import TeamName from './TeamName'
import TeamStatus from './TeamStatus'
import PlayerStats from './PlayerStats'

// ** Types
import { Match } from '@/types/match-tracker.types'

export default function MatchAccordionItem({ match }: { match: Match }) {
  return (
    <Disclosure
      as='li'
      className='rounded-lg p-2 md:p-3 mb-2 bg-[#06080c]'
    >
      {({ open }) => (
        <>
          <Disclosure.Button className='relative flex justify-between items-center w-full text-left focus:outline-none cursor-pointer pb-6 md:pb-0'>
            <div className='flex items-center gap-4'>
              <TeamName name={match.awayTeam.name} position='left' />
            </div>
            <TeamStatus {...match} />
            <div className='flex items-center'>
              <TeamName name={match.homeTeam.name} position='right' />
              <ChevronDownIcon
                className={`absolute bottom-0 left-[50%] transform translate-x-[-15px] md:translate-x-[0] translateX[-15] md:left-[0] md:relative w-5 h-5 text-white transition-transform duration-300 transform ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className='pt-4 text-gray-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <PlayerStats team={match.awayTeam} />
              <h5 className='text-center text-gray-500 font-semibold md:hidden'>VS</h5>
              <PlayerStats team={match.homeTeam} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
