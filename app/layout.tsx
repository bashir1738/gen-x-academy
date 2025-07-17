import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gen X Academy',
  description: 'Building Real Careers in Crypto & Web3',
  // generator: 'Gen X academy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
