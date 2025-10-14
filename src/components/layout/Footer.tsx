// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y Descripción */}
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm">
              Plataforma de conocimiento sobre movilidad y logística digital en América Latina
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com/moviliax" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/moviliax" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Contenido */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contenido</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/posts" className="hover:text-white transition">Artículos</Link></li>
              <li><Link href="/categorias/movilidad-urbana" className="hover:text-white transition">Movilidad Urbana</Link></li>
              <li><Link href="/categorias/logistica" className="hover:text-white transition">Logística</Link></li>
              <li><Link href="/categorias/tecnologia" className="hover:text-white transition">Tecnología</Link></li>
              <li><Link href="/autores" className="hover:text-white transition">Autores</Link></li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guias" className="hover:text-white transition">Guías</Link></li>
              <li><Link href="/casos-estudio" className="hover:text-white transition">Casos de Estudio</Link></li>
              <li><Link href="/glosario" className="hover:text-white transition">Glosario</Link></li>
              <li><Link href="/newsletter" className="hover:text-white transition">Newsletter</Link></li>
            </ul>
          </div>

          {/* Columna 4: Nosotros */}
          <div>
            <h3 className="text-white font-semibold mb-4">MoviliaX</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">Acerca de</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
              <li><Link href="/contribuir" className="hover:text-white transition">Contribuir</Link></li>
              <li><Link href="/terminos" className="hover:text-white transition">Términos de Uso</Link></li>
              <li><Link href="/privacidad" className="hover:text-white transition">Privacidad</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} MoviliaX. Licencia MIT. Contenido editorial bajo licencia Creative Commons BY-NC-SA 4.0</p>
        </div>
      </div>
    </footer>
  );
};
