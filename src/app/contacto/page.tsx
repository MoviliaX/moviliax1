export default function ContactoPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            ¿Tienes alguna pregunta o sugerencia?
          </p>
          <p className="text-lg font-semibold">
            Email: <a href="mailto:contactomoviliax@gmail.com" className="text-blue-600 hover:underline">
              contactomoviliax@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
