```tsx
'use client';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0F2C] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#0A0F2C]/95 backdrop-blur-sm z-50 border-b border-cyan-400/10">
        <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-wider">
            MOVILIA<span className="text-[#00E0FF]">X</span>
          </div>
          <ul className="flex gap-10">
            <li><a href="#articulos" className="hover:text-[#00E0FF] transition">Artículos</a></li>
            <li><a href="#podcast" className="hover:text-[#00E0FF] transition">Podcast</a></li>
            <li><a href="#comunidad" className="hover:text-[#00E0FF] transition">Comunidad</a></li>
            <li><a href="#newsletter" className="hover:text-[#00E0FF] transition">Newsletter</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F2C] via-[#1a1f4a] to-[#0A0F2C]" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#00E0FF] bg-clip-text text-transparent">
            MOVILIA<span className="text-[#00E0FF]">X</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-6">
            Explora la nueva experiencia de moverte
          </p>
          <p className="text-lg text-gray-500 mb-10">
            El futuro de la movilidad digital, las ciudades inteligentes y la tecnología aplicada al transporte en América Latina
          </p>
          <a 
            href="#articulos" 
            className="inline-block px-12 py-4 bg-gradient-to-r from-[#00E0FF] to-[#0099cc] text-[#0A0F2C] font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition"
          >
            Descubre Más
          </a>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articulos" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Destacado del Mes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔋",
              tag: "Reportaje Especial",
              title: "El Estado de la Movilidad Eléctrica en América Latina 2025",
              excerpt: "Un análisis profundo de cómo la electromovilidad está transformando el panorama del transporte en la región.",
            },
            {
              icon: "🤖",
              tag: "IA en Movimiento",
              title: "Gestión de Tráfico Predictiva: El Algoritmo que Anticipa el Caos",
              excerpt: "Descubre cómo la IA revoluciona la gestión del flujo vehicular en tiempo real.",
            },
            {
              icon: "🏙️",
              tag: "Ciudades del Futuro",
              title: "5 Ciudades LATAM que Están Redefiniendo la Movilidad Urbana",
              excerpt: "Medellín, Santiago, São Paulo, Ciudad de México y Montevideo lideran la transformación.",
            },
          ].map((article, i) => (
            <article key={i} className="bg-[#1a1f4a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition border border-cyan-400/10">
              <div className="text-6xl p-8 text-center">{article.icon}</div>
              <div className="p-6">
                <span className="text-[#00E0FF] text-sm font-semibold">{article.tag}</span>
                <h3 className="text-xl font-bold my-3">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <a href="#" className="text-[#00E0FF] font-semibold hover:underline">
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#1a1f4a]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2M+", label: "Vehículos EV en LATAM" },
              { number: "47%", label: "Crecimiento Anual" },
              { number: "15", label: "Ciudades Inteligentes" },
              { number: "$8.2B", label: "Inversión en Tech Mobility" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-[#00E0FF] mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          RADAR<span className="text-[#00E0FF]">X</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Tu dosis semanal de innovación en movilidad. Tendencias, datos exclusivos y lo que está transformando el movimiento en América Latina.
        </p>
        <form className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-6 py-3 rounded-full bg-[#1a1f4a] border border-cyan-400/20 focus:border-cyan-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-[#00E0FF] to-[#0099cc] text-[#0A0F2C] font-bold rounded-full hover:shadow-lg transition"
          >
            Suscribirse
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f4a]/30 border-t border-cyan-400/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                MOVILIA<span className="text-[#00E0FF]">X</span>
              </h3>
              <p className="text-gray-400 text-sm">
                El punto de conexión entre la movilidad humana y la inteligencia tecnológica.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contenido</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00E0FF]">Reportajes Especiales</a></li>
                <li><a href="#" className="hover:text-[#00E0FF]">Series Temáticas</a></li>
                <li><a href="#" className="hover:text-[#00E0FF]">Entrevistas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Comunidad</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00E0FF]">MOVILIAX Connect</a></li>
                <li><a href="#" className="hover:text-[#00E0FF]">Eventos</a></li>
                <li><a href="#" className="hover:text-[#00E0FF]">Colaboradores</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00E0FF]">Glosario Tech</a></li>
                <li><a href="#" className="hover:text-[#00E0FF]">Estudios e Informes</a></li>
                <li><a href="#" className="hover:text-[#00E0FF]">Media Kit</a></li>
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
```
