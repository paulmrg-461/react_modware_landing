import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Star, Shield, Zap, TrendingUp, Globe, ShoppingBag, Users, FileText, Lock } from 'lucide-react';

const ProposalElBodegazo: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nitInput, setNitInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Correct NIT for El Bodegazo without verification digit
    if (nitInput === '1061021703') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('NIT incorrecto. Por favor verifique e intente nuevamente.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col relative">
        <div className="absolute inset-0 bg-primary-900/10 z-0"></div>
        <Header />
        <main className="flex-grow flex items-center justify-center px-4 relative z-10 pt-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-100 p-4 rounded-full">
                <Lock className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Acceso Protegido
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Ingrese el NIT para ver la propuesta
            </p>
            
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label htmlFor="nit" className="block text-sm font-medium text-gray-700 mb-1">
                  NIT (Sin dígito de verificación)
                </label>
                <input
                  type="text"
                  id="nit"
                  value={nitInput}
                  onChange={(e) => setNitInput(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Ingrese NIT sin dígito de verificación"
                  required
                />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full btn-primary py-3 flex items-center justify-center gap-2"
              >
                Verificar
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Proposal Header */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white pt-32 pb-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Propuesta de Transformación Digital
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 mb-8">
              Para El Bodegazot
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base opacity-90">
              <div>
                <strong>Cliente:</strong> Idaly Bolaños Gómez
              </div>
              <div>
                <strong>Ubicación:</strong> Mercaderes, Cauca
              </div>
              <div>
                <strong>NIT:</strong> 1061021703-2
              </div>
              <div>
                <strong>Validez:</strong> Hasta el 31 de Diciembre, 2025
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom py-12 space-y-16">
          {/* Section 1: Who we are */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary-600" />
              1. ¿Quiénes Somos?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Modware</strong> es una empresa colombiana con sede en Popayán, líder en desarrollo de software y soluciones de Inteligencia Artificial. Con más de <strong>6 años de experiencia</strong> y <strong>50+ proyectos entregados</strong>, nos especializamos en ayudar a negocios como <strong>El Bodegazot</strong> a dar el salto a la era digital.
            </p>
            <p className="text-gray-600 leading-relaxed">
              No solo entregamos software; creamos ecosistemas digitales que optimizan procesos, reducen costos y aumentan ventas. Nuestro equipo de expertos está comprometido con el crecimiento de su empresa.
            </p>
          </section>

          {/* Section 2: Solution */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-primary-600" />
              2. Nuestra Solución: Control Total y Soberanía
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A diferencia de otros servicios que alquilan el software mensualmente, nosotros implementamos una solución <strong>Self-Hosted (Alojamiento Propio)</strong>. Esto significa que usted es el dueño de sus datos y no depende de licencias costosas por usuario.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Gestión Comercial (POS)</h3>
                <p className="text-sm text-gray-600">Facturación rápida y sin interrupciones.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <ShoppingBag className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Inventario Unificado</h3>
                <p className="text-sm text-gray-600">Lo que se vende en caja se descuenta automáticamente del sistema.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Globe className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Presencia Digital</h3>
                <p className="text-sm text-gray-600">Desde una página web informativa hasta una tienda virtual completa con IA.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Plans */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              3. Planes de Suscripción Anual (2025)
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-6 bg-gray-50 text-center border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900">PLAN STARTER</h3>
                  <p className="text-sm text-gray-500 mb-4">(Control Esencial)</p>
                  <div className="text-3xl font-bold text-primary-600">$269.000 COP</div>
                  <div className="text-xs text-gray-500">Precio Anual</div>
                </div>
                <div className="p-6 flex-grow space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Punto de Venta (POS)</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Facturación POS</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Inventario y Bodega</li>
                    <li className="flex items-center text-sm text-gray-400"><span className="w-4 h-4 mr-2 block">❌</span> CRM</li>
                    <li className="flex items-center text-sm text-gray-400"><span className="w-4 h-4 mr-2 block">❌</span> Gestión de Empleados</li>
                    <li className="flex items-center text-sm text-gray-400"><span className="w-4 h-4 mr-2 block">❌</span> Control de Gastos</li>
                    <li className="flex items-center text-sm text-gray-400"><span className="w-4 h-4 mr-2 block">❌</span> Sitio Web</li>
                    <li className="flex items-center text-sm text-gray-400"><span className="w-4 h-4 mr-2 block">❌</span> Tienda Virtual</li>
                  </ul>
                </div>
              </div>

              {/* Plus Plan */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary-500 transform scale-105 relative flex flex-col">
                <div className="absolute top-0 inset-x-0 bg-primary-500 text-white text-xs font-bold text-center py-1">
                  RECOMENDADO
                </div>
                <div className="p-6 bg-gray-50 text-center border-b border-gray-100 mt-4">
                  <h3 className="text-xl font-bold text-gray-900">PLAN PLUS</h3>
                  <p className="text-sm text-gray-500 mb-4">(Crecimiento Organizado)</p>
                  <div className="text-3xl font-bold text-primary-600">$346.000 COP</div>
                  <div className="text-xs text-gray-500">Precio Anual</div>
                </div>
                <div className="p-6 flex-grow space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Punto de Venta (POS)</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Facturación POS</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Inventario y Bodega</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> CRM (Gestión de Clientes)</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Gestión de Empleados</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Control de Gastos</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-500 mr-2" /> Sitio Web Corporativo</li>
                    <li className="flex items-center text-sm text-gray-400"><span className="w-4 h-4 mr-2 block">❌</span> Tienda Virtual</li>
                  </ul>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="p-6 text-center border-b border-gray-700">
                  <h3 className="text-xl font-bold text-white flex justify-center items-center gap-2">
                    PLAN PREMIUM <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">(Inteligencia y Expansión)</p>
                  <div className="text-3xl font-bold text-yellow-400">$497.000 COP</div>
                  <div className="text-xs text-gray-400">Precio Anual</div>
                </div>
                <div className="p-6 flex-grow space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-400 mr-2" /> Todo lo del Plan Plus</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-400 mr-2" /> Tienda Virtual (eCommerce)</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-400 mr-2" /> Gestión de Proyectos</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-green-400 mr-2" /> IA (Asistente Integrado)</li>
                    <li className="flex items-center text-sm text-yellow-400 mt-4 font-semibold">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Venda mientras duerme
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-4">Condiciones del Servicio:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-blue-800">
                <li><strong>Equipos Incluidos:</strong> El valor del plan cubre la configuración para 1 Computador Principal (Servidor/Caja).</li>
                <li><strong>Equipos Adicionales:</strong> Cada computador o terminal extra tiene un costo único de $70.000 COP.</li>
                <li><strong>Renovación:</strong> El precio se congela por el primer año de servicio.</li>
                <li><strong>Infraestructura:</strong> Self-Hosted (VPS) - Control total de sus datos.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Legal Requirements */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary-600" />
              4. Requisitos Legales (Facturación Electrónica)
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">Para activar la facturación electrónica (disponible como adicional), se requiere:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>RUT Actualizado:</strong> Responsabilidad 52.</li>
                <li><strong>Certificado Digital:</strong> Firma electrónica vigente (asesoramos su compra).</li>
                <li><strong>Registro en la DIAN:</strong> Nosotros realizamos la habilitación técnica.</li>
              </ol>
            </div>
          </section>

          {/* Section 5: Why Premium */}
          <section className="bg-gradient-to-r from-gray-900 to-primary-900 rounded-2xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6">5. ¿Por qué elegir el Plan Premium?</h2>
            <p className="mb-6 text-lg">El Plan Premium ($497.000) no es solo un software, es un empleado digital extra:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <ShoppingBag className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="font-bold mb-2">Venda 24/7</h3>
                <p className="text-sm text-gray-300">Su tienda virtual recibe pedidos mientras usted descansa.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="font-bold mb-2">IA a su servicio</h3>
                <p className="text-sm text-gray-300">Redacte correos, descripciones y analice ventas automáticamente.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <TrendingUp className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="font-bold mb-2">Gestión de Proyectos</h3>
                <p className="text-sm text-gray-300">Control total sobre remodelaciones y tareas administrativas.</p>
              </div>
            </div>
          </section>

          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-xl font-bold text-gray-900 mb-2">¿Listo para transformar El Bodegazot?</p>
            <p className="text-gray-600 mb-8">En Modware, no solo le vendemos un sistema, nos convertimos en su socio tecnológico.</p>
            <a 
              href="https://wa.me/573107254077?text=Hola%20Modware,%20quiero%20aceptar%20la%20propuesta%20para%20El%20Bodegazo"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              Aceptar Propuesta por WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProposalElBodegazo;
