import Link from 'next/link';
import Image from 'next/image';

export default function FavoriteProfessionals() {
  return (
    <div className="screen active">
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Image src="/logo.jpg" alt="Oumouma Logo" width={65} height={65} style={{ objectFit: 'contain' }} /><span>Oumouma</span></div>
          <div className="sidebar-nav">
            <Link href="/dashboard/mom"><span className="icon">🏠</span> Tableau de bord</Link>
            <Link href="/search"><span className="icon">🔍</span> Réserver un service</Link>
            <Link href="/dashboard/mom/upcoming"><span className="icon">📅</span> Réservations à venir</Link>
            <Link href="/dashboard/mom/completed"><span className="icon">✅</span> Réservations terminées</Link>
            <Link href="/dashboard/mom/favorites" className="active"><span className="icon">❤️</span> Professionnelles favorites</Link>
            <Link href="/chat"><span className="icon">💬</span> Messages</Link>
            <Link href="/faq"><span className="icon">❓</span> Centre d&apos;aide</Link>
            <Link href="/" style={{ marginTop: 'auto', color: '#c0392b' }}><span className="icon">🚪</span> Se déconnecter</Link>
          </div>
        </div>
        <div className="main-content">
          <div className="welcome-bar" style={{ marginBottom: '30px' }}>
            <h2>❤️ Professionnelles favorites</h2>
            <p>Retrouvez vos professionnelles préférées pour réserver plus rapidement.</p>
          </div>
          
          <div className="dash-grid" style={{ gridTemplateColumns: '1fr', marginTop: '20px' }}>
            <div className="dash-card">
              <div className="fav-item">
                <div className="fav-avatar">👩</div>
                <div className="fav-info"><h4>Nadia Benali</h4><p>Baby-sitting · ⭐ 4.9</p></div>
                <Link href="/profile/nadia" className="btn btn-sm btn-primary" style={{textDecoration: 'none'}}>Voir profil</Link>
              </div>
              <div className="fav-item">
                <div className="fav-avatar">🤱</div>
                <div className="fav-info"><h4>Yasmina Chaoui</h4><p>Post-partum · ⭐ 5.0</p></div>
                <Link href="/profile/yasmina" className="btn btn-sm btn-primary" style={{textDecoration: 'none'}}>Voir profil</Link>
              </div>
              <div className="fav-item">
                <div className="fav-avatar">💊</div>
                <div className="fav-info"><h4>Dr. Aicha Meziane</h4><p>Santé · ⭐ 4.8</p></div>
                <Link href="/profile/aicha" className="btn btn-sm btn-primary" style={{textDecoration: 'none'}}>Voir profil</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

