import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function FormationIntro() {
  return (
    <div className="screen active">
      <Navbar type="none" />
      <nav>
        <div className="nav-logo"><Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Oumouma</Link></div>
      </nav>
      <div className="waiting-page">
        <div className="waiting-card">
          <div className="icon">📚</div>
          <h2>Merci pour votre candidature !</h2>
          <p>Afin de garantir la qualité et la sécurité des services proposés sur OUMOUMA, une <strong>formation de validation est obligatoire</strong> avant l&apos;activation de votre profil.<br /><br />Cette formation est entièrement en ligne et prend environ <strong>30 minutes</strong>. À la fin, votre profil sera activé et visible par les mamans.</p>
          <Link href="/formation/course" className="btn btn-primary btn-lg" style={{ textDecoration: 'none' }}>Commencer la formation →</Link>
        </div>
      </div>
    </div>
  );
}
