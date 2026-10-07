import type { ReactNode } from 'react';
import { ArrowRight, ArrowUp, Check, Plus, Smile, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Stars() {
  return <span className="q-stars" aria-label="5 van 5 sterren">{Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}</span>;
}
export function Google() { return <span className="q-google" aria-label="Google">G</span>; }

export function SectionHeader({ label, title, statement = false, children }: { label?: string; title: string; statement?: boolean; children?: ReactNode }) {
  return <div className="q-section-header">{label && <p className="q-label">{label}</p>}<h2 className={statement ? 'q-statement' : 'q-h2'}>{title}</h2>{children}</div>;
}

export function CtaBlock({ children = 'Gratis adviesgesprek', variant = 'primary', href = '#contact', note }: { children?: ReactNode; variant?: 'primary' | 'secondary'; href?: string; note?: string }) {
  const button = <Button asChild variant={variant === 'primary' ? 'advice' : 'quiet'}><a href={href}>{children}<ArrowRight aria-hidden="true" /></a></Button>;
  if (!note) return button;
  return <div className="q-cta">{button}<p className="q-note">{note}</p></div>;
}

export function RotatingBadge({ text = 'GRATIS ADVIESGESPREK • 30 MINUTEN • ', href = '#contact', id = 'badge-circle' }: { text?: string; href?: string; id?: string }) {
  return <a className="q-badge-rotate" href={href} aria-label="Gratis adviesgesprek van 30 minuten"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs><text><textPath href={`#${id}`} textLength="237">{text}</textPath></text></svg><Smile aria-hidden="true" strokeWidth="1.5" /></a>;
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="q-check-list">{items.map(item => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return <details className="q-faq"><summary>{question}<Plus aria-hidden="true" /></summary><p className="q-text">{answer}</p></details>;
}

export function ShortcodeBlock({ code, note }: { code: string; note: string }) {
  return <div className="q-shortcode"><code>[shortcode: {code}]</code><p className="q-note">{note}</p></div>;
}

export function CaseCard({ name, line, image }: { name: string; line: string; image?: string }) {
  return <article className="q-case-card">
    {image ? <img src={image} alt={`Project voor ${name}, website gebouwd door Qomversie in Friesland`} loading="lazy" /> : <div className="q-case-media" role="img" aria-label={`Projectfoto ${name} volgt`} />}
    <a className="q-case-corner" href="#contact" aria-label={`Meer over ${name}`}><ArrowRight aria-hidden="true" /></a>
    <div className="q-case-caption"><h3>{name}</h3><p><ArrowUp aria-hidden="true" />{line}</p></div>
  </article>;
}

function Band({ text, tone }: { text: string; tone: 'ink' | 'ginger' }) {
  const parts = text.split('✦').map(s => s.trim()).filter(Boolean);
  const row = parts.map(p => <span key={p}>{p} <b>✦</b> </span>);
  return <div className={`q-band q-band--${tone}`}><div className="q-band-track">{[0, 1, 2, 3].map(i => <span key={i}>{row}</span>)}</div></div>;
}

export function SlantedBands({ first = 'Meer aanvragen ✦ Minder offertes tikken ✦ Korte lijntjes ✦ Nuchter en Fries ✦ Resultaatgarantie ✦', second = 'Website die klanten oplevert ✦ Eerst begrijpen, dan bouwen ✦ Geen gedoe ✦ Gewoon resultaat ✦' }: { first?: string; second?: string }) {
  return <div className="q-bands" role="presentation" aria-hidden="true"><Band text={second} tone="ginger" /><Band text={first} tone="ink" /></div>;
}
