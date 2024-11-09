import PageHeader from "../components/shared/PageHeader";

function President() {
  return (
    <div>
      <PageHeader 
        title="Mot du Président" 
        description="Un mot de notre direction"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <img
              src="https://placehold.co/400x500"
              alt="Président de l'AMUP"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Dr. [Nom du Président]
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Chers amis et supporteurs de l'AMUP,
              </p>
              <p className="mt-4">
                C'est un honneur pour moi de servir en tant que président de 
                l'Association Marocaine des Usagers de la Psychiatrie. Notre 
                organisation se trouve à l'avant-garde de la défense de la santé 
                mentale au Maroc...
              </p>
              <p className="mt-4">
                Nous croyons que la santé mentale est un droit fondamental, et 
                nous nous engageons à briser les barrières, à combattre la 
                stigmatisation et à assurer l'accès à des soins de santé mentale 
                de qualité pour tous...
              </p>
              <p className="mt-4">
                Ensemble, nous pouvons créer un changement positif et construire 
                une société plus compréhensive et plus solidaire.
              </p>
              <p className="mt-6 font-medium">
                Cordialement,<br />
                [Nom du Président]<br />
                Président, AMUP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default President; 
