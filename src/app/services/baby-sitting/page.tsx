import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Baby-sitting de Confiance | OUMOUMA',
  description: "Trouvez des baby-sitters vérifiées et qualifiées en Algérie pour une garde d'enfants en toute sérénité.",
};

export default function BabysittingPage() {
  return (
    <>
      <Navbar />
      
      <Hero 
        title="Baby-sitting de Confiance"
        subtitle="Prenez du temps pour vous, nous veillons sur ce que vous avez de plus précieux avec des nounous soigneusement sélectionnées."
        badge="Garde d'enfants"
        ctaText="Trouver une baby-sitter"
        ctaLink="/search?service=babysitting"
      />

      <section className="section section-alt">
        <div className="section-title">
          <span className="eyebrow">Avantages</span>
          <h2>Pourquoi choisir nos baby-sitters ?</h2>
        </div>
        <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="service-card">
            <div className="service-icon" style={{ background: 'var(--vert)' }}>🛡️</div>
            <h3>Profils vérifiés</h3>
            <p>Identité, casier judiciaire et références scrupuleusement contrôlés.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: 'var(--bleu)' }}>⏰</div>
            <h3>Flexibilité</h3>
            <p>Disponibilités en urgence, en soirée ou pour des gardes régulières.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: 'var(--rose)' }}>💖</div>
            <h3>Approche bienveillante</h3>
            <p>Des professionnelles formées pour le bien-être et l'éveil de vos enfants.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span className="eyebrow">Le Processus</span>
          <h2>Comment ça marche</h2>
        </div>
        <div className="steps" style={{ maxWidth: '900px' }}>
          <div className="step">
            <div className="step-num">1</div>
            <h3>Recherchez</h3>
            <p>Parcourez les profils selon vos besoins et votre wilaya.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Réservez</h3>
            <p>Discutez avec la baby-sitter et confirmez la garde en ligne.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Profitez</h3>
            <p>Partez sereine, votre enfant est entre de bonnes mains.</p>
          </div>
        </div>
      </section>

      <CTA 
        title="Prête à trouver la perle rare ?"
        description="Rejoignez OUMOUMA et découvrez des professionnelles passionnées près de chez vous."
        buttonText="Voir les profils"
        buttonLink="/search?service=babysitting"
      />

      <Footer />
    </>
  );
}
