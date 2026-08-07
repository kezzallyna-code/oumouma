import Link from 'next/link';

interface NavbarProps {
  type?: 'default' | 'back' | 'search' | 'none';
  backLink?: string;
  backText?: string;
}

export default function Navbar({ type = 'default', backLink = '/', backText = '← Retour' }: NavbarProps) {
  if (type === 'none') return null;

  return (
    <nav>
      <div className="nav-logo">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Oumouma</Link>
      </div>

      {type === 'default' && (
        <>
          <div className="nav-links">
            <Link href="/">Accueil</Link>
            <Link href="/search">Trouver une pro</Link>
            <Link href="/services">Nos services</Link>
            <Link href="/a-propos">À propos</Link>
          </div>
          <div className="nav-actions">
            <Link href="/login" className="btn btn-secondary btn-sm">Se connecter</Link>
            <Link href="/choice" className="btn btn-primary btn-sm">S'inscrire</Link>
          </div>
        </>
      )}

      {type === 'back' && (
        <div className="nav-actions">
          <Link href={backLink} className="btn btn-light btn-sm">{backText}</Link>
        </div>
      )}

      {type === 'search' && (
        <>
          <div className="nav-links">
            <Link href="/">Accueil</Link>
            <Link href="/dashboard/mom">Mon espace</Link>
          </div>
          <div className="nav-actions">
            <Link href="/dashboard/mom" className="btn btn-primary btn-sm">Mon compte</Link>
          </div>
        </>
      )}
    </nav>
  );
}
