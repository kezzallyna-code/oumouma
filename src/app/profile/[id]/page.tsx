import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Profile() {
  return (
    <div className="screen active">
      <Navbar type="back" backLink="/search" backText="← Retour aux résultats" />
      <div className="profile-page">
        <div className="profile-hero">
          <div className="profile-avatar">👩</div>
          <div className="profile-info">
            <h1>Nadia Benali</h1>
            <div className="profile-verified">✓ Professionnelle vérifiée par OUMOUMA</div>
            <div className="stars" style={{ fontSize: '1rem', marginBottom: '8px' }}>★★★★★ <span style={{ fontSize: '.9rem', color: 'var(--gris-bleu)' }}>4.9 (47 avis)</span></div>
            <div className="profile-meta">
              <div className="profile-meta-item">📍 Alger, Bab El Oued</div>
              <div className="profile-meta-item">💼 5 ans d&apos;expérience</div>
              <div className="profile-meta-item">🗣️ Arabe · Français</div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Link href="/booking" className="btn btn-primary btn-lg" style={{ textDecoration: 'none' }}>📅 Réserver maintenant</Link>
              <Link href="/chat" className="btn btn-secondary btn-sm" style={{ textDecoration: 'none' }}>💬 Envoyer un message</Link>
              <span style={{ color: '#f4a523', fontSize: '1.2rem', cursor: 'pointer' }}>♡</span>
            </div>
          </div>
        </div>
        <div className="profile-grid">
          <div>
            <div className="profile-card">
              <h3>À propos de Nadia</h3>
              <p>Passionnée par la petite enfance depuis toujours, je propose des services de baby-sitting et d&apos;accompagnement post-partum avec douceur et professionnalisme. Formée en psychologie de l&apos;enfant et en secourisme pédiatrique, je prends soin de chaque enfant comme si c&apos;était le mien.</p>
            </div>
            <div className="profile-card">
              <h3>Services proposés</h3>
              <span className="service-pill">👶 Baby-sitting à domicile</span>
              <span className="service-pill">🤱 Soutien post-partum</span>
              <span className="service-pill">🌙 Garde de nuit</span>
              <span className="service-pill">🏫 Aide aux devoirs</span>
            </div>
            <div className="profile-card">
              <h3>Formations & Expérience</h3>
              <p>• Licence en Psychologie de l&apos;Enfant – Université d&apos;Alger (2018)<br />• Formation Secourisme Pédiatrique – Croix Rouge (2020)<br />• Formation OUMOUMA certifiée (2023)<br />• 5 ans d&apos;expérience auprès de familles algériennes</p>
            </div>
            <div className="profile-card">
              <h3>Avis des mamans</h3>
              <div className="reservation-item">
                <div className="res-avatar">👩</div>
                <div className="res-info"><h4>Amira B. <span style={{ color: '#f4a523' }}>★★★★★</span></h4><p style={{ fontSize: '.83rem' }}>&quot;Nadia est extraordinaire ! Mes enfants demandent toujours à la revoir. Très professionnel et bienveillante.&quot;</p></div>
              </div>
              <div className="reservation-item">
                <div className="res-avatar">🤱</div>
                <div className="res-info"><h4>Khadija M. <span style={{ color: '#f4a523' }}>★★★★★</span></h4><p style={{ fontSize: '.83rem' }}>&quot;Parfaite pour le soutien post-partum. Elle m&apos;a vraiment aidée pendant les premières semaines difficiles.&quot;</p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="profile-card">
              <h3>Documents vérifiés</h3>
              <div className="doc-check"><span className="check">✅</span><span>Identité validée</span></div>
              <div className="doc-check"><span className="check">✅</span><span>Casier judiciaire validé</span></div>
              <div className="doc-check"><span className="check">✅</span><span>Entretien OUMOUMA réalisé</span></div>
              <div className="doc-check"><span className="check">✅</span><span>Formation OUMOUMA réussie</span></div>
              <div className="doc-check"><span className="check">✅</span><span>Diplômes vérifiés</span></div>
            </div>
            <div className="profile-card">
              <h3>Zone géographique</h3>
              <p>📍 Alger (Bab El Oued, El Biar, Hydra, Bir Mourad Raïs) · Rayon : 15 km</p>
            </div>
            <div className="profile-card">
              <h3>Disponibilités – Juin 2025</h3>
              <div className="calendar-grid">
                <div className="cal-day header">L</div><div className="cal-day header">M</div><div className="cal-day header">M</div><div className="cal-day header">J</div><div className="cal-day header">V</div><div className="cal-day header">S</div><div className="cal-day header">D</div>
                <div className="cal-day"></div><div className="cal-day"></div><div className="cal-day"></div><div className="cal-day available">5</div><div className="cal-day available">6</div><div className="cal-day unavailable">7</div><div className="cal-day unavailable">8</div>
                <div className="cal-day available">9</div><div className="cal-day available">10</div><div className="cal-day unavailable">11</div><div className="cal-day available">12</div><div className="cal-day today">13</div><div className="cal-day unavailable">14</div><div className="cal-day unavailable">15</div>
                <div className="cal-day available">16</div><div className="cal-day available">17</div><div className="cal-day available">18</div><div className="cal-day unavailable">19</div><div className="cal-day available">20</div><div className="cal-day unavailable">21</div><div className="cal-day unavailable">22</div>
                <div className="cal-day available">23</div><div className="cal-day available">24</div><div className="cal-day available">25</div><div className="cal-day available">26</div><div className="cal-day available">27</div><div className="cal-day unavailable">28</div><div className="cal-day unavailable">29</div>
                <div className="cal-day available">30</div>
              </div>
              <p style={{ fontSize: '.72rem', color: 'var(--gris-bleu)', marginTop: '8px' }}>🟢 Disponible &nbsp;|&nbsp; ⚪ Non disponible</p>
            </div>
            <div className="profile-card">
              <h3>Tarifs</h3>
              <div className="summary-row"><span>Baby-sitting</span><span style={{ fontWeight: 700, color: 'var(--accent)' }}>1 800 DZD/h</span></div>
              <div className="summary-row"><span>Post-partum (1/2 journée)</span><span style={{ fontWeight: 700, color: 'var(--accent)' }}>5 000 DZD</span></div>
              <div className="summary-row"><span>Garde de nuit</span><span style={{ fontWeight: 700, color: 'var(--accent)' }}>8 000 DZD</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
