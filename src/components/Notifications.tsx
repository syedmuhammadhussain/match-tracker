'use client'

import { useState } from 'react'

export default function Notifications() {
  const [notifications, setNotifications] = useState<string[]>([])

  const addNotification = (message: string) => {
    setNotifications([...notifications, message])
    setTimeout(() => {
      setNotifications(notifications.filter((_, index) => index !== 0))
    }, 5000)
  }

  return (
    <div className='fixed top-4 right-4 z-50'>
      {notifications.map((message, index) => (
        <div
          key={index}
          className='bg-red-800 text-white p-4 rounded-lg mb-2 flex items-start'
        >
          <svg
            className='h-6 w-6 mr-3'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.768-.635-1.992-.26-2.46-.862l-.1.1-2.8 2.8h.01M12 19l4-4-4-4'
            ></path>
          </svg>
          <span className='text-sm'>{message}</span>
        </div>
      ))}
    </div>
  )
}
