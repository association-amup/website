import { useTranslation } from 'react-i18next';
import PageHeader from "../components/shared/PageHeader";

function President() {
  const { t, ready } = useTranslation();

  if (!ready) return

  return (
    <div>
      <PageHeader 
        title={t('president.title')}
        description={t('president.description')}
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <img
              src="https://placehold.co/400x500"
              alt={t('president.title')}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Dr. [Name]
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>{t('president.greeting')}</p>
              <p className="mt-4">{t('president.content.part1')}</p>
              <p className="mt-4">{t('president.content.part2')}</p>
              <p className="mt-4">{t('president.content.part3')}</p>
              <p className="mt-6 font-medium">
                {t('president.signature')}<br />
                Dr. [Name]<br />
                {t('president.title')}, AMUP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default President; 
