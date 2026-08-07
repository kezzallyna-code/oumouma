import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function FormationSuccess() {
  return (
    <div className="screen active">
      <Navbar type="none" />
      <nav>
        <div className="nav-logo"><Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Oumouma</Link></div>
      </nav>
      <div className="success-page">
        <div className="success-card">
          <div className="success-icon">🎉</div>
          <h2>Formation réussie !</h2>
          <p>Félicitations ! Vous avez complété avec succès la formation OUMOUMA. Votre dossier est en cours de validation par notre équipe (24-48h).</p>
          <div style={{ background: 'var(--vert)', borderRadius: 'var(--radius-sm)', padding: '16px', marginBottom: '24px', textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}><span>✅</span><span style={{ fontSize: '.85rem', color: '#2d7a41', fontWeight: 600 }}>Formation OUMOUMA validée</span></div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}><span>⏳</span><span style={{ fontSize: '.85rem', color: '#2d7a41' }}>Vérification des documents (24-48h)</span></div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><span>🔓</span><span style={{ fontSize: '.85rem', color: '#2d7a41' }}>Activation du profil</span></div>
          </div>
          <Link href="/profile-validated" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>Accéder à mon espace →</Link>
        </div>
      </div>
    </div>
  );
}
