import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function RegisterMom() {
  return (
    <div className="screen active">
      <Navbar type="back" backLink="/choice" backText="← Retour" />
      <div style={{ background: 'linear-gradient(135deg, var(--blanc), var(--rose))', padding: '60px 24px', minHeight: 'calc(100vh - 68px)' }}>
        <div className="form-container">
          <div className="form-title">Créer votre compte 🌸</div>
          <div className="form-subtitle">Rejoignez des milliers de mamans qui font confiance à OUMOUMA</div>
          <div className="form-row">
            <div className="form-group"><label>Nom</label><input type="text" placeholder="Votre nom" /></div>
            <div className="form-group"><label>Prénom</label><input type="text" placeholder="Votre prénom" /></div>
          </div>
          <div className="form-group"><label>Email</label><input type="email" placeholder="exemple@email.com" /></div>
          <div className="form-row">
            <div className="form-group"><label>Mot de passe</label><input type="password" placeholder="••••••••" /></div>
            <div className="form-group"><label>Confirmer</label><input type="password" placeholder="••••••••" /></div>
          </div>
          <div className="form-group"><label>Téléphone</label><input type="tel" placeholder="+213 XXX XXX XXX" /></div>
          <div className="form-group"><label>Wilaya</label>
            <select>
              <option>Sélectionnez votre wilaya</option>
              <option>Alger</option><option>Oran</option><option>Constantine</option>
              <option>Annaba</option><option>Blida</option><option>Sétif</option>
              <option>Tizi Ouzou</option><option>Béjaïa</option><option>Autre</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Nombre d&apos;enfants</label><input type="number" min="1" placeholder="1" /></div>
            <div className="form-group"><label>Âge(s) des enfants</label><input type="text" placeholder="ex: 6 mois, 3 ans" /></div>
          </div>
          <div className="form-group">
            <label>Services d&apos;intérêt</label>
            <div className="checkbox-group mt-8">
              <label className="checkbox-item"><input type="checkbox" defaultChecked /><span>👶 Services de baby-sitting</span></label>
              <label className="checkbox-item"><input type="checkbox" /><span>🤱 Soutien post-partum à domicile</span></label>
              <label className="checkbox-item"><input type="checkbox" /><span>💙 Santé & accompagnement experts</span></label>
            </div>
          </div>
          <Link href="/dashboard/mom" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', textDecoration: 'none' }}>
            Créer mon compte 🌸
          </Link>
          <div className="form-link">Déjà un compte ? <Link href="/dashboard/mom">Se connecter</Link></div>
        </div>
      </div>
    </div>
  );
}
