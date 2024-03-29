import Navigation from '@/components/Navigation';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi first next app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
      </head>
      <body>
        <Navigation/>
        <div className="container p-4">{children}</div>
        
      </body>
    </html>
  )
}
