import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import StatCard from '@/components/StatCard';

export const metadata: Metadata = {
  title: 'À propos | OUMOUMA',
  description: "Découvrez OUMOUMA, la plateforme algérienne de confiance dédiée à l'accompagnement des mamans.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <Hero 
        title="À propos d'OUMOUMA"
        subtitle="La plateforme algérienne de confiance dédiée à l'accompagnement des mamans."
        badge="Notre Histoire"
        ctaText="Trouver un professionnel"
        ctaLink="/search"
      />

      <section className="section">
        <div className="section-title">
          <span className="eyebrow">Notre Mission</span>
          <h2>Accompagner la maternité en toute sérénité</h2>
          <p>
            Nous aidons les mamans en leur offrant un accès simplifié à une garde d'enfants sécurisée, 
            des professionnels de santé vérifiés et un soutien bienveillant accessible à tout moment.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-title">
          <span className="eyebrow">Nos Valeurs</span>
          <h2>Pourquoi choisir OUMOUMA</h2>
        </div>
        <div className="steps" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="step">
            <div className="step-icon">🤝</div>
            <h3>Confiance</h3>
            <p>Un environnement serein pour vous et votre famille.</p>
          </div>
          <div className="step">
            <div className="step-icon">🛡️</div>
            <h3>Sécurité</h3>
            <p>Des vérifications rigoureuses pour votre tranquillité.</p>
          </div>
          <div className="step">
            <div className="step-icon">💗</div>
            <h3>Bienveillance</h3>
            <p>Un accompagnement doux et compréhensif.</p>
          </div>
          <div className="step">
            <div className="step-icon">⭐</div>
            <h3>Expertise</h3>
            <p>Des professionnels qualifiés et certifiés.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span className="eyebrow">Sécurité Avant Tout</span>
          <h2>Notre Processus de Vérification</h2>
          <p>Chaque profil professionnel passe par des étapes de contrôle strictes avant d'être validé.</p>
        </div>
        
        <div className="steps" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          <div className="step">
            <div className="step-num">1</div>
            <h3>Identité</h3>
            <p>Vérification de la pièce d'identité officielle.</p>
            <div className="step-connector">→</div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Casier Judiciaire</h3>
            <p>Contrôle des antécédents pour la sécurité.</p>
            <div className="step-connector">→</div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Compétences</h3>
            <p>Validation des diplômes et expériences.</p>
            <div className="step-connector">→</div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <h3>Certification</h3>
            <p>Obtention du badge OUMOUMA.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-title">
          <span className="eyebrow">Notre Impact</span>
          <h2>OUMOUMA en chiffres</h2>
        </div>
        <div className="stats-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <StatCard number="500+" label="Familles accompagnées" />
          <StatCard number="150+" label="Professionnels vérifiés" />
          <StatCard number="98%" label="Taux de satisfaction" />
          <StatCard number="20" label="Wilayas couvertes" />
        </div>
      </section>

      <CTA 
        title="Rejoignez la famille OUMOUMA"
        description="Créez votre compte aujourd'hui pour trouver les meilleurs professionnels ou proposer vos services."
        buttonText="S'inscrire maintenant"
        buttonLink="/login"
      />

      <Footer />
    </>
  );
}
