import React from 'react';

const SEO: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="seo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Content Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Desarrollo de Software en Colombia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa colombiana especializada en desarrollo de aplicaciones móviles, 
            web y soluciones de inteligencia artificial para empresas de todos los tamaños.
          </p>
        </div>

        {/* SEO Rich Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Desarrollo de Aplicaciones Móviles
            </h3>
            <p className="text-gray-600">
              Creamos aplicaciones móviles nativas e híbridas para iOS y Android 
              utilizando las últimas tecnologías como Flutter, React Native y desarrollo nativo.
            </p>
            <ul className="mt-4 text-sm text-gray-500">
              <li>• Flutter Development</li>
              <li>• React Native</li>
              <li>• iOS & Android Nativo</li>
              <li>• Progressive Web Apps (PWA)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Desarrollo Web Profesional
            </h3>
            <p className="text-gray-600">
              Desarrollamos sitios web y aplicaciones web modernas, responsivas y optimizadas 
              para SEO utilizando tecnologías como React, Angular, Vue.js y Node.js.
            </p>
            <ul className="mt-4 text-sm text-gray-500">
              <li>• React & Next.js</li>
              <li>• Angular & Vue.js</li>
              <li>• Node.js & Express</li>
              <li>• E-commerce Solutions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Inteligencia Artificial y Machine Learning
            </h3>
            <p className="text-gray-600">
              Implementamos soluciones de IA personalizadas, chatbots inteligentes, 
              análisis de datos y automatización de procesos empresariales.
            </p>
            <ul className="mt-4 text-sm text-gray-500">
              <li>• Chatbots con IA</li>
              <li>• Análisis Predictivo</li>
              <li>• Procesamiento de Lenguaje Natural</li>
              <li>• Automatización de Procesos</li>
            </ul>
          </div>
        </div>

        {/* Location and Contact SEO */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Empresa de Software en Colombia
              </h3>
              <p className="text-gray-600 mb-4">
                Modware es una empresa colombiana de desarrollo de software con sede en Colombia, 
                especializada en crear soluciones tecnológicas innovadoras para empresas locales e internacionales.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Ubicación:</strong> Colombia</p>
                <p><strong>Especialidad:</strong> Desarrollo de Software Personalizado</p>
                <p><strong>Industrias:</strong> Fintech, E-commerce, Salud, Educación, Logística</p>
                <p><strong>Tecnologías:</strong> Flutter, React, Node.js, Python, AWS, Firebase</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                ¿Por qué elegir Modware?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  Más de 6 años de experiencia en desarrollo de software
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  Equipo de desarrolladores certificados y especializados
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  Metodologías ágiles y entrega garantizada
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  Soporte técnico 24/7 y mantenimiento continuo
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  Precios competitivos y transparentes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Modware",
              "description": "Empresa colombiana de desarrollo de software especializada en aplicaciones móviles, web y soluciones de inteligencia artificial.",
              "url": "https://modware.co",
              "logo": "https://modware.co/android-chrome-512x512.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+57-300-123-4567",
                "contactType": "customer service",
                "availableLanguage": ["Spanish", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CO",
                "addressLocality": "Colombia"
              },
              "sameAs": [
                "https://linkedin.com/company/modware",
                "https://github.com/modware"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Servicios de desarrollo de software personalizado",
                "category": "Software Development"
              }
            })
          }}
        />
      </div>
    </section>
  );
};

export default SEO;