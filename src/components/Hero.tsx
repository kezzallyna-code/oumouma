import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  badge,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroProps) {
  // If the title contains a specific highlight word, we could split it, but for simplicity we assume the caller handles spans if needed inside the string, 
  // or we just render the raw string. In React, passing JSX to title is better if we want to style parts.
  return (
    <section className="hero" style={{ minHeight: 'auto', padding: '100px 48px' }}>
      <div className="hero-content" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '800px' }}>
        {badge && (
          <div className="hero-badge" style={{ justifyContent: 'center', margin: '0 auto 24px' }}>
            <span>✨</span> {badge}
          </div>
        )}
        <h1 style={{ fontSize: '3.6rem', marginBottom: '24px' }}>{title}</h1>
        <p style={{ fontSize: '1.2rem', margin: '0 auto 40px', maxWidth: '600px' }}>{subtitle}</p>
        <div className="hero-cta" style={{ justifyContent: 'center' }}>
          {ctaText && ctaLink && (
            <Link href={ctaLink} className="btn btn-primary btn-lg">
              {ctaText}
            </Link>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Link href={secondaryCtaLink} className="btn btn-secondary btn-lg">
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
