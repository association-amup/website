import { useTranslation } from 'react-i18next';

function Home() {
  const { t, ready } = useTranslation();

  if (!ready) return

  return (
    <div>
      <div className="relative bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">{t('home.welcome')}</span>
            <span className="block text-accent mt-2">
              {t('home.subtitle')}
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            {t('home.description')}
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-400 transition duration-300 text-white"
            >
              {t('home.getInvolved')}
            </a>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t('home.support.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.support.description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t('home.resources.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.resources.description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t('home.advocacy.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.advocacy.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-accent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('home.getInvolved')}
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              {t('home.description')}
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                {t('home.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 
