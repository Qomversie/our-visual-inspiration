import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode, type TouchEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, Check, Play, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { caseHoverNote, clients, experienceStats, headingLines, results, steps } from '@/lib/homepage-content';
import bank from '@/assets/E-mail_header_2.png.asset.json';

export function Stars() {
  return <span className="q-stars" aria-label="5 van 5 sterren">{Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}</span>;
}
export function Google() { return <span className="q-google" aria-label="Google">G</span>; }

export function SmileMark({ className = 'q-smile' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" aria-hidden="true"><path d="M20 0A20 20 0 0 1 0 20V14A14 14 0 0 0 14 0Z" fill="currentColor" /></svg>;
}
/* SmileArc: outer edge of the logo smile; render twice (rear + front) around media for the weave. */
export function SmileArc({ front = false }: { front?: boolean }) {
  return <svg className={`q-arc${front ? ' q-arc--front' : ''}`} viewBox="0 0 560 560" fill="none" aria-hidden="true"><path d="M558 2A556 556 0 0 1 2 558" stroke="currentColor" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke"/></svg>;
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

export function LogoStrip() {
  return <section id="klantlogos" className="q-section q-section--white q-logo-strip" aria-label="Onze klanten"><div className="q-container q-logo-strip-inner"><Label>Vertrouwd door 50+ Friese ondernemers</Label><div className="q-client-window"><div className="q-client-track">{[0, 1].map(copy => <div className="q-client-group" key={copy} aria-hidden={copy === 1}>{clients.map(name => <div className="q-client" key={name}>{name}<small>KLANTLOGO VOLGT</small></div>)}</div>)}</div></div></div></section>;
}

export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      setDisplay(0);
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1500, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref} aria-label={`${value}${suffix}`} data-final={value}><span aria-hidden="true">{display}{suffix}</span></span>;
}

export function HeroStats() {
  return <div className="q-hero-stats">{experienceStats.map(stat => <div className="q-hero-stat" key={stat.label}><p><CountUp value={stat.value} suffix="+"/></p><span>{stat.label.charAt(0) + stat.label.slice(1).toLowerCase()}</span></div>)}</div>;
}

/* Wide photo panel: the smile outline wraps the whole block, behind at the top edge and in front at the bottom-right corner. */
export function PhotoCta() {
  return <section className="q-photo-cta q-arc-host" aria-labelledby="photo-cta-title">
    <div className="q-photo-cta-frame">
      <img src={bank.url} alt="Bouke van Qomversie met een collega op de bank"/>
      <div className="q-photo-cta-shade" aria-hidden="true"/>
      <div className="q-photo-cta-copy"><Label>KLAAR VOOR DE VOLGENDE STAP?</Label><h2 id="photo-cta-title" className="q-h2" aria-label="Geen gedoe, gewoon resultaat."><span className="q-h2-outline">Geen gedoe,</span><br/>gewoon resultaat.</h2><p className="q-text">In 30 minuten weet je wat jouw website kan opleveren. Gratis en vrijblijvend.</p><CtaBlock/></div>
    </div>
    <SmileArc/>
    <SmileArc front/>
  </section>;
}

/* ResultsCarousel: one project per slide from the results list; arrows, counter, keyboard and swipe. */
export function ResultsCarousel({ onPlay }: { onPlay?: (src: string) => void }) {
  const [index, setIndex] = useState(0);
  const touch = useRef<number | null>(null);
  const last = results.length - 1;
  const go = (d: number) => setIndex(i => Math.max(0, Math.min(last, i + d)));
  const pad = (n: number) => String(n).padStart(2, '0');
  const onKey = (e: KeyboardEvent) => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); };
  const onEnd = (e: TouchEvent) => { if (touch.current === null) return; const dx = (e.changedTouches[0]?.clientX ?? touch.current) - touch.current; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); touch.current = null; };
  return <div className="q-container q-results">
    <div className="q-results-heading">
      <Label>WAT ONZE KLANTEN BEREIKEN</Label>
      <h2 className="q-h2 q-results-title" aria-label="Succesverhalen"><span>Succes</span><br/>verhalen</h2>
      <p className="q-text q-intro">Geen loze beloftes, maar meetbare resultaten. Dit is wat ambitieuze ondernemers die met ons samenwerken écht bereiken.</p>
    </div>
    <div className="q-results-viewport" role="region" aria-roledescription="carrousel" aria-label="Succesverhalen" tabIndex={0} onKeyDown={onKey} onTouchStart={e => { touch.current = e.touches[0]?.clientX ?? null; }} onTouchEnd={onEnd}>
      <div className="q-results-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {results.map((r, i) => <article className="q-result-slide" key={r.id} aria-roledescription="slide" aria-label={`${i + 1} van ${results.length}: ${r.client}`} aria-hidden={i !== index} inert={i !== index}>
          <div className="q-result-copy">
            <p className="q-result-client">{r.client}</p>
            <h3 className="q-result-title">{r.title}</h3>
            <p className="q-result-text">{r.text}</p>
            <ul className="q-result-tags">{r.tags.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="q-result-stage">
            {r.media.length === 0 ? <div className="q-result-brand" role="img" aria-label={`Logo ${r.client} volgt`}><strong>{r.client}</strong><small>KLANTLOGO VOLGT</small></div>
              : <div className={`q-result-media${r.media.length > 1 ? ' q-result-media--duo' : ''}`}>{r.media.map((m, k) => m.type === 'video'
                ? <Button key={k} variant="ghost" className="q-result-video" onClick={() => onPlay?.(m.src)} disabled={!onPlay} aria-label={`${m.alt} afspelen`}><img src={m.poster} alt="" loading="lazy"/><span className="q-video-play"><Play aria-hidden="true"/></span></Button>
                : m.src ? <img key={k} src={m.src} alt={m.alt} loading="lazy"/> : <div key={k} className="q-result-placeholder" role="img" aria-label={m.alt}>PROJECTFOTO VOLGT</div>)}</div>}
            <div className="q-result-badges">{r.badges.map(b => <div className="q-result-badge" key={b.value}><p><ArrowUp aria-hidden="true"/>{b.value}</p><span>{b.label}</span></div>)}</div>
          </div>
        </article>)}
      </div>
    </div>
    <div className="q-results-nav">
      <Button variant="round" onClick={() => go(-1)} disabled={index === 0} aria-label="Vorig succesverhaal"><ArrowLeft aria-hidden="true"/></Button>
      <span className="q-results-count" aria-live="polite">{pad(index + 1)} / {pad(results.length)}</span>
      <Button variant="round" onClick={() => go(1)} disabled={index === last} aria-label="Volgend succesverhaal"><ArrowRight aria-hidden="true"/></Button>
    </div>
  </div>;
}
