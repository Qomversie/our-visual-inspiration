import type { ReactNode } from 'react';
import { ArrowRight, ArrowUp, Check, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { headingLines } from '@/lib/homepage-content';

export function Stars() {
  return <span className="q-stars" aria-label="5 van 5 sterren">{Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}</span>;
}
export function Google() { return <span className="q-google" aria-label="Google">G</span>; }

export function SmileMark({ className = 'q-smile' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" aria-hidden="true"><path d="M20 0A20 20 0 0 1 0 20V14A14 14 0 0 0 14 0Z" fill="currentColor" /></svg>;
}
/* DotSmile: groot stippenraster (tech-halftoon) waarbij de smile van Qomversie in Ginger stippen is uitgetekend. */
export function DotSmile({ className = 'q-matrix' }: { className?: string }) {
  const size = 560, step = 26, cx = size, cy = 0, rMid = 268;
  const grid: { x: number; y: number; o: number; plus: boolean }[] = [];
  for (let y = step / 2; y <= size; y += step) for (let x = step / 2; x <= size; x += step) {
    const d = Math.hypot(x - cx, y - cy);
    grid.push({ x, y, o: .06 + .1 * Math.exp(-((d - rMid) ** 2) / (2 * 62 * 62)), plus: (x * 7 + y * 13) % 101 < 4 });
  }
  const arc: { x: number; y: number }[] = [];
  for (let a = Math.PI / 2; a <= Math.PI + 1e-9; a += 16 / rMid) arc.push({ x: cx + rMid * Math.cos(a), y: cy + rMid * Math.sin(a) });
  return <svg className={className} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" focusable="false">
    {grid.map((g, i) => g.plus
      ? <path key={i} d={`M${g.x - 5} ${g.y}h10M${g.x} ${g.y - 5}v10`} stroke="currentColor" strokeWidth={1.2} fill="none" opacity={Math.min(.2, g.o + .05)} />
      : <circle key={i} cx={g.x} cy={g.y} r={2.1} fill="currentColor" opacity={g.o} />)}
    {arc.map((p, i) => <circle key={`s${i}`} cx={p.x} cy={p.y} r={4.6} fill="var(--q-ginger)" opacity={.85} />)}
  </svg>;
}
export function Label({ children }: { children: ReactNode }) { return <p className="q-label"><SmileMark />{children}</p>; }

export function SectionHeader({ label, title, children }: { label?: string; title: string; children?: ReactNode }) {
  const lines = headingLines[title];
  return <div className="q-section-header">{label && <Label>{label}</Label>}<h2 aria-label={title} className={`q-h2${title === 'Succesverhalen' ? ' q-h2--joined' : ''}`}>{lines ? <>{lines[0]}{title !== 'Succesverhalen' && <br/>}{lines[1]}</> : title}</h2>{children}</div>;
}

export function CtaBlock({ children = 'Gratis adviesgesprek', variant = 'primary', href = '#contact', note }: { children?: ReactNode; variant?: 'primary' | 'secondary'; href?: string; note?: string }) {
  const button = <Button asChild variant={variant === 'primary' ? 'advice' : 'quiet'}><a href={href}>{children}<ArrowRight aria-hidden="true" /></a></Button>;
  if (!note) return button;
  return <div className="q-cta">{button}<p className="q-note">{note}</p></div>;
}

export function RotatingBadge({ text = 'GRATIS ADVIESGESPREK • 30 MINUTEN • ', href = '#contact', id = 'badge-circle' }: { text?: string; href?: string; id?: string }) {
  return <a className="q-badge-rotate" href={href} aria-label="Gratis adviesgesprek van 30 minuten"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs><text><textPath href={`#${id}`} textLength="237">{text}</textPath></text></svg><SmileMark className="q-smile-badge" /></a>;
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
