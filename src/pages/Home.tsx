function Home() {
  return (
    <div>
      <div className="relative bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Bienvenue à l'AMUP</span>
            <span className="block text-accent mt-2">
              Promouvoir une meilleure santé mentale pour tous
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            Rejoignez-nous dans notre mission de sensibilisation à la santé mentale et 
            d'accompagnement des personnes dans le besoin à travers le Maroc.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-400 transition duration-300 text-white"
            >
              S'impliquer
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Support */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Groupes de soutien</h3>
              <p className="text-gray-600">
                Rejoignez nos groupes de soutien communautaires et connectez-vous avec 
                d'autres personnes qui comprennent votre parcours.
              </p>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Ressources</h3>
              <p className="text-gray-600">
                Accédez à des ressources précieuses en santé mentale, du matériel 
                éducatif et des conseils professionnels.
              </p>
            </div>

            {/* Advocacy */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Plaidoyer</h3>
              <p className="text-gray-600">
                Nous travaillons à réduire la stigmatisation et à promouvoir la 
                compréhension de la santé mentale dans la société marocaine.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-accent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Prêt à faire la différence ?
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Rejoignez notre communauté et aidez-nous à créer un changement positif 
              dans la sensibilisation à la santé mentale.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 
