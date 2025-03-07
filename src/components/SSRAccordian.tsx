"use client";

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const accordionItems = [
  {
    title: 'What is SSR?',
    content:
      'Server-side rendering (SSR) is the process where your app’s HTML is generated on the server, allowing for faster initial loads and better SEO.',
  },
  {
    title: 'Why use Headless UI?',
    content:
      'Headless UI provides fully accessible, unstyled UI components that you can customize with Tailwind CSS, and they work seamlessly with SSR setups in Next.js.',
  },
  {
    title: 'How does hydration work?',
    content:
      'With SSR, Next.js pre-renders the HTML on the server. Once the JavaScript bundle loads on the client, React hydrates the static markup to make it interactive.',
  },
]

export default function SSRAccordion() {
  return (
    <div className='w-full max-w-md p-2 mx-auto bg-white rounded-2xl'>
      {accordionItems.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none'>
                <span>{item.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                {item.content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
