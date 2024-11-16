import { useTranslation } from 'react-i18next';
import PageHeader from '../components/shared/PageHeader';

function Goals() {
  const { t, ready } = useTranslation();
  
  if (!ready) return

  const goals = [
    {
      id: 1,
      title: t('goals.list.awareness.title'),
      description: t('goals.list.awareness.description'),
      icon: "🎓"
    },
    {
      id: 2,
      title: t('goals.list.support.title'),
      description: t('goals.list.support.description'),
      icon: "🤝"
    },
    {
      id: 3,
      title: t('goals.list.advocacy.title'),
      description: t('goals.list.advocacy.description'),
      icon: "📢"
    },
    {
      id: 4,
      title: t('goals.list.stigma.title'),
      description: t('goals.list.stigma.description'),
      icon: "💪"
    },
    {
      id: 5,
      title: t('goals.list.research.title'),
      description: t('goals.list.research.description'),
      icon: "🔬"
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('goals.title')}
        description={t('goals.description')}
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <div 
              key={goal.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{goal.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{goal.title}</h3>
              <p className="text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Goals; 