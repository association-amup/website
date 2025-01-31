import { useTranslation } from 'react-i18next';
import PageHeader from '../components/shared/PageHeader';

function Activities() {
  const { t, ready } = useTranslation();
  
  if (!ready) return

  const activities = [
    {
      title: t('activities.types.conferences.title'),
      description: t('activities.types.conferences.description'),
      image: "https://placehold.co/600x400",
      details: t('activities.types.conferences.details', { returnObjects: true })
    },
    {
      title: t('activities.types.listeningCells.title'),
      description: t('activities.types.listeningCells.description'),
      image: "https://placehold.co/600x400",
      details: t('activities.types.listeningCells.details', { returnObjects: true })
    },
    {
      title: t('activities.types.workshops.title'),
      description: t('activities.types.workshops.description'),
      image: "https://placehold.co/600x400",
      details: t('activities.types.workshops.details', { returnObjects: true })
    },
    {
      title: t('activities.types.awareness.title'),
      description: t('activities.types.awareness.description'),
      image: "https://placehold.co/600x400",
      details: t('activities.types.awareness.details', { returnObjects: true })
    },
    {
      title: t('activities.types.trips.title'),
      description: t('activities.types.trips.description'),
      image: "https://placehold.co/600x400",
      details: t('activities.types.trips.details', { returnObjects: true })
    },
  ];

  return (
    <div>
      <PageHeader 
        title={t('activities.title')}
        description={t('activities.description')}
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {activities.map((activity, index) => (
          <div 
            key={activity.title}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index !== 0 ? 'mt-16' : ''
            }`}
          >
            <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <img
                src={activity.image}
                alt={activity.title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4">{activity.title}</h2>
              <ul className="space-y-2">
                {(activity.details as string[]).map((detail: string) => (
                  <li key={detail} className="flex items-center text-gray-600">
                    {(activity.details as string[]).length > 1 ? <>•</> : <></>} {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities; 