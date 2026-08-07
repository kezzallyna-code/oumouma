import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function RegisterPro() {
  return (
    <div className="screen active">
      <Navbar type="back" backLink="/choice" backText="← Retour" />
      <div style={{ background: 'linear-gradient(135deg, var(--blanc), var(--bleu))', padding: '60px 24px', minHeight: 'calc(100vh - 68px)' }}>
        <div className="form-container">
          <div className="form-title">Rejoignez OUMOUMA 💼</div>
          <div className="form-subtitle">Commencez à proposer vos services à des familles qui ont besoin de vous</div>
          <div className="form-row">
            <div className="form-group"><label>Nom</label><input type="text" placeholder="Votre nom" /></div>
            <div className="form-group"><label>Prénom</label><input type="text" placeholder="Votre prénom" /></div>
          </div>
          <div className="form-group"><label>Téléphone</label><input type="tel" placeholder="+213 XXX XXX XXX" /></div>
          <div className="form-group"><label>Email</label><input type="email" placeholder="exemple@email.com" /></div>
          <div className="form-row">
            <div className="form-group"><label>Mot de passe</label><input type="password" placeholder="••••••••" /></div>
            <div className="form-group"><label>Confirmer</label><input type="password" placeholder="••••••••" /></div>
          </div>
          <div className="form-group"><label>Wilaya d&apos;activité</label>
            <select>
              <option>Sélectionnez</option><option>Alger</option><option>Oran</option><option>Constantine</option><option>Annaba</option><option>Blida</option><option>Sétif</option>
            </select>
          </div>
          <div className="form-group">
            <label>Services proposés</label>
            <div className="checkbox-group mt-8">
              <label className="checkbox-item"><input type="checkbox" defaultChecked /><span>👶 Baby-sitting</span></label>
              <label className="checkbox-item"><input type="checkbox" /><span>🤱 Soutien post-partum</span></label>
              <label className="checkbox-item"><input type="checkbox" /><span>💙 Santé & accompagnement</span></label>
            </div>
          </div>
          <div className="form-group">
            <label>Photo de profil</label>
            <div className="upload-zone"><div className="upload-icon">📷</div><p>Cliquez ou glissez votre photo<br /><small>JPG, PNG – max 5 Mo</small></p></div>
          </div>
          <div className="form-group">
            <label>Pièce d&apos;identité (recto/verso)</label>
            <div className="upload-zone"><div className="upload-icon">🪪</div><p>Télécharger votre CIN ou passeport</p></div>
          </div>
          <div className="form-group">
            <label>Casier judiciaire (bulletin n°3)</label>
            <div className="upload-zone"><div className="upload-icon">📋</div><p>Document officiel daté de moins de 3 mois</p></div>
          </div>
          <div className="form-group">
            <label>Diplômes & Certifications</label>
            <div className="upload-zone"><div className="upload-icon">🎓</div><p>Télécharger vos diplômes et attestations</p></div>
          </div>
          <Link href="/formation/intro" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', textDecoration: 'none' }}>
            Soumettre ma candidature →
          </Link>
        </div>
      </div>
    </div>
  );
}
