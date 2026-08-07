interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="stat-card" style={{ textAlign: 'center', padding: '32px' }}>
      <div className="stat-val" style={{ fontSize: '2.5rem' }}>{number}</div>
      <div className="stat-lbl" style={{ fontSize: '1rem', marginTop: '8px' }}>{label}</div>
    </div>
  );
}
