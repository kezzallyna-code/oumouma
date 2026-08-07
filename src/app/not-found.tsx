import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, var(--blanc), var(--beige))', padding: '48px', textAlign: 'center' }}>
      
      <div style={{ fontSize: '6rem', marginBottom: '16px' }}>🍼</div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'var(--noir)', marginBottom: '16px' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', color: 'var(--text)', marginBottom: '24px', fontWeight: 600 }}>Oups, cette page est introuvable.</h2>
      
      <p style={{ color: 'var(--gris-bleu)', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.6 }}>
        Il semble que le lien que vous avez suivi soit cassé ou que la page ait été supprimée. Ne vous inquiétez pas, cela arrive aux meilleurs.
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
        <Link href="/search" className="btn btn-secondary">
          Rechercher un professionnel
        </Link>
      </div>

    </div>
  );
}
