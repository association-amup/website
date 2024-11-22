import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-${isRTL ? 'right' : 'left'} align-middle shadow-xl transition-all`}>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {t('donation.title')}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-4">
                    {t('donation.description')}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {t('donation.bankDetails')}:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">{t('donation.bankName')}:</span>{' '}
                        Bank Al-Maghrib
                      </p>
                      <p>
                        <span className="font-medium">{t('donation.accountHolder')}:</span>{' '}
                        AMUP
                      </p>
                      <p>
                        <span className="font-medium">IBAN:</span>{' '}
                        MA00 0000 0000 0000 0000 0000
                      </p>
                      <p>
                        <span className="font-medium">SWIFT:</span> XXXXXXXXXXXXX
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`mt-4 ${isRTL ? 'text-left' : 'text-right'}`}>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    {t('common.close')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DonationModal