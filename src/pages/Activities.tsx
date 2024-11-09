import PageHeader from '../components/shared/PageHeader';

function Activities() {
  const activities = [
    {
      title: "Conférences",
      description: "Conférences régulières avec des intervenants experts, des tables rondes et des ateliers sur divers sujets de santé mentale.",
      image: "https://placehold.co/600x400",
      details: [
        "Sommet Annuel de la Santé Mentale",
        "Ateliers de Développement Professionnel",
        "Sessions d'Éducation Communautaire"
      ]
    },
    {
      title: "Cellules d'écoute",
      description: "Services d'écoute et de soutien fournis par des professionnels et bénévoles formés.",
      image: "https://placehold.co/600x400",
      details: [
        "Sessions de Soutien Individuel",
        "Intervention de Crise",
        "Groupes de Soutien par les Pairs"
      ]
    },
    {
      title: "Ateliers",
      description: "Ateliers interactifs axés sur l'éducation à la santé mentale, les stratégies d'adaptation et le développement des compétences.",
      image: "https://placehold.co/600x400",
      details: [
        "Gestion du Stress",
        "Pratique de la Pleine Conscience",
        "Formation aux Compétences de Vie"
      ]
    },
    {
      title: "Marches",
      description: "Marches de sensibilisation et manifestations publiques pour promouvoir la sensibilisation à la santé mentale et réduire la stigmatisation.",
      image: "https://placehold.co/600x400",
      details: [
        "Marche Annuelle de Sensibilisation",
        "Événements de Sensibilisation Communautaire",
        "Campagnes de Plaidoyer Public"
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Nos Activités" 
        description="Découvrez les différentes façons dont nous soutenons la santé mentale dans notre communauté"
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
              <p className="text-gray-600 mb-6">{activity.description}</p>
              <ul className="space-y-2">
                {activity.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-600">
                    <span className="text-accent mr-2">•</span>
                    {detail}
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