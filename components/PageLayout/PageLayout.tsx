import { Inter } from 'next/font/google'
import Navigation from '../MainNavigation'
import Footer from '../Footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
