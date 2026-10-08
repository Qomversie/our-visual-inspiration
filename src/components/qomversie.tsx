import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode, type TouchEvent } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, Check, Play, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { caseHoverNote, clients, experienceStats, headingLines, results, steps } from '@/lib/homepage-content';
import graph from '@/assets/conversiegrafiek.png.asset.json';
import still from '@/assets/videostill-joke.jpg.asset.json';
import bank from '@/assets/E-mail_header_2.png.asset.json';

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
  return <section className="q-photo-cta q-smile-outline-host" aria-labelledby="photo-cta-title">
    <div className="q-photo-cta-frame">
      <img src={bank.url} alt="Bouke van Qomversie met een collega op de bank"/>
      <div className="q-photo-cta-shade" aria-hidden="true"/>
      <div className="q-photo-cta-copy"><Label>KLAAR VOOR DE VOLGENDE STAP?</Label><h2 id="photo-cta-title" className="q-h2" aria-label="Geen gedoe, gewoon resultaat."><span className="q-h2-outline">Geen gedoe,</span><br/>gewoon resultaat.</h2><p className="q-text">In 30 minuten weet je wat jouw website kan opleveren. Gratis en vrijblijvend.</p><CtaBlock/></div>
    </div>
    <SmileOutline/>
    <SmileOutline front/>
  </section>;
}

/* Vertical slider: one wide block at a time, slid with the arrows, the keyboard or a swipe. */
export function ResultsSlider({ onPlay }: { onPlay?: () => void }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [heights, setHeights] = useState<number[]>([]);
  const [gap, setGap] = useState(0);
  const touchStart = useRef<number | null>(null);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const measure = () => {
      const blocks = [...element.children] as HTMLElement[];
      setHeights(blocks.map(block => block.offsetHeight));
      setGap(parseFloat(getComputedStyle(element).rowGap) || 0);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => { observer.disconnect(); };
  }, []);
  const offset = heights.slice(0, index).reduce((total, height) => total + height + gap, 0);

  const go = (direction: number) => setIndex(current => Math.max(0, Math.min(results.length - 1, current + direction)));
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp') { event.preventDefault(); go(-1); }
    if (event.key === 'ArrowDown') { event.preventDefault(); go(1); }
  };
  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => { touchStart.current = event.touches[0]?.clientY ?? null; };
  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (start === null) return;
    const end = event.changedTouches[0]?.clientY;
    if (end === undefined) return;
    const delta = start - end;

    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
  };
  return <div className="q-results">
    <div className="q-results-head">
      <div className="q-results-heading"><Label>WAT ONZE KLANTEN BEREIKEN</Label><h2 className="q-h2 q-results-title" aria-label="Succesverhalen"><span>Succes</span><br/>verhalen</h2></div>
      <p className="q-text q-intro">Geen loze beloftes, maar meetbare resultaten. Dit is wat ambitieuze ondernemers die met ons samenwerken écht bereiken.</p>
      <div className="q-results-nav">
        <Button variant="round" onClick={() => go(-1)} disabled={index === 0} aria-label="Vorig succesverhaal"><ArrowUp aria-hidden="true"/></Button>
        <span className="q-results-count" aria-live="polite">{index + 1} / {results.length}</span>
        <Button variant="round" onClick={() => go(1)} disabled={index === results.length - 1} aria-label="Volgend succesverhaal"><ArrowDown aria-hidden="true"/></Button>
      </div>
    </div>
    <div className="q-results-viewport" style={{ height: heights[index] ? `${heights[index]}px` : undefined }} tabIndex={0} role="group" aria-label="Succesverhalen, één van de drie zichtbaar" onKeyDown={onKeyDown} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="q-results-track" ref={track} style={{ transform: `translateY(${-offset}px)` }}>

        {results.map((result, position) => <article className={`q-result-block${result.media === 'none' ? ' q-result-block--text' : ''}`} key={result.id} aria-hidden={position !== index} inert={position !== index}>
          {result.media === 'video' && <Button variant="ghost" className="q-result-media q-result-video" onClick={onPlay} disabled={!onPlay} aria-label="Videoreview van Joke Bleijerveld afspelen"><img src={still.url} alt="Joke Bleijerveld" loading="lazy"/><span className="q-video-play"><Play aria-hidden="true"/></span></Button>}
          {result.media === 'graph' && <div className="q-result-media"><img src={graph.url} alt="Shopify conversiegrafiek: 2,79%, 40% hoger dan de vorige periode" loading="lazy"/></div>}
          <div className="q-result-body">
            <p className="q-result-client">{result.name} · {result.kind}</p>
            <div className="q-result-figure"><p className="q-result-number"><CountUp value={result.value} suffix={result.suffix}/></p></div>
            <div className="q-result-copy"><p className="q-result-description">{result.description}</p><p className="q-result-quote">{result.quote}</p></div>
          </div>
        </article>)}
      </div>
    </div>
  </div>;
}
