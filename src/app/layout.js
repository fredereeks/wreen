import { AosProvider, Footer, Header } from '@/components'
import './globals.css'
import { Titillium_Web, Exo_2 } from 'next/font/google'

const titilium = Titillium_Web({ subsets: ["latin"], weight: ['200', '300', '400', '600', '700', '900'] })
const exo2 = Exo_2({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '100', '600', '700', '800'] })

export const metadata = {
  title: 'Wreen :: The Marketplace for the Scripts of Tomorrow',
  description: "Wreen is the world's biggest meeting point for [confidential won't-say] creators and buyers to connect in a secure, seamless and purposeful manner for an exchange of talent and ideas for money and discovery",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titilium.className} ${exo2.className} min-h-screen flex flex-col`}>
        <Header />
        <AosProvider>
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  )
}
