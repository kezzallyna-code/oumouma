import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import TrustBadges from '@/components/TrustBadges';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Experts de la Santé Maternelle | OUMOUMA',
  description: "Consultez des professionnels de santé qualifiés : sages-femmes, psychologues, consultantes en lactation et nutritionnistes.",
};

export default function HealthExpertsPage() {
  const trustBadges = [
    { icon: '🎓', title: 'Diplômes Vérifiés' },
    { icon: '🏥', title: 'Expérience Clinique' },
    { icon: '🤝', title: 'Éthique & Déontologie' },
    { icon: '🔒', title: 'Confidentialité' },
    { icon: '⭐', title: 'Avis Authentiques' }
  ];

  return (
    <>
      <Navbar />
      
      <Hero 
        title="Experts de la Santé"
        subtitle="Entourez-vous des meilleurs professionnels de la santé maternelle et infantile pour un suivi serein."
        badge="Santé & Bien-être"
        ctaText="Rechercher un expert"
        ctaLink="/search?service=sante"
      />

      <section className="section">
        <div className="section-title">
          <span className="eyebrow">Nos Spécialistes</span>
          <h2>Une équipe pluridisciplinaire à votre écoute</h2>
        </div>
        <div className="services-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <ServiceCard 
            icon="🩺" 
            title="Sages-femmes" 
            description="Suivi pré et post-natal, préparation à la naissance et rééducation périnéale." 
            link="/search?category=sage-femme" 
            linkText="Voir les profils"
          />
          <ServiceCard 
            icon="🧠" 
            title="Psychologues" 
            description="Soutien psychologique pour surmonter les difficultés liées à la maternité (dépression post-partum, anxiété)." 
            link="/search?category=psychologue" 
            linkText="Voir les profils"
          />
          <ServiceCard 
            icon="🍼" 
            title="Consultantes en lactation" 
            description="Accompagnement expert pour initier et poursuivre l'allaitement dans les meilleures conditions." 
            link="/search?category=lactation" 
            linkText="Voir les profils"
          />
          <ServiceCard 
            icon="👶" 
            title="Infirmières pédiatriques" 
            description="Soins spécifiques et accompagnement au retour à la maison avec votre nouveau-né." 
            link="/search?category=infirmiere" 
            linkText="Voir les profils"
          />
          <ServiceCard 
            icon="🥗" 
            title="Nutritionnistes" 
            description="Rééquilibrage alimentaire post-partum et conseils pour la diversification menée par l'enfant (DME)." 
            link="/search?category=nutritionniste" 
            linkText="Voir les profils"
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-title" style={{ marginBottom: '40px' }}>
          <h2>Notre Garantie Qualité</h2>
          <p>La santé de votre famille ne s'improvise pas. OUMOUMA s'engage sur la qualité des intervenants.</p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <TrustBadges badges={trustBadges} />
        </div>
      </section>

      <CTA 
        title="Prenez rendez-vous aujourd'hui"
        description="Nos experts sont disponibles en ligne ou à domicile selon vos préférences."
        buttonText="Trouver un spécialiste"
        buttonLink="/search?service=sante"
      />

      <Footer />
    </>
  );
}
