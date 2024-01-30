import type { Metadata } from 'next'
import './globals.css'
import TitleBar from '@/components/TitleBar'
import BurgerMenu from '@/components/BurgerMenu'
import Footer from '@/components/Footer'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Seven Heaven',
  description: 'Seven Heaven - Partyband aus Muenchen - Beste Live Unterhaltung für Hochzeit, Bierzelt, Weinfest. Wir sorgen für Stimmung auf Ihrer Feier.',
  metadataBase: new URL('https://sevenheaven-preview.vercel.app') // TODO: replace before release
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={montserrat.className}>
      <body>
          <TitleBar />
          <BurgerMenu />
          {children}
          <Footer />
      </body>
    </html>
  )
}
