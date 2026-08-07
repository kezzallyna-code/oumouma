import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FAQAccordion from '@/components/FAQAccordion';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Foire Aux Questions | OUMOUMA',
  description: 'Trouvez les réponses à toutes vos questions sur le fonctionnement de la plateforme OUMOUMA.',
};

export default function FAQPage() {
  const momFaqs = [
    {
      question: "Comment fonctionnent les réservations ?",
      answer: "Une fois que vous avez trouvé le professionnel idéal, sélectionnez une date et une heure sur son calendrier. Envoyez votre demande, et dès que le professionnel l'accepte, votre réservation est confirmée."
    },
    {
      question: "Comment les professionnels sont-ils vérifiés ?",
      answer: "Chaque professionnel doit fournir une pièce d'identité officielle, un extrait de casier judiciaire vierge, et des justificatifs de diplômes. Nous menons également un entretien pour valider leurs compétences."
    },
    {
      question: "Puis-je annuler une réservation ?",
      answer: "Oui, vous pouvez annuler gratuitement jusqu'à 24h avant la prestation. Passé ce délai, des frais d'annulation peuvent s'appliquer selon notre politique."
    },
    {
      question: "Comment fonctionnent les avis ?",
      answer: "Seuls les parents ayant effectué une réservation validée sur la plateforme peuvent laisser un avis. Cela garantit 100% d'avis authentiques."
    }
  ];

  const proFaqs = [
    {
      question: "Comment rejoindre la plateforme ?",
      answer: "Cliquez sur 'Devenir professionnelle' ou 'S'inscrire', remplissez le formulaire de candidature et téléchargez vos documents. Notre équipe examinera votre profil."
    },
    {
      question: "Comment obtenir la certification OUMOUMA ?",
      answer: "La certification est attribuée après validation de tous vos documents, réussite de l'entretien avec notre équipe, et suivi d'un module de sensibilisation aux valeurs d'OUMOUMA."
    },
    {
      question: "Comment sont gérés les paiements ?",
      answer: "Pour le moment, les paiements s'effectuent directement entre les parents et vous lors de la prestation. Nous mettrons bientôt en place un système de paiement en ligne sécurisé."
    }
  ];

  const securityFaqs = [
    {
      question: "Vérification d'identité",
      answer: "Nous utilisons un système sécurisé pour vérifier l'authenticité des pièces d'identité fournies par tous les utilisateurs de la plateforme."
    },
    {
      question: "Protection des données",
      answer: "Vos données personnelles sont cryptées et stockées de manière sécurisée en respectant les normes strictes de confidentialité."
    },
    {
      question: "Gestion des litiges",
      answer: "En cas de problème lors d'une prestation, notre service client est disponible 7j/7 pour vous accompagner et trouver une solution équitable."
    }
  ];

  return (
    <>
      <Navbar />
      
      <Hero 
        title="Foire Aux Questions"
        subtitle="Tout ce que vous devez savoir sur OUMOUMA."
      />

      <section className="section" style={{ paddingTop: '0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'var(--noir)', marginBottom: '32px', marginTop: '40px' }}>Pour les mamans</h2>
          <FAQAccordion items={momFaqs} />

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'var(--noir)', marginBottom: '32px', marginTop: '64px' }}>Pour les professionnels</h2>
          <FAQAccordion items={proFaqs} />

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'var(--noir)', marginBottom: '32px', marginTop: '64px' }}>Sécurité & Confiance</h2>
          <FAQAccordion items={securityFaqs} />

        </div>
      </section>

      <CTA 
        title="Vous ne trouvez pas votre réponse ?"
        description="Notre équipe de support est là pour vous aider à tout moment."
        buttonText="Contactez-nous"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
}
