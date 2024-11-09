import PageHeader from "../components/shared/PageHeader";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

function News() {
  // Mock data - replace with your actual news items
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Succès de l'atelier sur la santé mentale",
      date: "2024-03-15",
      description: "Plus de 100 participants ont rejoint notre récent atelier sur la compréhension de l'anxiété et de la dépression, avec des intervenants experts et des sessions interactives.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: 2,
      title: "Lancement d'un nouveau groupe de soutien",
      date: "2024-03-10",
      description: "L'AMUP lance un nouveau groupe de soutien hebdomadaire à Casablanca, offrant un espace sûr aux individus pour partager leurs expériences et trouver une communauté.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: 3,
      title: "Annonce de la conférence annuelle",
      date: "2024-03-05",
      description: "Réservez la date pour notre prochaine conférence annuelle sur la défense de la santé mentale, avec des intervenants internationaux et des ateliers.",
      imageUrl: "https://placehold.co/600x400",
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Actualités" 
        description="Restez informé de nos dernières activités et événements"
      />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="mt-2 text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
