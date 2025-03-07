'use client'

import Image from 'next/image'

interface ErrorMessageProps {
  error: boolean
  message: string
}

export default function ErrorMessage({ error, message }: ErrorMessageProps) {
  if (!error) return null
  return (
    <div className='text-white px-4 py-2 rounded mr-2 flex align-center bg-[#0F1318]'>
      <Image
        src='/icons/warning.svg'
        height={20}
        width={20}
        alt='Player Star'
      />
      <span className='ml-2'>{message}</span>
    </div>
  )
}
