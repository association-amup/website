import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../shared/LanguageSwitcher'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { t, ready } = useTranslation()

  if (!ready) return

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.news'), href: '/news' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.president'), href: '/president' },
    { name: t('nav.goals'), href: '/goals' },
    { name: t('nav.activities'), href: '/activities' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  return (
    <nav className="bg-deep-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/img/logo.png"
                alt="AMUP Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'bg-darker-blue text-white'
                    : 'text-gray-200 hover:bg-darker-blue hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side items (Language + Mobile Menu) */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher - Always visible */}
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'bg-darker-blue text-white'
                    : 'text-gray-200 hover:bg-darker-blue hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 