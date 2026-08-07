'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login handling (backendless)
    if (email && password) {
      router.push('/dashboard/mom');
    }
  };

  const handleGoogleLogin = () => {
    // Mock Google login
    router.push('/dashboard/mom');
  };

  return (
    <div className="login-layout" style={{ display: 'flex', minHeight: '100vh', background: 'var(--blanc)' }}>
      {/* Left side: Branding / Illustration */}
      <div className="login-branding" style={{ flex: 1, background: 'linear-gradient(135deg, var(--rose), var(--bleu))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px', position: 'relative', overflow: 'hidden' }}>
        {/* Soft decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.3)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(255,214,224,0.4)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '400px' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'var(--noir)', marginBottom: '24px', cursor: 'pointer' }}>OUMOUMA</h1>
          </Link>
          <p style={{ fontSize: '1.2rem', color: 'var(--noir)', opacity: 0.8, lineHeight: 1.6 }}>
            Heureuse de vous revoir.<br/>
            Accédez à votre espace sécurisé pour gérer vos réservations et prendre soin de votre famille.
          </p>
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="login-form-area" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', position: 'relative' }}>
        
        <Link href="/" style={{ position: 'absolute', top: '32px', right: '48px', color: 'var(--gris-bleu)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
          Retour à l'accueil
        </Link>

        <div className="form-container" style={{ width: '100%', maxWidth: '480px', margin: 0, boxShadow: 'none', padding: '0' }}>
          <h2 className="form-title" style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Connexion</h2>
          <p className="form-subtitle" style={{ marginBottom: '32px' }}>Entrez vos identifiants pour accéder à votre compte.</p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Adresse email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="vous@email.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="form-group" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label htmlFor="password" style={{ marginBottom: '0' }}>Mot de passe</label>
                <Link href="#" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>Mot de passe oublié ?</Link>
              </div>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  placeholder="Votre mot de passe" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gris-bleu)', fontSize: '1rem' }}
                >
                  {showPassword ? "👁️‍🗨️" : "👁️"}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-item">
                <input type="checkbox" />
                <span>Se souvenir de moi</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', marginTop: '16px' }}>
              Se connecter
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', margin: '32px 0', color: 'var(--gris-bleu)', fontSize: '0.85rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--gris-clair)' }}></div>
            <span style={{ padding: '0 16px' }}>Ou continuer avec</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--gris-clair)' }}></div>
          </div>

          <button 
            type="button" 
            onClick={handleGoogleLogin}
            className="btn btn-light" 
            style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '1rem', gap: '12px' }}
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '20px' }} />
            Google
          </button>

          <div className="form-link" style={{ marginTop: '32px' }}>
            Vous n'avez pas de compte ? <Link href="/choice">Créez-en un ici</Link>
          </div>

        </div>
      </div>
      
      {/* Responsive layout fix for small screens would go in globals.css, but this flex-based approach handles basic shrinking well. */}
    </div>
  );
}
