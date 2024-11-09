import PageHeader from '../components/shared/PageHeader';

function Contact() {
  return (
    <div>
      <PageHeader 
        title="Contact" 
        description="Contactez notre équipe"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">
              Informations de Contact
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                <p className="mt-2 text-gray-600">
                  123 Rue Exemple<br />
                  Casablanca, Maroc
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-2 text-gray-600">
                  contact@amup.org
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                <p className="mt-2 text-gray-600">
                  +212 5XX-XXXXXX
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Heures d'ouverture</h3>
                <p className="mt-2 text-gray-600">
                  Lundi - Vendredi: 9h00 - 17h00<br />
                  Samedi: 9h00 - 13h00<br />
                  Dimanche: Fermé
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 