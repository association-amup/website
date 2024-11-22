import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DonationModal from './DonationModal'

function FloatingDonateButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`fixed ${isRTL ? 'left-6' : 'right-6'} bottom-6 z-40 bg-accent text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center font-medium
          px-6 py-3 text-lg`}
        aria-label={t('donation.donate')}
      >
        <span className={`${isRTL ? 'ml-3' : 'mr-3'}`}>🤍</span>
        <span className="font-bold">{t('donation.donate')}</span>
      </button>
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default FloatingDonateButton