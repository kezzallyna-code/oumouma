import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Search() {
  return (
    <div className="screen active">
      <Navbar type="search" />
      <div className="search-header">
        <h1>Trouver une professionnelle</h1>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher par nom, service, wilaya…" />
          <button>🔍 Rechercher</button>
        </div>
      </div>
      <div className="search-layout">
        <div className="filters-panel">
          <div className="filter-card">
            <h4>Wilaya</h4>
            <select style={{ width: '100%', padding: '8px', border: '1.5px solid var(--gris-clair)', borderRadius: '8px', fontSize: '.85rem', outline: 'none' }}>
              <option>Toutes les wilayas</option>
              <option>Alger</option><option>Oran</option><option>Constantine</option>
              <option>Blida</option><option>Sétif</option>
            </select>
          </div>
          <div className="filter-card">
            <h4>Type de service</h4>
            <label className="filter-option"><input type="checkbox" defaultChecked /><span>👶 Baby-sitting</span></label>
            <label className="filter-option"><input type="checkbox" /><span>🤱 Post-partum</span></label>
            <label className="filter-option"><input type="checkbox" /><span>💙 Santé & experts</span></label>
          </div>
          <div className="filter-card">
            <h4>Tarif (DZD/h)</h4>
            <input type="range" min="500" max="5000" defaultValue="3000" />
            <p style={{ fontSize: '.78rem', color: 'var(--gris-bleu)', marginTop: '6px' }}>Jusqu&apos;à 3 000 DZD/h</p>
          </div>
          <div className="filter-card">
            <h4>Disponibilité</h4>
            <label className="filter-option"><input type="radio" name="dispo" /><span>Maintenant disponible</span></label>
            <label className="filter-option"><input type="radio" name="dispo" /><span>Cette semaine</span></label>
            <label className="filter-option"><input type="radio" name="dispo" /><span>Ce mois</span></label>
          </div>
          <div className="filter-card">
            <h4>Langue</h4>
            <label className="filter-option"><input type="checkbox" defaultChecked /><span>Arabe</span></label>
            <label className="filter-option"><input type="checkbox" /><span>Français</span></label>
            <label className="filter-option"><input type="checkbox" /><span>Tamazight</span></label>
          </div>
          <div className="filter-card">
            <h4>Expérience</h4>
            <label className="filter-option"><input type="radio" name="exp" /><span>1 an minimum</span></label>
            <label className="filter-option"><input type="radio" name="exp" /><span>3 ans minimum</span></label>
            <label className="filter-option"><input type="radio" name="exp" /><span>5 ans minimum</span></label>
          </div>
        </div>
        <div className="results-area">
          <div className="results-header">
            <h3>24 professionnelles trouvées</h3>
            <select style={{ padding: '8px 14px', border: '1.5px solid var(--gris-clair)', borderRadius: '8px', fontSize: '.83rem', outline: 'none' }}>
              <option>Trier par : Mieux notées</option>
              <option>Tarif croissant</option>
              <option>Expérience</option>
            </select>
          </div>
          <div className="results-grid">
            <Link href="/profile/nadia" className="pro-card" style={{ textDecoration: 'none' }}>
              <div className="pro-card-header">
                <div className="pro-photo">👩<span className="verified-badge">✓</span></div>
                <div className="pro-info">
                  <h4>Nadia Benali</h4>
                  <span className="pro-badge">✓ Vérifiée OUMOUMA</span>
                  <div className="pro-rating"><span className="stars">★★★★★</span><span>4.9 (47 avis)</span></div>
                  <p style={{ fontSize: '.78rem', color: 'var(--gris-bleu)', marginTop: '2px' }}>📍 Alger · 5 ans d&apos;expérience</p>
                </div>
              </div>
              <div className="pro-tags"><span className="pro-tag">👶 Baby-sitting</span><span className="pro-tag">🤱 Post-partum</span><span className="pro-tag">🗣️ Arabe · Français</span></div>
              <div className="pro-footer">
                <div className="pro-price">1 800 DZD<span>/heure</span></div>
                <button className="btn btn-primary btn-sm">Voir profil</button>
              </div>
            </Link>
            <Link href="/profile/yasmina" className="pro-card" style={{ textDecoration: 'none' }}>
              <div className="pro-card-header">
                <div className="pro-photo">🤱<span className="verified-badge">✓</span></div>
                <div className="pro-info">
                  <h4>Yasmina Chaoui</h4>
                  <span className="pro-badge">✓ Vérifiée OUMOUMA</span>
                  <div className="pro-rating"><span className="stars">★★★★★</span><span>5.0 (32 avis)</span></div>
                  <p style={{ fontSize: '.78rem', color: 'var(--gris-bleu)', marginTop: '2px' }}>📍 Oran · 8 ans d&apos;expérience</p>
                </div>
              </div>
              <div className="pro-tags"><span className="pro-tag">🤱 Post-partum</span><span className="pro-tag">🗣️ Arabe</span></div>
              <div className="pro-footer">
                <div className="pro-price">2 200 DZD<span>/heure</span></div>
                <button className="btn btn-primary btn-sm">Voir profil</button>
              </div>
            </Link>
            <Link href="/profile/aicha" className="pro-card" style={{ textDecoration: 'none' }}>
              <div className="pro-card-header">
                <div className="pro-photo">👩‍⚕️<span className="verified-badge">✓</span></div>
                <div className="pro-info">
                  <h4>Dr. Aicha Meziane</h4>
                  <span className="pro-badge">✓ Vérifiée OUMOUMA</span>
                  <div className="pro-rating"><span className="stars">★★★★★</span><span>4.8 (61 avis)</span></div>
                  <p style={{ fontSize: '.78rem', color: 'var(--gris-bleu)', marginTop: '2px' }}>📍 Constantine · 12 ans d&apos;expérience</p>
                </div>
              </div>
              <div className="pro-tags"><span className="pro-tag">💙 Santé & experts</span><span className="pro-tag">🗣️ Arabe · Français</span></div>
              <div className="pro-footer">
                <div className="pro-price">3 500 DZD<span>/séance</span></div>
                <button className="btn btn-primary btn-sm">Voir profil</button>
              </div>
            </Link>
            <Link href="/profile/samira" className="pro-card" style={{ textDecoration: 'none' }}>
              <div className="pro-card-header">
                <div className="pro-photo">👶<span className="verified-badge">✓</span></div>
                <div className="pro-info">
                  <h4>Samira Djebbar</h4>
                  <span className="pro-badge">✓ Vérifiée OUMOUMA</span>
                  <div className="pro-rating"><span className="stars">★★★★☆</span><span>4.7 (28 avis)</span></div>
                  <p style={{ fontSize: '.78rem', color: 'var(--gris-bleu)', marginTop: '2px' }}>📍 Blida · 3 ans d&apos;expérience</p>
                </div>
              </div>
              <div className="pro-tags"><span className="pro-tag">👶 Baby-sitting</span><span className="pro-tag">🗣️ Arabe · Tamazight</span></div>
              <div className="pro-footer">
                <div className="pro-price">1 400 DZD<span>/heure</span></div>
                <button className="btn btn-primary btn-sm">Voir profil</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
