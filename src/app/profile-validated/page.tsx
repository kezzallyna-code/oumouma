import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ProfileValidated() {
  return (
    <div className="screen active">
      <Navbar type="none" />
      <nav>
        <div className="nav-logo"><Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Oumouma</Link></div>
      </nav>
      <div className="success-page" style={{ background: 'linear-gradient(135deg, var(--blanc), var(--vert))' }}>
        <div className="success-card">
          <div className="success-icon">🌟</div>
          <h2>Votre profil est activé !</h2>
          <p>Félicitations ! Votre profil a été validé avec succès. Il est désormais visible sur la plateforme OUMOUMA et vous pouvez commencer à recevoir des demandes de prestations.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ background: 'var(--vert)', borderRadius: 'var(--radius-sm)', padding: '12px 20px', textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>✓</div>
              <div style={{ fontSize: '.75rem', color: '#2d7a41', fontWeight: 600 }}>Identité vérifiée</div>
            </div>
            <div style={{ background: 'var(--vert)', borderRadius: 'var(--radius-sm)', padding: '12px 20px', textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🎓</div>
              <div style={{ fontSize: '.75rem', color: '#2d7a41', fontWeight: 600 }}>Formation réussie</div>
            </div>
            <div style={{ background: 'var(--vert)', borderRadius: 'var(--radius-sm)', padding: '12px 20px', textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>💼</div>
              <div style={{ fontSize: '.75rem', color: '#2d7a41', fontWeight: 600 }}>Profil activé</div>
            </div>
          </div>
          <Link href="/dashboard/pro" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>Accéder à mon dashboard →</Link>
        </div>
      </div>
    </div>
  );
}
