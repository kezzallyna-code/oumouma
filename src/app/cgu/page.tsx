import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation | OUMOUMA',
  description: 'Conditions générales d\'utilisation de la plateforme OUMOUMA.',
};

export default function CGUPage() {
  return (
    <>
      <Navbar />
      
      <div style={{ backgroundColor: 'var(--beige)', padding: '60px 48px', borderBottom: '1px solid var(--gris-clair)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: 'var(--noir)', marginBottom: '16px' }}>Conditions Générales d'Utilisation</h1>
          <p style={{ color: 'var(--gris-bleu)', fontSize: '1rem' }}>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor: 'var(--blanc)' }}>
        <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text)', lineHeight: 1.8, fontSize: '1rem' }}>
          
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>1. Introduction</h2>
          <p style={{ marginBottom: '20px' }}>
            Bienvenue sur OUMOUMA. Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme OUMOUMA, destinée à mettre en relation des parents (utilisateurs) avec des professionnels qualifiés (baby-sitters, professionnelles de santé, etc.).
          </p>
          <p style={{ marginBottom: '20px' }}>
            En créant un compte ou en utilisant nos services, vous acceptez sans réserve les présentes CGU.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>2. Rôles et Responsabilités</h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--noir)', marginTop: '24px', marginBottom: '12px' }}>2.1. Les Parents (Utilisateurs)</h3>
          <p style={{ marginBottom: '20px' }}>
            Les parents s'engagent à fournir des informations exactes lors de leur inscription et de leurs demandes de réservation. Ils s'engagent à respecter les professionnels et à garantir un environnement de travail sain et sécurisé.
          </p>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--noir)', marginTop: '24px', marginBottom: '12px' }}>2.2. Les Professionnels</h3>
          <p style={{ marginBottom: '20px' }}>
            Les professionnels certifient l'exactitude des diplômes, certificats et identités fournis à la plateforme. Ils s'engagent à exercer leurs missions avec bienveillance, ponctualité et professionnalisme.
          </p>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--noir)', marginTop: '24px', marginBottom: '12px' }}>2.3. OUMOUMA</h3>
          <p style={{ marginBottom: '20px' }}>
            OUMOUMA agit en tant qu'intermédiaire technique. Bien que nous procédions à des vérifications rigoureuses des profils, OUMOUMA ne saurait être tenu responsable des agissements des utilisateurs ou des professionnels lors des prestations.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>3. Réservation et Annulation</h2>
          <p style={{ marginBottom: '20px' }}>
            Toute réservation confirmée via la plateforme constitue un engagement. Les annulations doivent être effectuées au moins 24 heures avant le début de la prestation pour être sans frais. En deçà, des pénalités peuvent s'appliquer.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>4. Données Personnelles</h2>
          <p style={{ marginBottom: '20px' }}>
            La protection de vos données est une priorité. Pour en savoir plus sur la collecte et le traitement de vos informations, veuillez consulter notre <a href="/confidentialite" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Politique de Confidentialité</a>.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>5. Modification des CGU</h2>
          <p style={{ marginBottom: '20px' }}>
            OUMOUMA se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs seront informés de toute modification substantielle par email ou via une notification sur la plateforme.
          </p>

          <div style={{ marginTop: '60px', padding: '24px', background: 'var(--beige)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <p style={{ margin: 0, color: 'var(--gris-bleu)', fontWeight: 500 }}>
              Pour toute question concernant ces CGU, contactez-nous à <a href="mailto:legal@oumouma.dz" style={{ color: 'var(--accent)', textDecoration: 'none' }}>legal@oumouma.dz</a>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
