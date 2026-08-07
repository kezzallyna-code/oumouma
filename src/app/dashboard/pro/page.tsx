import Link from 'next/link';
import Image from 'next/image';

export default function DashboardPro() {
  return (
    <div className="screen active">
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-logo"><Image src="/logo.jpg" alt="Oumouma Logo" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
          <div className="sidebar-nav">
            <Link href="/dashboard/pro" className="active"><span className="icon">🏠</span> Tableau de bord</Link>
            <Link href="#"><span className="icon">🔔</span> Nouvelles demandes <span style={{ background: 'var(--accent)', color: 'white', fontSize: '.65rem', padding: '2px 6px', borderRadius: '50px', marginLeft: 'auto' }}>3</span></Link>
            <Link href="#"><span className="icon">📅</span> Réservations acceptées</Link>
            <Link href="#"><span className="icon">🗓️</span> Calendrier</Link>
            <Link href="#"><span className="icon">💰</span> Revenus</Link>
            <Link href="#"><span className="icon">⭐</span> Avis reçus</Link>
            <Link href="/profile/nadia"><span className="icon">👤</span> Mon profil public</Link>
            <Link href="/chat"><span className="icon">💬</span> Messages</Link>
            <Link href="/" style={{ marginTop: 'auto', color: '#c0392b' }}><span className="icon">🚪</span> Se déconnecter</Link>
          </div>
        </div>
        <div className="main-content">
          <div className="welcome-bar">
            <h2>Bonjour Nadia 👋</h2>
            <p>Vous avez <strong>3 nouvelles demandes</strong> en attente de réponse</p>
          </div>
          {/* STATS */}
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-icon">💼</div><div className="stat-val">47</div><div className="stat-lbl">Missions réalisées</div></div>
            <div className="stat-card"><div className="stat-icon">📈</div><div className="stat-val">96%</div><div className="stat-lbl">Taux d&apos;acceptation</div></div>
            <div className="stat-card"><div className="stat-icon">💰</div><div className="stat-val">54 000</div><div className="stat-lbl">DZD ce mois</div></div>
            <div className="stat-card"><div className="stat-icon">⭐</div><div className="stat-val">4.9</div><div className="stat-lbl">Note moyenne</div></div>
          </div>
          <div className="dash-grid">
            <div>
              <div className="dash-card" style={{ marginBottom: '20px' }}>
                <h3>🔔 Nouvelles demandes</h3>
                <div className="demand-item">
                  <div className="demand-avatar">👩</div>
                  <div className="demand-info"><h4>Amira B. – Baby-sitting</h4><p>Vendredi 20 juin · 14h – 3h · Alger Hydra</p></div>
                  <div className="demand-actions"><button className="btn-accept">✓ Accepter</button><button className="btn-decline">✗</button></div>
                </div>
                <div className="demand-item">
                  <div className="demand-avatar">🤱</div>
                  <div className="demand-info"><h4>Sara M. – Post-partum</h4><p>Lundi 23 juin · 9h – 5h · Alger Bir Mourad Raïs</p></div>
                  <div className="demand-actions"><button className="btn-accept">✓ Accepter</button><button className="btn-decline">✗</button></div>
                </div>
                <div className="demand-item">
                  <div className="demand-avatar">👶</div>
                  <div className="demand-info"><h4>Karima T. – Baby-sitting</h4><p>Mardi 24 juin · 10h – 2h · Alger El Biar</p></div>
                  <div className="demand-actions"><button className="btn-accept">✓ Accepter</button><button className="btn-decline">✗</button></div>
                </div>
              </div>
              <div className="dash-card">
                <h3>💰 Revenus – Juin 2025</h3>
                <div className="revenue-chart">
                  <div className="chart-bars">
                    <div className="chart-bar" style={{ height: '40%' }}></div>
                    <div className="chart-bar" style={{ height: '65%' }}></div>
                    <div className="chart-bar" style={{ height: '50%' }}></div>
                    <div className="chart-bar" style={{ height: '80%' }}></div>
                    <div className="chart-bar" style={{ height: '70%' }}></div>
                    <div className="chart-bar" style={{ height: '90%' }}></div>
                    <div className="chart-bar" style={{ height: '60%', background: 'var(--bleu)' }}></div>
                  </div>
                  <div className="chart-labels">
                    <span>S1</span><span>S2</span><span>S3</span><span>S4</span><span>S5</span><span>S6</span><span>S7</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="dash-card" style={{ marginBottom: '20px' }}>
                <h3>⭐ Derniers avis</h3>
                <div className="fav-item">
                  <div className="fav-avatar">👩</div>
                  <div className="fav-info"><h4>Amira B. <span style={{ color: '#f4a523' }}>★★★★★</span></h4><p style={{ fontSize: '.78rem' }}>&quot;Nadia est extraordinaire !&quot;</p></div>
                </div>
                <div className="fav-item">
                  <div className="fav-avatar">🤱</div>
                  <div className="fav-info"><h4>Khadija M. <span style={{ color: '#f4a523' }}>★★★★★</span></h4><p style={{ fontSize: '.78rem' }}>&quot;Parfaite pour le post-partum&quot;</p></div>
                </div>
                <div className="fav-item">
                  <div className="fav-avatar">👩‍💼</div>
                  <div className="fav-info"><h4>Sara H. <span style={{ color: '#f4a523' }}>★★★★★</span></h4><p style={{ fontSize: '.78rem' }}>&quot;Très professionnelle et douce&quot;</p></div>
                </div>
              </div>
              <div className="dash-card">
                <h3>📅 Prochaine mission</h3>
                <div style={{ background: 'linear-gradient(135deg, var(--rose), var(--bleu))', borderRadius: 'var(--radius-sm)', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--noir)', fontFamily: "'Playfair Display', serif" }}>Vendredi 20 juin</div>
                  <div style={{ fontSize: '1rem', color: 'var(--gris-bleu)', margin: '6px 0' }}>14:00 – 17:00 · Baby-sitting</div>
                  <div style={{ fontSize: '.85rem', color: 'var(--gris-bleu)' }}>📍 Alger Hydra · Amira B.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
