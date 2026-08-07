import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--rose)' }}><Image src="/logo.jpg" alt="Oumouma Logo" width={65} height={65} style={{ objectFit: 'contain' }} /><span>Oumouma</span></div>
          <p>La plateforme algérienne qui accompagne les mamans avec douceur, confiance et bienveillance.</p>
        </div>
        <div className="footer-col">
          <h4>Plateforme</h4>
          <Link href="/a-propos">À propos</Link>
          <Link href="/search">Trouver une pro</Link>
          <Link href="/choice">Devenir professionnelle</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link href="/services/baby-sitting">Baby-sitting</Link>
          <Link href="/services/post-partum">Post-partum</Link>
          <Link href="/services/sante">Santé & experts</Link>
        </div>
        <div className="footer-col">
          <h4>Légal</h4>
          <Link href="/cgu">CGU</Link>
          <Link href="/confidentialite">Politique de confidentialité</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">© 2026 OUMOUMA · Tous droits réservés · Conçu avec 💗 pour les mamans algériennes</div>
    </footer>
  );
}

