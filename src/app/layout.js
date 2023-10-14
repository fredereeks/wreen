import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wroon :: The Marketplace for the Scripts of Tomorrow',
  description: "Wroon is the world's biggest meeting point for scripts writers and buyers to connect in a secure, seamless and purposeful manner for an exchange of talent and ideas for money and discovery",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
