'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MessageCircle } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'El Boom de los Vehículos Eléctricos en México',
    category: 'evs',
    date: '2024-10-05',
    excerpt: 'Cómo la electromovilidad pasó de ser una promesa futurista a una realidad cotidiana en México.',
    views: 2450,
    comments: 34,
    readTime: 15,
    slug: 'boom-vehiculos-electricos'
  },
  {
    id: 2,
    title: 'Logística Digital: El Nearshoring Mexicano',
    category: 'logistica',
    date: '2024-10-03',
    excerpt: 'Análisis de cómo el nearshoring está transformando cadenas de suministro en México.',
    views: 1823,
    comments: 28,
    readTime: 12,
    slug: 'nearshoring-logistica'
  },
  {
    id: 3,
    title: '5 Startups de Movilidad que Debes Conocer',
    category: 'startups',
    date: '2024-10-01',
    excerpt: 'Las compañías emergentes liderando la transformación del sector en México.',
    views: 3200,
    comments: 67,
    readTime: 10,
    slug: 'startups-movilidad'
  },
  {
    id: 4,
    title: 'Infraestructura de Carga: El Desafío Regional',
    category: 'infraestructura',
    date: '2024-09-28',
    excerpt: 'Análisis profundo de la inversión en puntos de carga y conectividad energética.',
    views: 1654,
    comments: 22,
    readTime: 14,
    slug: 'infraestructura-carga'
  },
  {
    id: 5,
    title: 'IA en Movimiento: Gestión de Tráfico Predictiva',
    category: 'ia',
    date: '2024-09-25',
    excerpt: 'Cómo los algoritmos están revolucionando el flujo vehicular en tiempo real.',
    views: 2890,
    comments: 45,
    readTime: 11,
    slug: 'ia-trafico-predictivo'
  },
  {
    id: 6,
    title: 'Blockchain y la Tokenización del Transporte Público',
    category: 'tecnologia',
    date: '2024-09-22',
    excerpt: 'La revolución descentralizada en cómo pagamos y usamos el transporte público.',
    views: 1445,
    comments: 18,
    readTime: 13,
    slug: 'blockchain-transporte'
  }
]

export default function Articulos() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    return articles.filter(article => {
      if (category !== 'all' && article.category !== category) return false
      if (search && !article.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [search, category])

  return (
    <div className="min-h-screen bg-[#0A0F2C] pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-[#00E0FF] hover:underline mb-6 inline-block">
            ← Inicio
          </Link>
          <h1 className="text-5xl font-black text-[#00E0FF] mb-8">Artículos</h1>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-[#00E0FF]" size={20} />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-opacity-5 border border-opacity-30 rounded-lg text-white placeholder-[#7A7F8C] focus:outline-none focus:border-[#00E0FF]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(0, 224, 255, 0.3)'
                }}
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-48 px-4 py-3 bg-opacity-5 border border-opacity-30 rounded-lg text-white focus:outline-none focus:border-[#00E0FF]"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(0, 224, 255, 0.3)'
              }}
            >
              <option value="all">Todas las categorías</option>
              <option value="evs">Vehículos Eléctricos</option>
              <option value="logistica">Logística</option>
              <option value="startups">Startups</option>
              <option value="ia">IA</option>
              <option value="infraestructura">Infraestructura</option>
              <option value="tecnologia">Tecnología</option>
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <Link
              key={article.id}
              href={`/articulos/${article.slug}`}
              className="group bg-opacity-3 border border-opacity-20 rounded-2xl p-6 hover:border-[#00E0FF] hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(0, 224, 255, 0.2)'
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase"
                  style={{
                    background: 'rgba(0, 224, 255, 0.2)',
                    color: '#00E0FF'
                  }}
                >
                  {article.category}
                </span>
                <span className="text-xs text-[#7A7F8C]">{article.date}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-[#00E0FF] transition-colors">
                {article.title}
              </h3>

              <p className="text-[#7A7F8C] text-sm mb-4">{article.excerpt}</p>

              <div className="flex justify-between text-xs text-[#7A7F8C] pt-4 border-t border-opacity-10"
                style={{ borderColor: 'rgba(0, 224, 255, 0.1)' }}>
                <span>👁️ {article.views}</span>
                <span className="flex items-center gap-1"><MessageCircle size={14} /> {article.comments}</span>
                <span>⏱️ {article.readTime}m</span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#7A7F8C] text-lg">No se encontraron artículos</p>
          </div>
        )}
      </div>
    </div>
  )
}
