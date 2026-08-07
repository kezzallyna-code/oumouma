"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function Booking() {
  const [service, setService] = useState('Baby-sitting');
  const [date, setDate] = useState('20');
  const [time, setTime] = useState('14:00');
  const [duration, setDuration] = useState('3h');

  return (
    <div className="screen active">
      <Navbar type="back" backLink="/profile/nadia" backText="← Retour au profil" />
      <div className="booking-page">
        <div className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
          <div className="eyebrow">Nouvelle réservation</div>
          <h2 style={{ fontSize: '1.8rem' }}>Réserver avec Nadia Benali</h2>
        </div>
        {/* STEPS */}
        <div className="booking-steps" style={{ maxWidth: '700px' }}>
          <div className="booking-step"><div className="step-circle current">1</div><span className="step-label">Service</span></div>
          <div className="step-line"></div>
          <div className="booking-step"><div className="step-circle upcoming">2</div><span className="step-label">Date</span></div>
          <div className="step-line"></div>
          <div className="booking-step"><div className="step-circle upcoming">3</div><span className="step-label">Heure</span></div>
          <div className="step-line"></div>
          <div className="booking-step"><div className="step-circle upcoming">4</div><span className="step-label">Durée</span></div>
          <div className="step-line"></div>
          <div className="booking-step"><div className="step-circle upcoming">5</div><span className="step-label">Adresse</span></div>
        </div>
        <div className="booking-layout">
          <div>
            {/* STEP 1 */}
            <div className="booking-card">
              <h3>Étape 1 · Choisir le service</h3>
              <div className="service-options">
                <div className={`service-option ${service === 'Baby-sitting' ? 'selected' : ''}`} onClick={() => setService('Baby-sitting')}><div className="icon">👶</div><span>Baby-sitting</span></div>
                <div className={`service-option ${service === 'Post-partum' ? 'selected' : ''}`} onClick={() => setService('Post-partum')}><div className="icon">🤱</div><span>Post-partum</span></div>
                <div className={`service-option ${service === 'Garde de nuit' ? 'selected' : ''}`} onClick={() => setService('Garde de nuit')}><div className="icon">🌙</div><span>Garde de nuit</span></div>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="booking-card">
              <h3>Étape 2 · Choisir la date</h3>
              <div className="date-grid">
                {['16', '17', '18', '19', '20', '23', '24'].map(d => (
                  <div key={d} className={`date-btn ${date === d ? 'selected' : ''}`} onClick={() => setDate(d)}><span className="day">{d}</span>Jour</div>
                ))}
              </div>
            </div>
            {/* STEP 3 */}
            <div className="booking-card">
              <h3>Étape 3 · Choisir l&apos;heure</h3>
              <div className="time-grid">
                {['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map(t => (
                  <div key={t} className={`time-btn ${time === t ? 'selected' : ''}`} onClick={() => setTime(t)}>{t}</div>
                ))}
              </div>
            </div>
            {/* STEP 4 */}
            <div className="booking-card">
              <h3>Étape 4 · Choisir la durée</h3>
              <div className="duration-options">
                {['1h', '2h', '3h', '4h', '5h', 'Journée'].map(dur => (
                  <div key={dur} className={`duration-btn ${duration === dur ? 'selected' : ''}`} onClick={() => setDuration(dur)}>{dur}</div>
                ))}
              </div>
            </div>
            {/* STEP 5 */}
            <div className="booking-card">
              <h3>Étape 5 · Indiquer l&apos;adresse</h3>
              <div className="form-group"><label>Adresse complète</label><input type="text" placeholder="Votre adresse de domicile" /></div>
              <div className="form-row">
                <div className="form-group"><label>Wilaya</label><select><option>Alger</option><option>Oran</option></select></div>
                <div className="form-group"><label>Commune</label><input type="text" placeholder="Votre commune" /></div>
              </div>
              <div className="form-group"><label>Informations complémentaires</label><input type="text" placeholder="Étage, code porte, instructions…" /></div>
            </div>
            <Link href="/dashboard/mom" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>✅ Confirmer ma réservation</Link>
          </div>
          {/* ORDER SUMMARY */}
          <div className="order-summary">
            <h3>Résumé de la commande</h3>
            <div className="summary-pro">
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--rose)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>👩</div>
              <div><div style={{ fontWeight: 600, fontSize: '.88rem', color: 'var(--noir)' }}>Nadia Benali</div><div style={{ fontSize: '.75rem', color: 'var(--gris-bleu)' }}>✓ Professionnelle vérifiée</div></div>
            </div>
            <div className="summary-row"><span>Service</span><span>{service}</span></div>
            <div className="summary-row"><span>Date</span><span>Juin {date}</span></div>
            <div className="summary-row"><span>Heure</span><span>{time}</span></div>
            <div className="summary-row"><span>Durée</span><span>{duration}</span></div>
            <div className="summary-row"><span>Tarif</span><span>1 800 DZD/h</span></div>
            <div className="divider"></div>
            <div className="summary-row"><span>Sous-total</span><span>5 400 DZD</span></div>
            <div className="summary-row"><span>Frais de service</span><span>270 DZD</span></div>
            <div className="summary-total"><span>Total</span><span style={{ color: 'var(--accent)' }}>5 670 DZD</span></div>
            <p style={{ fontSize: '.75rem', color: 'var(--gris-bleu)', marginTop: '12px', textAlign: 'center' }}>💳 Paiement sécurisé · Annulation gratuite 24h avant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
