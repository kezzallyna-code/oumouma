import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Nos Services | OUMOUMA',
  description: "Découvrez tous les services proposés par OUMOUMA : baby-sitting, accompagnement post-partum, et experts de la santé maternelle.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <Hero 
        title="Nos Services"
        subtitle="Des solutions sur-mesure pour vous accompagner à chaque étape de votre maternité."
        badge="Catalogue des services"
      />

      <section className="section">
        <div className="services-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <ServiceCard 
            icon="🧸" 
            title="Baby-sitting" 
            description="Des nounous de confiance pour veiller sur vos enfants en toute sécurité." 
            link="/services/baby-sitting" 
          />
          <ServiceCard 
            icon="🤱" 
            title="Accompagnement post-partum" 
            description="Un soutien physique et émotionnel pour vous aider après l'accouchement." 
            link="/services/post-partum" 
          />
          <ServiceCard 
            icon="🩺" 
            title="Sage-femme" 
            description="Des consultations et un suivi par des professionnelles de santé." 
            link="/services/sante" 
          />
          <ServiceCard 
            icon="👶" 
            title="Infirmière pédiatrique" 
            description="Des soins spécialisés pour le bien-être de votre nouveau-né." 
            link="/services/sante" 
          />
          <ServiceCard 
            icon="🧠" 
            title="Psychologue" 
            description="Un espace d'écoute et de soutien psychologique bienveillant." 
            link="/services/sante" 
          />
          <ServiceCard 
            icon="🍼" 
            title="Consultante en lactation" 
            description="Des conseils experts pour un allaitement serein et réussi." 
            link="/services/sante" 
          />
          <ServiceCard 
            icon="🥗" 
            title="Nutritionniste" 
            description="Un accompagnement diététique adapté à la grossesse et au post-partum." 
            link="/services/sante" 
          />
        </div>
      </section>

      <CTA 
        title="Besoin d'aide pour choisir ?"
        description="Notre équipe est là pour vous guider vers le professionnel le plus adapté à vos besoins."
        buttonText="Nous contacter"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
}
