import { useTranslation } from "react-i18next";
import PageHeader from "../components/shared/PageHeader";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

function News() {
  const { t, ready } = useTranslation();

  if (!ready) return

  // Mock data - replace with your actual news items
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: t('news.items.workshop.title', 'Mental Health Workshop Success'),
      date: "2024-03-15",
      description: t('news.items.workshop.description', 'Over 100 participants joined our recent workshop on understanding anxiety and depression, featuring expert speakers and interactive sessions.'),
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: 2,
      title: t('news.items.support.title', 'New Support Group Launch'),
      date: "2024-03-10",
      description: t('news.items.support.description', 'AMUP launches new weekly support group in Casablanca, providing a safe space for individuals to share experiences and find community.'),
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: 3,
      title: t('news.items.conference.title', 'Annual Conference Announcement'),
      date: "2024-03-05",
      description: t('news.items.conference.description', 'Save the date for our upcoming annual mental health advocacy conference, featuring international speakers and workshops.'),
      imageUrl: "https://placehold.co/600x400",
    },
  ];

  return (
    <div>
      <PageHeader 
        title={t('news.title')}
        description={t('news.description')}
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
