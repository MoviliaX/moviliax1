export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          MoviliaX
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          "El pulso de la movilidad"
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/articulos" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Ver Artículos
          </a>
          <a 
            href="/acerca" 
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Acerca de
          </a>
        </div>
      </div>
    </main>
  )
}
