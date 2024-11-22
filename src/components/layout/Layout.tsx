import Navbar from './Navbar'
import Footer from './Footer'
import FloatingDonateButton from '../shared/FloatingDonateButton'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <FloatingDonateButton />
      <Footer />
    </div>
  )
}

export default Layout 
