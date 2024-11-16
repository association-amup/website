import { useTranslation } from 'react-i18next';
import PageHeader from '../components/shared/PageHeader';

function About() {
  const { t, ready } = useTranslation();
  
  if (!ready) return

  const teamMembers = [
    {
      name: "Dr. Sarah Ahmed",
      role: t('about.team.roles.executiveDirector'),
      image: "https://placehold.co/300x300"
    },
    {
      name: "Mohammed Benali",
      role: t('about.team.roles.programCoordinator'),
      image: "https://placehold.co/300x300"
    },
    // Add more team members as needed
  ];

  return (
    <div>
      <PageHeader 
        title={t('about.title')}
        description={t('about.description')}
      />

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary">{t('about.mission.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('about.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">{t('about.history.title')}</h2>
          <div className="prose max-w-3xl mx-auto text-gray-600">
            <p>{t('about.history.description')}</p>
            <p className="mt-4">{t('about.history.impact')}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">{t('about.team.title')}</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="mt-4 text-lg font-medium text-primary">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 