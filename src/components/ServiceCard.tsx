import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

export default function ServiceCard({ icon, title, description, link, linkText = 'En savoir plus' }: ServiceCardProps) {
  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <div className="service-card" style={{ height: '100%' }}>
        <div className="service-icon" style={{ background: 'var(--beige)' }}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="service-tag">{linkText} &rarr;</span>
      </div>
    </Link>
  );
}
