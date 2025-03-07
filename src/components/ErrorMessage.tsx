'use client'

import Image from 'next/image'

interface ErrorMessageProps {
  error: boolean
  message: string
}

export default function ErrorMessage({ error, message }: ErrorMessageProps) {
  if (!error) return null
  return (
    <div className='text-white p-2 rounded mr-2 flex align-center'>
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
