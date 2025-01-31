import { useTranslation } from 'react-i18next';
import PageHeader from '../components/shared/PageHeader';

function Contact() {
  const { t, ready } = useTranslation();

  if (!ready) return

  return (
    <div>
      <PageHeader 
        title={t('contact.title')}
        description={t('contact.description')}
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">
              {t('contact.info.title')}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.address')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('contact.info.addressLine1')}
                  <br />
                  {t('contact.info.addressLine2')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.email')}</h3>
                <p className="mt-2 text-gray-600">{t('contact.info.emailAddress')}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.phone')}</h3>
                <p className="mt-2 text-gray-600 inline-block" dir="ltr">
                  {t('contact.info.phoneNumber1')}
                  <br />
                  {t('contact.info.phoneNumber2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 