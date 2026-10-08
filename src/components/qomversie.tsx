import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode, type TouchEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, Check, Play, Plus, Star, TrendingUp, X } from 'lucide-react';
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
  return <section className="q-photo-cta" aria-labelledby="photo-cta-title">
    <div className="q-photo-cta-frame">
      <img src={bank.url} alt="Bouke van Qomversie met een collega op de bank"/>
      <div className="q-photo-cta-shade" aria-hidden="true"/>
      <div className="q-photo-cta-copy"><Label>KLAAR VOOR DE VOLGENDE STAP?</Label><h2 id="photo-cta-title" className="q-h2" aria-label="Geen gedoe, gewoon resultaat."><span className="q-h2-outline">Geen gedoe,</span><br/>gewoon resultaat.</h2><p className="q-text">In 30 minuten weet je wat jouw website kan opleveren. Gratis en vrijblijvend.</p><CtaBlock/></div>
    </div>
  </section>;
}

/* ResultCards owns pagination and the shared video lightbox for homepage and styleguide. */
export function ResultCards() {
  const perPage = 3;
  const pages = Math.max(1, Math.ceil(results.length / perPage));
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [video, setVideo] = useState<{ url: string; poster: string | undefined; name: string }>();
  const [videoError, setVideoError] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touch = useRef<{ x: number; y: number } | undefined>(undefined);
  const changePage = (next: number) => {
    const target = Math.max(0, Math.min(pages - 1, next));
    if (target === page) return;
    setDirection(target > page ? 1 : -1);
    setPage(target);
  };
  const openVideo = (item: { video: string; poster?: string; name: string }) => {
    setVideoError(false);
    setVideo({ url: item.video, poster: item.poster, name: item.name });
    dialogRef.current?.showModal();
  };
  useEffect(() => {
    if (video) videoRef.current?.play().catch(() => {});
  }, [video]);
  const closeVideo = () => {
    videoRef.current?.pause();
    dialogRef.current?.close();
    setVideo(undefined);
  };
  const swipe = (event: TouchEvent<HTMLDivElement>) => {
    const start = touch.current;
    const end = event.changedTouches[0];
    if (start && end && Math.abs(start.x - end.clientX) > 50 && Math.abs(start.x - end.clientX) > Math.abs(start.y - end.clientY)) changePage(page + (start.x > end.clientX ? 1 : -1));
    touch.current = undefined;
  };
  const keyPage = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      changePage(page + (event.key === 'ArrowRight' ? 1 : -1));
    }
  };
  return <div className="q-container q-results">
    <div className="q-results-head">
      <div className="q-results-heading">
        <Label>WAT ONZE KLANTEN BEREIKEN</Label>
        <h2 className="q-h2 q-results-title" aria-label="Succesverhalen"><span>Succes</span><br/>verhalen</h2>
        <p className="q-text q-intro">Geen loze beloftes, maar meetbare resultaten. Dit is wat ambitieuze ondernemers die met ons samenwerken écht bereiken.</p>
      </div>
      <div className="q-results-nav">
        <Button variant="round" onClick={() => changePage(page - 1)} disabled={page === 0} aria-label="Vorige pagina resultaten"><ArrowLeft aria-hidden="true"/></Button>
        <span className="q-results-count" aria-live="polite">{page + 1} / {pages}</span>
        <Button variant="round" onClick={() => changePage(page + 1)} disabled={page >= pages - 1} aria-label="Volgende pagina resultaten"><ArrowRight aria-hidden="true"/></Button>
      </div>
    </div>
    <div className="q-result-cards" tabIndex={0} aria-label="Klantresultaten" onKeyDown={keyPage} onTouchStart={event => { const point = event.touches[0]; if (point) touch.current = { x: point.clientX, y: point.clientY }; }} onTouchEnd={swipe}>
      <div className={`q-result-page${direction < 0 ? ' q-result-page--back' : ''}`} key={page}>
        {results.slice(page * perPage, page * perPage + perPage).map(result => <article className="q-result-card" key={result.id}>
          {'video' in result && result.video ? <Button variant="ghost" className="q-result-media q-result-video" onClick={() => openVideo(result)} aria-label={`Videoreview van ${result.name} afspelen`}><img src={result.poster} alt={result.name} loading="lazy"/><span className="q-video-play"><Play aria-hidden="true"/></span></Button> : 'image' in result && result.image ? <div className="q-result-media"><img src={result.image} alt="Shopify conversiegrafiek: 2,79%, 40% hoger dan de vorige periode" loading="lazy"/></div> : <div className="q-result-media q-result-icon"><TrendingUp size={48} strokeWidth={2} aria-hidden="true"/></div>}
          <div className="q-result-body"><h3 className="q-result-title" aria-label={result.title}><CountUp value={result.value}/>{result.title.slice(String(result.value).length)}</h3><p className="q-result-description">{result.description}</p></div>
          <div className="q-result-customer"><p className="q-result-client">{result.name}</p>{'video' in result && result.video && <Button variant="ghost" className="q-result-video-link" onClick={() => openVideo(result)}>Bekijk de video <ArrowRight aria-hidden="true"/></Button>}</div>
          <span className="q-result-featured"><span aria-hidden="true">✦</span>{result.kind}</span>
        </article>)}
      </div>
    </div>
    <dialog className="q-video-dialog" ref={dialogRef} aria-label={video ? `Videoreview van ${video.name}` : 'Videoreview'} onCancel={closeVideo} onClick={event => { if (event.target === event.currentTarget) closeVideo(); }}>
      <Button variant="round" className="q-video-close" aria-label="Video sluiten" onClick={closeVideo}><X/></Button>
      {videoError && <div className="q-video-error"><h3>De videoreview is tijdelijk niet beschikbaar.</h3><p>Probeer het later opnieuw.</p></div>}
      {video && <video key={video.url} ref={videoRef} hidden={videoError} onError={() => setVideoError(true)} controls playsInline autoPlay preload="none" src={video.url} poster={video.poster} aria-label={`Videoreview van ${video.name}`}/>}
    </dialog>
  </div>;
}
