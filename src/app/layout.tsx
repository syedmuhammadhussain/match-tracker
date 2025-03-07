import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Match Tracker',
  description: 'This is match tracker app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
