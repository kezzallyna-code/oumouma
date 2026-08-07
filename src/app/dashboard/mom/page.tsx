import Link from 'next/link';
import Image from 'next/image';

export default function DashboardMom() {
  return (
    <div className="screen active">
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Image src="/logo.jpg" alt="Oumouma Logo" width={65} height={65} style={{ objectFit: 'contain' }} /><span>Oumouma</span></div>
          <div className="sidebar-nav">
            <Link href="/dashboard/mom" className="active"><span className="icon">🏠</span> Tableau de bord</Link>
            <Link href="/search"><span className="icon">🔍</span> Réserver un service</Link>
            <Link href="/dashboard/mom/upcoming"><span className="icon">📅</span> Réservations à venir</Link>
            <Link href="/dashboard/mom/completed"><span className="icon">✅</span> Réservations terminées</Link>
            <Link href="/dashboard/mom/favorites"><span className="icon">❤️</span> Professionnelles favorites</Link>
            <Link href="/chat"><span className="icon">💬</span> Messages</Link>
            <Link href="/faq"><span className="icon">❓</span> Centre d&apos;aide</Link>
            <Link href="/" style={{ marginTop: 'auto', color: '#c0392b' }}><span className="icon">🚪</span> Se déconnecter</Link>
          </div>
        </div>
        <div className="main-content">
          <div className="welcome-bar">
            <h2>Bonjour Sarah 👋</h2>
            <p>Bienvenue sur votre espace OUMOUMA. Comment puis-je vous aider aujourd&apos;hui ?</p>
            <Link href="/search" className="btn btn-primary btn-sm" style={{ marginTop: '20px', display: 'inline-flex', textDecoration: 'none' }}>Trouver une professionnelle</Link>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-icon">📅</div><div className="stat-val">3</div><div className="stat-lbl">Réservations à venir</div></div>
            <div className="stat-card"><div className="stat-icon">✅</div><div className="stat-val">12</div><div className="stat-lbl">Missions terminées</div></div>
            <div className="stat-card"><div className="stat-icon">❤️</div><div className="stat-val">5</div><div className="stat-lbl">Favorites</div></div>
            <div className="stat-card"><div className="stat-icon">💬</div><div className="stat-val">2</div><div className="stat-lbl">Messages non lus</div></div>
          </div>
          <div className="dash-grid">
            <div className="dash-card">
              <h3>📅 Réservations à venir</h3>
              <div className="reservation-item">
                <div className="res-avatar">👩</div>
                <div className="res-info"><h4>Nadia Benali – Baby-sitting</h4><p>Dimanche 22 juin · 14h00 – 19h00</p></div>
                <span className="res-status status-confirmed">Confirmée</span>
              </div>
              <div className="reservation-item">
                <div className="res-avatar">👩‍⚕️</div>
                <div className="res-info"><h4>Farida Hamid – Post-partum</h4><p>Lundi 23 juin · 9h00 – 12h00</p></div>
                <span className="res-status status-confirmed">Confirmée</span>
              </div>
              <div className="reservation-item">
                <div className="res-avatar">👩‍🔬</div>
                <div className="res-info"><h4>Dr. Aicha Meziane – Consultation</h4><p>Mercredi 25 juin · 10h30</p></div>
                <span className="res-status status-pending">En attente</span>
              </div>
            </div>
            <div className="dash-card">
              <h3>❤️ Professionnelles favorites</h3>
              <div className="fav-item">
                <div className="fav-avatar">👩</div>
                <div className="fav-info"><h4>Nadia Benali</h4><p>Baby-sitting · ⭐ 4.9</p></div>
                <Link href="/profile/nadia" className="btn btn-sm btn-primary" style={{textDecoration: 'none'}}>Voir</Link>
              </div>
              <div className="fav-item">
                <div className="fav-avatar">🤱</div>
                <div className="fav-info"><h4>Yasmina Chaoui</h4><p>Post-partum · ⭐ 5.0</p></div>
                <Link href="/profile/yasmina" className="btn btn-sm btn-primary" style={{textDecoration: 'none'}}>Voir</Link>
              </div>
              <div className="fav-item">
                <div className="fav-avatar">💊</div>
                <div className="fav-info"><h4>Dr. Aicha Meziane</h4><p>Santé · ⭐ 4.8</p></div>
                <Link href="/profile/aicha" className="btn btn-sm btn-primary" style={{textDecoration: 'none'}}>Voir</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

