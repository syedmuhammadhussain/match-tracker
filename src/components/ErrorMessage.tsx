'use client'

interface ErrorMessageProps {
  error: boolean
  message: string
}

export default function ErrorMessage({ error, message }: ErrorMessageProps) {
  if (!error) return null
  return (
    <div className='bg-red-100 text-red-700 p-2 rounded mb-4'>{message}</div>
  )
}
