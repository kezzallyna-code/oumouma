import Link from 'next/link';
import Image from 'next/image';

export default function UpcomingReservations() {
  return (
    <div className="screen active">
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-logo"><Image src="/logo.jpg" alt="Oumouma Logo" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
          <div className="sidebar-nav">
            <Link href="/dashboard/mom"><span className="icon">🏠</span> Tableau de bord</Link>
            <Link href="/search"><span className="icon">🔍</span> Réserver un service</Link>
            <Link href="/dashboard/mom/upcoming" className="active"><span className="icon">📅</span> Réservations à venir</Link>
            <Link href="/dashboard/mom/completed"><span className="icon">✅</span> Réservations terminées</Link>
            <Link href="/dashboard/mom/favorites"><span className="icon">❤️</span> Professionnelles favorites</Link>
            <Link href="/chat"><span className="icon">💬</span> Messages</Link>
            <Link href="/faq"><span className="icon">❓</span> Centre d&apos;aide</Link>
            <Link href="/" style={{ marginTop: 'auto', color: '#c0392b' }}><span className="icon">🚪</span> Se déconnecter</Link>
          </div>
        </div>
        <div className="main-content">
          <div className="welcome-bar" style={{ marginBottom: '30px' }}>
            <h2>📅 Réservations à venir</h2>
            <p>Retrouvez ici toutes vos prochaines interventions planifiées.</p>
          </div>
          
          <div className="dash-card">
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
        </div>
      </div>
    </div>
  );
}
