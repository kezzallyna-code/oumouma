import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTA({ title, description, buttonText, buttonLink }: CTAProps) {
  return (
    <section className="section section-alt">
      <div className="form-container text-center" style={{ maxWidth: '700px', backgroundColor: 'var(--blanc)' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', color: 'var(--noir)', marginBottom: '16px' }}>
          {title}
        </h2>
        <p style={{ color: 'var(--gris-bleu)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
          {description}
        </p>
        <Link href={buttonLink} className="btn btn-primary btn-lg">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
