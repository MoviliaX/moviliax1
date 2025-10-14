// src/components/features/Newsletter.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Input } from '../ui/Input';
import { Card } from '../common/Card';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Aquí implementarías la lógica de suscripción a newsletter
      // Por ahora, simulamos una respuesta exitosa
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('¡Te has suscrito exitosamente! Revisa tu correo.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Hubo un error. Por favor intenta de nuevo.');
    }
  };

  return (
    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">📧 Suscríbete a nuestro Newsletter</h3>
        <p className="text-blue-100">
          Recibe las últimas noticias sobre movilidad y logística directamente en tu correo
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            className="flex-1 bg-white"
            disabled={status === 'loading'}
          />
          <Button
            type="submit"
            variant="secondary"
            disabled={status === 'loading'}
            className="sm:w-auto bg-white text-blue-600 hover:bg-gray-100"
          >
            {status === 'loading' ? 'Suscribiendo...' : 'Suscribirse'}
          </Button>
        </div>

        {status === 'success' && (
          <p className="text-sm text-green-200 text-center">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-200 text-center">{message}</p>
        )}
      </form>

      <p className="text-xs text-blue-100 text-center mt-4">
        No compartiremos tu correo. Puedes darte de baja en cualquier momento.
      </p>
    </Card>
  );
};
