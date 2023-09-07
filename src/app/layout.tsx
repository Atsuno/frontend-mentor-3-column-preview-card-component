import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen justify-center bg-rear pt-20 md:items-center md:p-0`}
      >
        {children}
      </body>
    </html>
  )
}
