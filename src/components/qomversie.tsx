import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { ArrowRight, ArrowUp, Check, Play, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { caseHoverNote, headingLines, results, steps } from '@/lib/homepage-content';
import graph from '@/assets/conversiegrafiek.png.asset.json';
import still from '@/assets/videostill-joke.jpg.asset.json';

export function Stars() {
  return <span className="q-stars" aria-label="5 van 5 sterren">{Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}</span>;
}
export function Google() { return <span className="q-google" aria-label="Google">G</span>; }

export function SmileMark({ className = 'q-smile' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" aria-hidden="true"><path d="M20 0A20 20 0 0 1 0 20V14A14 14 0 0 0 14 0Z" fill="currentColor" /></svg>;
}
export function SmileOutline({ front = false }: { front?: boolean }) {
  return <svg className={`q-smile-outline${front ? ' q-smile-outline--front' : ''}`} viewBox="-0.2 -0.2 20.4 20.4" preserveAspectRatio="none" aria-hidden="true"><path d="M20 0A20 20 0 0 1 0 20V14A14 14 0 0 0 14 0Z" vectorEffect="non-scaling-stroke" /></svg>;
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

export function CheckList({ items, badge = false }: { items: string[]; badge?: boolean }) {
  return <ul className={`q-check-list${badge ? ' q-check-list--badge' : ''}`}>{items.map(item => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export function Workflow() {
  return <div className="q-workflow"><SectionHeader label="ONZE WERKWIJZE" title="Eerst begrijpen, dan bouwen"/><div className="q-steps">{steps.map((s,i)=><article className="q-step" key={s.title}><span className="q-step-dot" aria-hidden="true">{i+1}</span><div className="q-step-body"><div className="q-step-head"><h3 className="q-h3">{s.title}</h3><span className="q-step-pill">{s.meta}</span></div>{'blocks' in s&&s.blocks?<div className="q-step-blocks">{s.blocks.map(b=><div key={b.word}><strong>{b.word}</strong><span>{b.line}</span></div>)}</div>:<p className="q-text">{s.text}</p>}</div></article>)}</div><div className="q-center"><CtaBlock note="30 minuten · vrijblijvend · op locatie of videocall"/></div></div>;
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return <details className="q-faq"><summary>{question}<Plus aria-hidden="true" /></summary><p className="q-text">{answer}</p></details>;
}

export function ShortcodeBlock({ code, note }: { code: string; note: string }) {
  return <div className="q-shortcode"><code>[shortcode: {code}]</code><p className="q-note">{note}</p></div>;
}

export function CaseCard({ name, line, image, tag, featured = false }: { name: string; line: string; image?: string; tag?: string; featured?: boolean }) {
  return <article className={`q-case-card${featured ? ' q-case-card--featured' : ''}`}>
    {image ? <img src={image} alt={`Project voor ${name}, website gebouwd door Qomversie in Friesland`} loading="lazy" /> : <div className="q-case-media" role="img" aria-label={`Projectfoto ${name} volgt`} />}
    {tag && <span className="q-case-tag">{tag}</span>}
    <a className="q-case-corner" href="#contact" aria-label={`Meer over ${name}`}><ArrowRight aria-hidden="true" /></a>
    <div className="q-case-caption"><h3>{name}</h3><p><ArrowUp aria-hidden="true" />{line}</p><p className="q-case-more">{caseHoverNote}</p></div>
  </article>;
}

function Podium({ id, onPlay }: { id: string; onPlay: (() => void) | undefined }) {
  if (id === 'cowboy') return <div className="q-browser-frame"><div className="q-browser-bar"><i/><i/><i/><span>Conversiepercentage · Shopify</span></div><img className="q-browser-img" src={graph.url} alt="Shopify-grafiek: conversiepercentage 2,79%, 40% hoger dan de vorige periode" loading="lazy" /></div>;
  if (id === 'joke') return <button type="button" className="q-podium-video" onClick={onPlay} aria-label="Videoreview van Joke Bleijerveld afspelen"><img src={still.url} alt="" loading="lazy" /><span className="q-video-play"><Play aria-hidden="true"/></span></button>;
  return <div className="q-podium-compare"><div className="q-time" role="img" aria-label="Voorheen 2 weken werk, nu 1 dag"><div className="q-time-row"><b>Voorheen</b><span className="q-time-bar"/><span>2 weken</span></div><div className="q-time-row q-time-row--now"><b>Nu</b><span className="q-time-bar"/><span>1 dag</span></div></div><div className="q-case-media q-podium-photo" role="img" aria-label="Projectfoto Hoogterp Verf volgt">Foto volgt</div></div>;
}

export function SuccessTabs({ onPlay }: { onPlay?: () => void }) {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [stopped, setStopped] = useState(false);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const pick = (i: number, focus = false) => { setActive(i); setStopped(true); if (focus) refs.current[i]?.focus(); };
  const onKey = (e: KeyboardEvent) => {
    const n = results.length; const map: Record<string, number> = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: n - 1 };
    if (e.key in map) { e.preventDefault(); pick((map[e.key] + n) % n, true); }
  };
  const r = results[active] ?? results[0]!;
  return <div className={`q-tabs${hover ? ' is-paused' : ''}${stopped ? ' is-stopped' : ''}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <div className="q-tab-list" role="tablist" aria-label="Succesverhalen" aria-orientation="vertical" onKeyDown={onKey}>
      {results.map((x, i) => <button key={x.id} ref={el => { refs.current[i] = el; }} role="tab" id={`tab-${x.id}`} aria-controls={`panel-${x.id}`} aria-selected={i === active} tabIndex={i === active ? 0 : -1} className="q-tab" onClick={() => pick(i)}>
        <span className="q-tab-name">{x.name}</span><span className="q-tab-result">{x.tab}</span>
        {i === active && <span className="q-tab-progress" aria-hidden="true"><span key={active} onAnimationEnd={() => setActive((active + 1) % results.length)} /></span>}
      </button>)}
    </div>
    <div className="q-podium" role="tabpanel" id={`panel-${r.id}`} aria-labelledby={`tab-${r.id}`} key={r.id}>
      <p className="q-podium-number">{r.number}</p><p className="q-podium-text">{r.text}</p>
      <Podium id={r.id} onPlay={onPlay} />
      <a className="q-podium-link" href="#cases">Bekijk de case<ArrowRight aria-hidden="true"/></a>
    </div>
  </div>;
}
