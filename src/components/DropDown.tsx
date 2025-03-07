import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function DropDown() {
  return (
    <div className='ml-3 text-right'>
      <Menu>
        <MenuButton className='inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'>
          All statuses
          <ChevronDownIcon className='size-4 fill-white/60' />
        </MenuButton>

        <MenuItems
          transition
          anchor='top end'
          className='w-52 z-1 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
        >
          <MenuItem>
            <button className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'>
              Live
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'>
              Finished
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'>
              Match Preparing
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
