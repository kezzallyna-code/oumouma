'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`} style={{ background: 'var(--blanc)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
            <button 
              className="accordion-header" 
              onClick={() => toggle(index)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', color: 'var(--noir)' }}
            >
              <span>{item.question}</span>
              <span className="accordion-icon" style={{ fontSize: '1.5rem', color: 'var(--accent)', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                ▾
              </span>
            </button>
            <div className="accordion-content" style={{ maxHeight: isOpen ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}>
              <div style={{ padding: '0 24px 24px', color: 'var(--gris-bleu)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
