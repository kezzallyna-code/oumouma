import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Choice() {
  return (
    <div className="screen active">
      <Navbar type="back" backLink="/" backText="← Retour" />
      <div className="choice-page">
        <div className="section-title">
          <div className="eyebrow">Bienvenue</div>
          <h2>Je suis…</h2>
          <p>Choisissez votre profil pour accéder à votre espace personnalisé</p>
        </div>
        <div className="choice-cards">
          <Link href="/register/mom" className="choice-card" style={{ textDecoration: 'none' }}>
            <div className="icon">👩‍👧</div>
            <h3>Une maman</h3>
            <p>Je cherche une aide professionnelle pour mon bébé et mon quotidien</p>
            <button className="btn btn-primary">Continuer →</button>
          </Link>
          <Link href="/register/pro" className="choice-card" style={{ textDecoration: 'none' }}>
            <div className="icon">💼</div>
            <h3>Une professionnelle</h3>
            <p>Je souhaite proposer mes services aux familles sur OUMOUMA</p>
            <button className="btn btn-secondary">Continuer →</button>
          </Link>
        </div>
        <p style={{ marginTop: '32px', fontSize: '.85rem', color: 'var(--gris-bleu)' }}>
          Déjà un compte ? <Link href="/dashboard/mom" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
