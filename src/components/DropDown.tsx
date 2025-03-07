'use client'

import { Select } from '@headlessui/react'

export default function DropDown({
  selectedStatus,
  onStatusChange,
}: {
  selectedStatus: string
  onStatusChange: (value: string) => void
}) {
  return (
    <Select
      name='status'
      aria-label='Project status'
      className='bg-[#101318] p-2 rounded cursor-pointer w-full md:w-auto'
      value={selectedStatus}
      onChange={e => onStatusChange(e.target.value)}
    >
      <option value=''>All Statuses</option>
      <option value='live'>Live</option>
      <option value='finished'>Finished</option>
      <option value='scheduled'>Match preparing</option>
    </Select>
  )
}
