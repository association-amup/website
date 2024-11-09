import PageHeader from '../components/shared/PageHeader';

function Goals() {
  const goals = [
    {
      id: 1,
      title: "Sensibilisation & Éducation",
      description: "Accroître la compréhension publique des problèmes de santé mentale et promouvoir la littératie en santé mentale à travers des programmes éducatifs et des campagnes.",
      icon: "🎓"
    },
    {
      id: 2,
      title: "Services de Soutien",
      description: "Fournir des services de soutien et des ressources accessibles aux individus et aux familles touchés par les défis de la santé mentale.",
      icon: "🤝"
    },
    {
      id: 3,
      title: "Plaidoyer",
      description: "Plaider pour de meilleures politiques de santé mentale et un meilleur accès aux services de santé mentale au Maroc.",
      icon: "📢"
    },
    {
      id: 4,
      title: "Réduction de la Stigmatisation",
      description: "Combattre la stigmatisation et la discrimination liées aux conditions de santé mentale à travers l'engagement communautaire et l'éducation.",
      icon: "💪"
    },
    {
      id: 5,
      title: "Recherche & Innovation",
      description: "Soutenir les initiatives de recherche et les approches innovantes en matière de soins et de traitement de la santé mentale.",
      icon: "🔬"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Nos Objectifs" 
        description="Travailler ensemble pour une meilleure santé mentale au Maroc"
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