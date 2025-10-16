'use client';

import { FormEvent } from 'react';

export default function HomePage() {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // TODO: Integrar con API de newsletter (ConvertKit/Mailchimp)
    console.log('Newsletter signup:', email);
    alert(`¡Gracias por suscribirte a RADARX! Confirma tu correo: ${email}`);
    e.currentTarget.reset();
  };

  return (
    <main className="min-h-screen bg-[#0A0F2C] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#0A0F2C]/95 backdrop-blur-sm z-50 border-b border-cyan-400/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="text-2xl sm:text-3xl font-bold tracking-wider font-['Exo_2']">
            MOVILIA<span className="text-[#00E0FF]">X</span>
          </div>
          <ul className="hidden md:flex gap-6 lg:gap-10">
            <li>
              <a 
                href="#articulos" 
                className="hover:text-[#00E0FF] transition-colors duration-300"
              >
                Artículos
              </a>
            </li>
            <li>
              <a 
                href="#podcast" 
                className="hover:text-[#00E0FF] transition-colors duration-300"
              >
                Podcast
              </a>
            </li>
            <li>
              <a 
                href="#comunidad" 
                className="hover:text-[#00E0FF] transition-colors duration-300"
              >
                Comunidad
              </a>
            </li>
            <li>
              <a 
                href="#newsletter" 
                className="hover:text-[#00E0FF] transition-colors duration-300"
              >
                Newsletter
              </a>
            </li>
          </ul>
          {/* Mobile menu button - TODO: Implement mobile menu */}
          <button 
            className="md:hidden text-2xl text-[#00E0FF]"
            aria-label="Abrir menú"
            onClick={() => console.log('TODO: Implement mobile menu')}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F2C] via-[#1a1f4a] to-[#0A0F2C]" />
        
        {/* Animated Grid Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 224, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 224, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#00E0FF] bg-clip-text text-transparent font-['Exo_2']">
            MOVILIA<span className="text-[#00E0FF]">X</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-6">
            Explora la nueva experiencia de moverte
          </p>
          <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            El futuro de la movilidad digital, las ciudades inteligentes y la tecnología aplicada al transporte en América Latina
          </p>
          <a 
            href="#articulos" 
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#00E0FF] to-[#0099cc] text-[#0A0F2C] font-bold rounded-full hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Descubre Más
          </a>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articulos" className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 font-['Exo_2']">
          Destacado del Mes
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: "🔋",
              tag: "Reportaje Especial",
              title: "El Estado de la Movilidad Eléctrica en América Latina 2025",
              excerpt: "Un análisis profundo de cómo la electromovilidad está transformando el panorama del transporte en la región, con datos exclusivos de inversión y adopción por país.",
            },
            {
              icon: "🤖",
              tag: "IA en Movimiento",
              title: "Gestión de Tráfico Predictiva: El Algoritmo que Anticipa el Caos",
              excerpt: "Descubre cómo la inteligencia artificial está revolucionando la manera en que las ciudades gestionan el flujo vehicular en tiempo real.",
            },
            {
              icon: "🏙️",
              tag: "Ciudades del Futuro",
              title: "5 Ciudades LATAM que Están Redefiniendo la Movilidad Urbana",
              excerpt: "Medellín, Santiago, São Paulo, Ciudad de México y Montevideo lideran la transformación hacia ciudades más inteligentes y conectadas.",
            },
          ].map((article, i) => (
            <article 
              key={i} 
              className="bg-[#1a1f4a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-cyan-400/10 hover:border-cyan-400/30"
            >
              <div className="text-6xl p-8 text-center bg-gradient-to-br from-[#1a1f4a] to-[#0A0F2C]">
                {article.icon}
              </div>
              <div className="p-6">
                <span className="text-[#00E0FF] text-xs font-semibold uppercase tracking-wider">
                  {article.tag}
                </span>
                <h3 className="text-xl font-bold my-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                <a 
                  href="#" 
                  className="text-[#00E0FF] font-semibold hover:underline inline-flex items-center gap-2 group"
                >
                  Leer más 
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 bg-[#1a1f4a]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "2M+", label: "Vehículos EV en LATAM" },
              { number: "47%", label: "Crecimiento Anual" },
              { number: "15", label: "Ciudades Inteligentes" },
              { number: "$8.2B", label: "Inversión en Tech Mobility" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-4xl sm:text-5xl font-bold text-[#00E0FF] mb-2 font-['Exo_2']">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-12 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-['Exo_2']">
          RADAR<span className="text-[#00E0FF]">X</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Tu dosis semanal de innovación en movilidad. Tendencias, datos exclusivos y lo que está transformando el movimiento en América Latina.
        </p>
        <form 
          onSubmit={handleNewsletterSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            className="flex-1 px-6 py-3 rounded-full bg-[#1a1f4a] border border-cyan-400/20 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-500 transition-all"
            required
            aria-label="Correo electrónico para newsletter"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-[#00E0FF] to-[#0099cc] text-[#0A0F2C] font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Suscribirse
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f4a]/30 border-t border-cyan-400/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-4 font-['Exo_2']">
                MOVILIA<span className="text-[#00E0FF]">X</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                El punto de conexión entre la movilidad humana y la inteligencia tecnológica.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contenido</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a 
                    href="/reportajes" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Reportajes Especiales
                  </a>
                </li>
                <li>
                  <a 
                    href="/series" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Series Temáticas
                  </a>
                </li>
                <li>
                  <a 
                    href="/entrevistas" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Entrevistas
                  </a>
                </li>
                <li>
                  <a 
                    href="/podcast" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Podcast
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Comunidad</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a 
                    href="/comunidad" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    MOVILIAX Connect
                  </a>
                </li>
                <li>
                  <a 
                    href="/eventos" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Eventos
                  </a>
                </li>
                <li>
                  <a 
                    href="/colaboradores" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Colaboradores
                  </a>
                </li>
                <li>
                  <a 
                    href="/partners" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a 
                    href="/glosario" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Glosario Tech
                  </a>
                </li>
                <li>
                  <a 
                    href="/estudios" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Estudios e Informes
                  </a>
                </li>
                <li>
                  <a 
                    href="/startups" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Guía de Startups
                  </a>
                </li>
                <li>
                  <a 
                    href="/media-kit" 
                    className="hover:text-[#00E0FF] transition-colors"
                  >
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-cyan-400/10">
            <p>© 2025 MOVILIAX. El futuro de la movilidad está en movimiento.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
