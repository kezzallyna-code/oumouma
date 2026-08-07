import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | OUMOUMA',
  description: 'Contactez l\'équipe OUMOUMA pour toute question ou demande de support.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <Hero 
        title="Nous Contacter"
        subtitle="Nous sommes là pour vous aider, répondre à vos questions et écouter vos suggestions."
      />

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Contact Form */}
          <div className="form-container" style={{ margin: '0', maxWidth: '100%' }}>
            <h2 className="form-title">Envoyez-nous un message</h2>
            <p className="form-subtitle">Nous vous répondrons dans les plus brefs délais.</p>
            
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" id="name" placeholder="Votre nom" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Votre adresse email" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" placeholder="Votre numéro" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="support">Besoin d'aide (Support)</option>
                    <option value="pro">Devenir professionnel</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Comment pouvons-nous vous aider ?" 
                  style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--gris-clair)', borderRadius: 'var(--radius-sm)', fontSize: '.9rem', fontFamily: "'Inter', sans-serif", color: 'var(--text)', outline: 'none', resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-cards" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div className="card" style={{ background: 'var(--blanc)', borderRadius: 'var(--radius)', padding: '32px', boxShadow: 'var(--shadow)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✉️</div>
              <h3 style={{ fontWeight: 700, color: 'var(--noir)', marginBottom: '8px' }}>Support Email</h3>
              <p style={{ color: 'var(--gris-bleu)', fontSize: '0.9rem', marginBottom: '16px' }}>Idéal pour les demandes générales et le support technique.</p>
              <a href="mailto:contact@oumouma.dz" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>contact@oumouma.dz</a>
            </div>

            <div className="card" style={{ background: 'var(--blanc)', borderRadius: 'var(--radius)', padding: '32px', boxShadow: 'var(--shadow)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📞</div>
              <h3 style={{ fontWeight: 700, color: 'var(--noir)', marginBottom: '8px' }}>Support Téléphonique</h3>
              <p style={{ color: 'var(--gris-bleu)', fontSize: '0.9rem', marginBottom: '16px' }}>Disponible du dimanche au jeudi de 9h à 17h.</p>
              <a href="tel:+213550000000" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>+213 550 00 00 00</a>
            </div>

            <div className="card" style={{ background: 'var(--beige)', borderRadius: 'var(--radius)', padding: '32px' }}>
              <h3 style={{ fontWeight: 700, color: 'var(--noir)', marginBottom: '12px' }}>Avez-vous consulté notre FAQ ?</h3>
              <p style={{ color: 'var(--gris-bleu)', fontSize: '0.9rem', marginBottom: '20px' }}>Beaucoup de vos questions ont déjà une réponse dans notre foire aux questions.</p>
              <Link href="/faq" className="btn btn-secondary btn-sm">
                Consulter la FAQ
              </Link>
            </div>

          </div>
        </div>

        {/* Map Placeholder */}
        <div style={{ maxWidth: '1100px', margin: '64px auto 0', height: '300px', background: 'var(--gris-clair)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--gris-bleu)', fontWeight: 600 }}>🌍 Carte des bureaux OUMOUMA (Alger, Algérie)</p>
        </div>

      </section>

      <Footer />
    </>
  );
}
