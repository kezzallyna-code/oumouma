'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--blanc)', padding: '48px', textAlign: 'center' }}>
      
      <div style={{ fontSize: '4rem', marginBottom: '24px', color: '#e74c3c' }}>⚠️</div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: 'var(--noir)', marginBottom: '16px' }}>
        Une erreur inattendue est survenue.
      </h1>
      
      <p style={{ color: 'var(--gris-bleu)', maxWidth: '450px', margin: '0 auto 40px', lineHeight: 1.6 }}>
        Nous sommes désolés pour ce désagrément. Notre équipe technique a été informée du problème.
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={() => reset()} className="btn btn-primary">
          Réessayer
        </button>
        <Link href="/" className="btn btn-light">
          Retour à l'accueil
        </Link>
      </div>

    </div>
  );
}
