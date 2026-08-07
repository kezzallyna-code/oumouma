import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | OUMOUMA',
  description: 'Comment OUMOUMA protège vos données personnelles.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      
      <div style={{ backgroundColor: 'var(--beige)', padding: '60px 48px', borderBottom: '1px solid var(--gris-clair)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: 'var(--noir)', marginBottom: '16px' }}>Politique de Confidentialité</h1>
          <p style={{ color: 'var(--gris-bleu)', fontSize: '1rem' }}>Chez OUMOUMA, la protection de votre vie privée est fondamentale.</p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor: 'var(--blanc)' }}>
        <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text)', lineHeight: 1.8, fontSize: '1rem' }}>
          
          <p style={{ marginBottom: '32px', fontSize: '1.1rem', color: 'var(--gris-bleu)' }}>
            La présente politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos données personnelles lorsque vous utilisez la plateforme OUMOUMA.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>1. Données collectées</h2>
          <p style={{ marginBottom: '20px' }}>Nous collectons différents types d'informations, notamment :</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '24px', color: 'var(--gris-bleu)' }}>
            <li style={{ marginBottom: '8px' }}><strong>Informations de compte :</strong> Nom, prénom, email, numéro de téléphone, et mot de passe (crypté).</li>
            <li style={{ marginBottom: '8px' }}><strong>Informations de profil (Professionnels) :</strong> Pièce d'identité, diplômes, antécédents, et photo de profil.</li>
            <li style={{ marginBottom: '8px' }}><strong>Données de réservation :</strong> Historique des gardes, adresses, dates, et avis laissés ou reçus.</li>
            <li style={{ marginBottom: '8px' }}><strong>Données techniques :</strong> Cookies, adresse IP, et type de navigateur pour améliorer l'expérience utilisateur.</li>
          </ul>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>2. Utilisation de vos données</h2>
          <p style={{ marginBottom: '20px' }}>Vos données sont utilisées dans les buts suivants :</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '24px', color: 'var(--gris-bleu)' }}>
            <li style={{ marginBottom: '8px' }}>Permettre la mise en relation sécurisée entre parents et professionnels.</li>
            <li style={{ marginBottom: '8px' }}>Vérifier l'identité et les qualifications des professionnels pour garantir la sécurité.</li>
            <li style={{ marginBottom: '8px' }}>Gérer le support client et résoudre les éventuels litiges.</li>
            <li style={{ marginBottom: '8px' }}>Améliorer nos services et personnaliser votre expérience.</li>
          </ul>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>3. Partage des données</h2>
          <p style={{ marginBottom: '20px' }}>
            Nous ne vendons <strong>jamais</strong> vos données personnelles. Elles ne sont partagées qu'avec le professionnel concerné par une réservation (ex: adresse du domicile) ou avec les autorités compétentes en cas d'obligation légale.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>4. Sécurité</h2>
          <p style={{ marginBottom: '20px' }}>
            Toutes les données transitant sur OUMOUMA sont chiffrées. Nos serveurs bénéficient de protections avancées pour prévenir tout accès non autorisé. Les documents d'identité sont stockés de manière sécurisée et ne sont accessibles qu'à notre équipe de validation.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--noir)', marginTop: '40px', marginBottom: '20px' }}>5. Vos droits</h2>
          <p style={{ marginBottom: '20px' }}>Conformément à la réglementation sur la protection des données, vous disposez des droits suivants :</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '24px', color: 'var(--gris-bleu)' }}>
            <li style={{ marginBottom: '8px' }}>Droit d'accès et de rectification de vos données.</li>
            <li style={{ marginBottom: '8px' }}>Droit à l'effacement (droit à l'oubli) de votre compte et de vos données.</li>
            <li style={{ marginBottom: '8px' }}>Droit de vous opposer à certaines communications marketing.</li>
          </ul>

          <div style={{ marginTop: '60px', padding: '24px', background: 'var(--beige)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <p style={{ margin: 0, color: 'var(--gris-bleu)', fontWeight: 500 }}>
              Pour exercer vos droits ou pour toute question sur la confidentialité, contactez-nous : <a href="mailto:privacy@oumouma.dz" style={{ color: 'var(--accent)', textDecoration: 'none' }}>privacy@oumouma.dz</a>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
