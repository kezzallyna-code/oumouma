import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="screen active">
      <Navbar type="default" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🌸 Plateforme algérienne de confiance</div>
          <h1>La plateforme qui accompagne les mamans avec <span>douceur & bienveillance</span></h1>
          <p>Accédez facilement à des services de babysitting qualifiés, à un accompagnement post-partum à domicile et à des experts de la santé maternelle et infantile.</p>
          <div className="hero-cta">
            <Link href="/search" className="btn btn-primary btn-lg">🔍 Trouver une professionnelle</Link>
            <Link href="/choice" className="btn btn-secondary btn-lg">Rejoindre OUMOUMA</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="num">2 800+</div><div className="lbl">Mamans satisfaites</div></div>
            <div className="hero-stat"><div className="num">480+</div><div className="lbl">Professionnelles vérifiées</div></div>
            <div className="hero-stat"><div className="num">4.9★</div><div className="lbl">Note moyenne</div></div>
          </div>
        </div>
        <div style={{ position: 'absolute', right: '48px', top: '50%', transform: 'translateY(-50%)', fontSize: '12rem', opacity: 0.15, pointerEvents: 'none' }}>🌸</div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="section section-alt">
        <div className="section-title">
          <div className="eyebrow">Simple & Rapide</div>
          <h2>Comment ça marche ?</h2>
          <p>En 3 étapes simples, trouvez la professionnelle idéale pour accompagner votre famille</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-icon">🌟</div>
            <div className="step-num">1</div>
            <h3>Choisissez votre service</h3>
            <p>Baby-sitting, soutien post-partum ou accompagnement santé — sélectionnez selon vos besoins.</p>
          </div>
          <div className="step">
            <div className="step-icon">✅</div>
            <div className="step-num">2</div>
            <h3>Sélectionnez une professionnelle vérifiée</h3>
            <p>Parcourez les profils, lisez les avis des mamans et choisissez en toute confiance.</p>
          </div>
          <div className="step">
            <div className="step-icon">📅</div>
            <div className="step-num">3</div>
            <h3>Réservez en quelques clics</h3>
            <p>Confirmez votre réservation, communiquez via messagerie et suivez vos prestations.</p>
          </div>
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="section">
        <div className="section-title">
          <div className="eyebrow">Nos services</div>
          <h2>Des services pensés pour vous</h2>
          <p>Chaque service est conçu avec soin pour répondre aux besoins des mamans algériennes</p>
        </div>
        <div className="services-grid">
          <Link href="/search" className="service-card" style={{ textDecoration: 'none' }}>
            <div className="service-icon" style={{ background: 'var(--rose)' }}>👶</div>
            <h3>Services de baby-sitting</h3>
            <p>Des baby-sitters qualifiées et bienveillantes pour prendre soin de votre enfant à votre domicile, en toute sécurité.</p>
            <div className="service-tag">→ Découvrir les professionnelles</div>
          </Link>
          <Link href="/search" className="service-card" style={{ textDecoration: 'none' }}>
            <div className="service-icon" style={{ background: 'var(--vert)' }}>🤱</div>
            <h3>Soutien post-partum à domicile</h3>
            <p>Un accompagnement personnalisé après l'accouchement : aide quotidienne, soutien émotionnel et conseils pratiques.</p>
            <div className="service-tag">→ En savoir plus</div>
          </Link>
          <Link href="/search" className="service-card" style={{ textDecoration: 'none' }}>
            <div className="service-icon" style={{ background: 'var(--bleu)' }}>💙</div>
            <h3>Santé & accompagnement experts</h3>
            <p>Consultez des professionnelles de santé spécialisées en santé maternelle et infantile, à domicile ou en téléconsultation.</p>
            <div className="service-tag">→ Consulter un expert</div>
          </Link>
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="section section-alt">
        <div className="section-title">
          <div className="eyebrow">Sécurité & Confiance</div>
          <h2>Pourquoi nous faire confiance ?</h2>
          <p>Chaque professionnelle passe par un processus rigoureux de vérification avant d'être active sur la plateforme</p>
        </div>
        <div className="badges-grid">
          <div className="badge-card"><div className="badge-icon">🪪</div><h4>Identité vérifiée</h4></div>
          <div className="badge-card"><div className="badge-icon">📋</div><h4>Casier judiciaire vérifié</h4></div>
          <div className="badge-card"><div className="badge-icon">🎓</div><h4>Formation OUMOUMA validée</h4></div>
          <div className="badge-card"><div className="badge-icon">⭐</div><h4>Avis certifiés</h4></div>
          <div className="badge-card"><div className="badge-icon">💬</div><h4>Support client 7j/7</h4></div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="section">
        <div className="section-title">
          <div className="eyebrow">Témoignages</div>
          <h2>Ce que disent les mamans</h2>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="testimonial-header">
              <div className="avatar">👩</div>
              <div className="testimonial-author"><h4>Amira B.</h4><p>Maman de 2 enfants · Alger</p></div>
            </div>
            <div className="stars">★★★★★</div>
            <q>OUMOUMA m'a sauvé la mise ! La baby-sitter que j'ai trouvée est formidable, mes enfants l'adorent. Je recommande à 100%.</q>
          </div>
          <div className="testimonial">
            <div className="testimonial-header">
              <div className="avatar">🤱</div>
              <div className="testimonial-author"><h4>Khadija M.</h4><p>Jeune maman · Oran</p></div>
            </div>
            <div className="stars">★★★★★</div>
            <q>L'accompagnement post-partum a été une vraie bouée de sauvetage. La professionnelle était douce, attentionnée et très compétente.</q>
          </div>
          <div className="testimonial">
            <div className="testimonial-header">
              <div className="avatar">👩‍⚕️</div>
              <div className="testimonial-author"><h4>Sara H.</h4><p>Maman active · Constantine</p></div>
            </div>
            <div className="stars">★★★★★</div>
            <q>Enfin une plateforme sérieuse en Algérie ! La vérification des profils m'a vraiment rassurée. Service impeccable.</q>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
