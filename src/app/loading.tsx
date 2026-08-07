export default function Loading() {
  return (
    <div className="loading-screen" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--blanc)' }}>
      {/* Animated OUMOUMA Logo or simple loader */}
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '24px', animation: 'pulse 1.5s infinite alternate' }}>
        OUMOUMA
      </h1>
      
      {/* CSS Loader */}
      <div className="spinner" style={{ width: '40px', height: '40px', border: '4px solid var(--rose)', borderTop: '4px solid var(--accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      
      <p style={{ marginTop: '24px', color: 'var(--gris-bleu)', fontSize: '1rem', fontWeight: 500 }}>
        Nous préparons votre expérience...
      </p>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { opacity: 0.6; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
