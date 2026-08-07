interface TrustBadgeProps {
  icon: string;
  title: string;
}

export default function TrustBadges({ badges }: { badges: TrustBadgeProps[] }) {
  return (
    <div className="badges-grid" style={{ marginBottom: '40px' }}>
      {badges.map((badge, index) => (
        <div key={index} className="badge-card">
          <div className="badge-icon">{badge.icon}</div>
          <h4>{badge.title}</h4>
        </div>
      ))}
    </div>
  );
}
