import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Accompagnement Post-Partum | OUMOUMA',
  description: "Bénéficiez d'un soutien physique et émotionnel après l'accouchement grâce à nos assistantes maternelles.",
};

export default function PostPartumPage() {
  return (
    <>
      <Navbar />
      
      <Hero 
        title="Accompagnement Post-Partum"
        subtitle="Le quatrième trimestre est délicat. Nos professionnelles sont là pour vous soutenir, vous écouter et vous soulager."
        badge="Soutien Maternel"
        ctaText="Trouver une accompagnante"
        ctaLink="/search?service=post-partum"
      />

      <section className="section">
        <div className="section-title">
          <span className="eyebrow">Nos domaines d'intervention</span>
          <h2>Un soutien complet après l'accouchement</h2>
        </div>
        <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="service-card">
            <div className="service-icon" style={{ background: 'var(--rose)' }}>💕</div>
            <h3>Soutien Émotionnel</h3>
            <p>Une écoute active et bienveillante pour traverser les bouleversements hormonaux et émotionnels.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: 'var(--bleu)' }}>🛏️</div>
            <h3>Récupération Physique</h3>
            <p>Aide à l'organisation quotidienne pour vous permettre de vous reposer et de guérir à votre rythme.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: 'var(--vert)' }}>👶</div>
            <h3>Assistance Pratique</h3>
            <p>Aide aux premiers soins du bébé, au bain, et conseils d'aménagement.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="form-container text-center" style={{ maxWidth: '800px', backgroundColor: 'transparent', boxShadow: 'none' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '24px' }}>Vous n'êtes pas seule.</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--gris-bleu)', lineHeight: 1.8 }}>
            En Algérie, le post-partum est souvent une période de vulnérabilité où le soutien fait défaut. 
            OUMOUMA vous connecte avec des femmes d'expérience qui comprennent profondément ce que vous traversez.
          </p>
        </div>
      </section>

      <CTA 
        title="Prenez soin de vous"
        description="Découvrez nos profils d'accompagnantes post-partum disponibles dans votre région."
        buttonText="Découvrir les expertes"
        buttonLink="/search?service=post-partum"
      />

      <Footer />
    </>
  );
}
