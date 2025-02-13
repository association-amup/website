import { useTranslation } from "react-i18next";

interface PageHeaderProps {
  title: string;
  description?: string;
}

function PageHeader({ title, description }: PageHeaderProps) {
  const { ready } = useTranslation();
  
  if (!ready) return <div>Loading...</div>;

  return (
    <div className="bg-gradient-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        {description && (
          <p className="mt-2 text-xl text-gray-200">{description}</p>
        )}
      </div>
    </div>
  );
}

export default PageHeader; 