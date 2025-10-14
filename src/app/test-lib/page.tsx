import { 
  slugify, 
  formatDate, 
  isValidEmail,
  SITE_CONFIG 
} from '@/lib';

export default function TestPage() {
  const slug = slugify("Hola Mundo");
  const date = formatDate(new Date());
  const valid = isValidEmail("test@email.com");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test de Utilidades</h1>
      
      <div className="space-y-2">
        <p>Slug: {slug}</p>
        <p>Fecha: {date}</p>
        <p>Email válido: {valid ? 'Sí' : 'No'}</p>
        <p>Site: {SITE_CONFIG.name}</p>
      </div>
    </div>
  );
}
