import PageHeader from '../components/shared/PageHeader';

function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Directrice Exécutive",
      image: "https://placehold.co/300x300"
    },
    {
      name: "Mohammed Benali",
      role: "Coordinateur de Programme",
      image: "https://placehold.co/300x300"
    },
    // Add more team members as needed
  ];

  return (
    <div>
      <PageHeader 
        title="À propos" 
        description="Découvrez notre mission et l'équipe derrière l'AMUP"
      />

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary">Notre Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              L'AMUP se consacre à la promotion de la sensibilisation à la santé mentale, 
              à la réduction de la stigmatisation et au soutien des personnes et des familles 
              touchées par les défis de la santé mentale au Maroc.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Notre Histoire</h2>
          <div className="prose max-w-3xl mx-auto text-gray-600">
            <p>
              Fondée en [ANNÉE], l'AMUP a commencé comme un petit groupe d'individus 
              dévoués à l'amélioration du soutien en santé mentale au Maroc. Au fil 
              des années, nous sommes devenus une organisation nationale...
            </p>
            <p className="mt-4">
              Grâce à nos différents programmes et initiatives, nous avons aidé des 
              milliers de personnes à accéder aux ressources et au soutien en santé mentale...
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Notre Équipe</h2>
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