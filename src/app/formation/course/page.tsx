import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function FormationCourse() {
  return (
    <div className="screen active">
      <Navbar type="none" />
      <nav>
        <div className="nav-logo"><Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Oumouma</Link></div>
      </nav>
      <div style={{ padding: '40px 24px', background: 'var(--beige)', minHeight: 'calc(100vh - 68px)' }}>
        <div className="formation-page">
          <div className="section-title" style={{ textAlign: 'left', marginBottom: '12px' }}>
            <div className="eyebrow">Formation obligatoire</div>
            <h2 style={{ fontSize: '1.8rem' }}>Formation OUMOUMA</h2>
            <p style={{ textAlign: 'left' }}>Progression : <strong style={{ color: 'var(--accent)' }}>75%</strong> complété</p>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
          <div className="module-grid">
            <div className="module-card done">
              <div className="module-icon">⭐</div>
              <h4>Module 1 : Qualité de service</h4>
              <p>Standards de qualité, ponctualité, communication avec les familles et bonnes pratiques professionnelles.</p>
              <div className="module-status done">✅ Complété</div>
            </div>
            <div className="module-card done">
              <div className="module-icon">🛡️</div>
              <h4>Module 2 : Sécurité & bonnes pratiques</h4>
              <p>Sécurité à domicile, premiers secours pédiatriques et gestes essentiels en cas d&apos;urgence.</p>
              <div className="module-status done">✅ Complété</div>
            </div>
            <div className="module-card active">
              <div className="module-icon">👨‍👩‍👧</div>
              <h4>Module 3 : Relation avec les familles</h4>
              <p>Communication bienveillante, respect de la vie privée et gestion des situations délicates.</p>
              <div className="module-status active">⏳ En cours</div>
            </div>
            <div className="module-card">
              <div className="module-icon">📜</div>
              <h4>Module 4 : Charte OUMOUMA</h4>
              <p>Nos valeurs, engagements, règles de conduite et code éthique de la plateforme.</p>
              <div className="module-status upcoming">🔒 À venir</div>
            </div>
          </div>
          <div className="booking-card" style={{ marginTop: '0' }}>
            <h3>📖 Module 3 – Relation avec les familles (en cours)</h3>
            <p style={{ color: 'var(--gris-bleu)', fontSize: '.9rem', lineHeight: '1.8', marginBottom: '16px' }}>La relation avec la famille est au cœur de votre mission. Une communication claire, respectueuse et bienveillante est essentielle pour établir un climat de confiance durable.<br /><br /><strong>Points clés :</strong></p>
            <ul style={{ color: 'var(--gris-bleu)', fontSize: '.88rem', lineHeight: '2', paddingLeft: '20px' }}>
              <li>Toujours confirmer les rendez-vous 24h à l&apos;avance</li>
              <li>Respecter scrupuleusement la vie privée de la famille</li>
              <li>Signaler immédiatement tout incident via l&apos;application</li>
              <li>Maintenir un comportement professionnel à tout moment</li>
              <li>Traiter chaque enfant avec douceur et bienveillance</li>
            </ul>
          </div>
          <Link href="/formation/success" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>Terminer la formation ✓</Link>
        </div>
      </div>
    </div>
  );
}
