"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 0, text: '✅ Réservation confirmée – Vendredi 20 juin à 14h00', type: 'system' },
    { id: 1, text: 'Bonjour Sarah ! Je viens de voir votre demande de réservation. Je suis disponible le 20 juin, pas de souci 😊', type: 'received', time: '14:15' },
    { id: 2, text: 'Bonjour Nadia ! Super, merci beaucoup. Mon bébé a 8 mois, il y a des choses importantes à savoir ?', type: 'sent', time: '14:18' },
    { id: 3, text: 'Oui bien sûr ! Pouvez-vous me dire ses horaires de sieste habituels et s\'il a des allergies ? Je ferai en sorte que tout se passe parfaitement 🌸', type: 'received', time: '14:20' },
    { id: 4, text: 'Il fait sa sieste à 15h environ, pas d\'allergies connues. Je vous laisserai tout le nécessaire bien sûr !', type: 'sent', time: '14:21' },
    { id: 5, text: 'Bien sûr ! Je serai là à 14h 😊', type: 'received', time: '14:22' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMsg = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), text: input, type: 'sent', time: 'maintenant' }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: 'Merci pour votre message ! Je vous réponds dès que possible 🌸', type: 'received', time: 'maintenant' }]);
    }, 1200);
  };

  return (
    <div className="screen active">
      <Navbar type="back" backLink="/dashboard/mom" backText="← Dashboard" />
      <div className="chat-layout">
        <div className="chat-sidebar">
          <div className="chat-sidebar-header">
            <h3>Messages</h3>
            <input className="chat-search" type="text" placeholder="🔍 Rechercher…" />
          </div>
          <div className="chat-contacts">
            <div className="contact-item active">
              <div className="contact-avatar">👩</div>
              <div className="contact-info">
                <div className="contact-name">Nadia Benali</div>
                <div className="contact-preview">Bien sûr ! Je serai là à 14h 😊</div>
              </div>
              <div className="contact-meta"><div className="contact-time">14:22</div><div className="contact-badge">2</div></div>
            </div>
            <div className="contact-item">
              <div className="contact-avatar">🤱</div>
              <div className="contact-info">
                <div className="contact-name">Yasmina Chaoui</div>
                <div className="contact-preview">Votre réservation est confirmée ✅</div>
              </div>
              <div className="contact-meta"><div className="contact-time">Hier</div></div>
            </div>
            <div className="contact-item">
              <div className="contact-avatar">👩‍⚕️</div>
              <div className="contact-info">
                <div className="contact-name">Dr. Aicha Meziane</div>
                <div className="contact-preview">Bonne journée Madame Sarah !</div>
              </div>
              <div className="contact-meta"><div className="contact-time">Lun</div></div>
            </div>
            <div className="contact-item">
              <div className="contact-avatar" style={{ background: 'var(--accent)', color: 'white', fontSize: '.9rem', fontWeight: 700 }}>OU</div>
              <div className="contact-info">
                <div className="contact-name">Support OUMOUMA</div>
                <div className="contact-preview">Nous sommes là pour vous aider !</div>
              </div>
              <div className="contact-meta"><div className="contact-time">Dim</div></div>
            </div>
          </div>
        </div>
        <div className="chat-main">
          <div className="chat-header">
            <div className="chat-header-avatar">👩</div>
            <div className="chat-header-info"><h4>Nadia Benali</h4><p>● En ligne</p></div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
              <Link href="/profile/nadia" className="btn btn-sm btn-secondary" style={{ textDecoration: 'none' }}>Voir profil</Link>
              <Link href="/booking" className="btn btn-sm btn-primary" style={{ textDecoration: 'none' }}>📅 Réserver</Link>
            </div>
          </div>
          <div className="chat-messages">
            {messages.map((m) => (
              m.type === 'system' ? (
                <div key={m.id} className="system-message"><div className="message-bubble">{m.text}</div></div>
              ) : (
                <div key={m.id} className={`message ${m.type}`}>
                  <div className="message-bubble">{m.text}</div>
                  <div className="message-time">{m.time}</div>
                </div>
              )
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Écrire un message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
            />
            <button className="chat-send" onClick={sendMsg}>➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}
