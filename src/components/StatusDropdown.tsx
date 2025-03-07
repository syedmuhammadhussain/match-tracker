'use client'

import { useState } from 'react'
import { Combobox } from '@headlessui/react'

export default function StatusDropdown() {
  const [selectedStatus, setSelectedStatus] = useState('All')
  const statuses = ['All', 'Live', 'Finished', 'Scheduled', 'Ongoing']

  return (
    <Combobox value={selectedStatus} onChange={setSelectedStatus}>
      <Combobox.Input
        className='bg-gray-800 text-white py-2 px-4 rounded-lg cursor-default'
        displayValue={(status: string) => status}
      />
      <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
        {statuses.map(status => (
          <Combobox.Option
            key={status}
            value={status}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? 'bg-gray-700' : 'text-gray-200'
              }`
            }
          >
            {status}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}
