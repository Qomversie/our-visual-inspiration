import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode, type TouchEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, Check, Play, Plus, Star, TrendingUp, X, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import logo from '@/assets/QOMV_Nieuwe_logo_2026-02.png.asset.json';
import { Button } from '@/components/ui/button';
import { caseHoverNote, clients, experienceStats, headingLines, results, steps } from '@/lib/homepage-content';
import bank from '@/assets/E-mail_header_2.png.asset.json';

export function Stars() {
  return <span className="sterren" aria-label="5 van 5 sterren">{Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}</span>;
}
export function Google() { return <span className="google-score" aria-label="Google">G</span>; }

export function SmileMark({ className = 'smile-icoon' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" aria-hidden="true"><path d="M20 0A20 20 0 0 1 0 20V14A14 14 0 0 0 14 0Z" fill="currentColor" /></svg>;
}
export function SmileOutline({ front = false }: { front?: boolean }) {
  return <svg className={`smile-lijn${front ? ' smile-lijn-voor' : ''}`} viewBox="-0.2 -0.2 20.4 20.4" preserveAspectRatio="none" aria-hidden="true"><path d="M20 0A20 20 0 0 1 0 20V14A14 14 0 0 0 14 0Z" vectorEffect="non-scaling-stroke" /></svg>;
}
export function Label({ children }: { children: ReactNode }) { return <p className="kop-label"><SmileMark />{children}</p>; }

export function SectionHeader({ label, title, children }: { label?: string; title: string; children?: ReactNode }) {
  const lines = headingLines[title];
  return <div className="sectie-kop">{label && <Label>{label}</Label>}<h2 aria-label={title} className="kop-h2">{lines ? <>{lines[0]}<br/>{lines[1]}</> : title}</h2>{children}</div>;
}

export function CtaBlock({ children = 'Gratis adviesgesprek', variant = 'primary', href = '#contact', note }: { children?: ReactNode; variant?: 'primary' | 'secondary'; href?: string; note?: string }) {
  const button = <Button asChild variant={variant === 'primary' ? 'advice' : 'quiet'}><a href={href}>{children}<ArrowRight aria-hidden="true" /></a></Button>;
  if (!note) return button;
  return <div className="cta-blok">{button}<p className="tekst-klein">{note}</p></div>;
}

export function RotatingBadge({ text = 'GRATIS ADVIESGESPREK • 30 MINUTEN • ', href = '#contact', id = 'badge-circle' }: { text?: string; href?: string; id?: string }) {
  return <a className="badge-draaiend" href={href} aria-label="Gratis adviesgesprek van 30 minuten"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs><text><textPath href={`#${id}`} textLength="237">{text}</textPath></text></svg><SmileMark className="smile-badge" /></a>;
}

export function CheckList({ items, badge = false }: { items: string[]; badge?: boolean }) {
  return <ul className={`checklijst${badge ? ' checklijst-badge' : ''}`}>{items.map(item => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export function Workflow() {
  return <div className="werkwijze"><SectionHeader label="ONZE WERKWIJZE" title="Eerst begrijpen, dan bouwen"/><div className="stappen">{steps.map((s,i)=><article className="stap" key={s.title}><span className="stap-punt" aria-hidden="true">{i+1}</span><div className="stap-inhoud"><div className="stap-kop"><h3 className="kop-h3">{s.title}</h3><span className="stap-pil">{s.meta}</span></div>{'blocks' in s&&s.blocks?<div className="stap-blokken">{s.blocks.map(b=><div key={b.word}><strong>{b.word}</strong><span>{b.line}</span></div>)}</div>:<p className="tekst">{s.text}</p>}</div></article>)}</div><div className="gecentreerd"><CtaBlock note="30 minuten · vrijblijvend · op locatie of videocall"/></div></div>;
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return <details className="faq"><summary>{question}<Plus aria-hidden="true" /></summary><p className="tekst">{answer}</p></details>;
}

export function ShortcodeBlock({ code, note }: { code: string; note: string }) {
  return <div className="shortcode-blok"><code>[shortcode: {code}]</code><p className="tekst-klein">{note}</p></div>;
}

export function CaseCard({ name, line, image, tag, featured = false }: { name: string; line: string; image?: string; tag?: string; featured?: boolean }) {
  return <article className={`case-kaart${featured ? ' case-kaart-uitgelicht' : ''}`}>
    {image ? <img src={image} alt={`Project voor ${name}, website gebouwd door Qomversie in Friesland`} loading="lazy" /> : <div className="case-beeld" role="img" aria-label={`Projectfoto ${name} volgt`} />}
    {tag && <span className="case-label">{tag}</span>}
    <a className="case-hoek" href="#contact" aria-label={`Meer over ${name}`}><ArrowRight aria-hidden="true" /></a>
    <div className="case-onderschrift"><h3>{name}</h3><p><ArrowUp aria-hidden="true" />{line}</p><p className="case-meer">{caseHoverNote}</p></div>
  </article>;
}

export function LogoStrip() {
  return <section id="klantlogos" className="sectie sectie-wit logostrook" aria-label="Onze klanten"><div className="logostrook-binnen"><div className="logostrook-venster"><div className="logostrook-baan">{[0, 1].map(copy => <div className="logostrook-groep" key={copy} aria-hidden={copy === 1}>{clients.map(name => <div className="logostrook-logo" key={name}>{name}<small>KLANTLOGO VOLGT</small></div>)}</div>)}</div></div></div></section>;
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
  return <div className="hero-cijfers">{experienceStats.map(stat => <div className="hero-cijfer" key={stat.label}><p><CountUp value={stat.value} suffix="+"/></p><span>{stat.label.charAt(0) + stat.label.slice(1).toLowerCase()}</span></div>)}</div>;
}

/* Wide photo panel: the smile outline wraps the whole block, behind at the top edge and in front at the bottom-right corner. */
export function PhotoCta() {
  return <section className="foto-cta" aria-labelledby="photo-cta-title">
    <div className="foto-cta-kader">
      <div className="foto-cta-tekst"><Label>KLAAR VOOR DE VOLGENDE STAP?</Label><h2 id="photo-cta-title" className="kop-h2" aria-label="Geen gedoe, gewoon resultaat."><span className="kop-outline">Geen gedoe,</span><br/>gewoon resultaat.</h2><p className="tekst">In 30 minuten weet je wat jouw website kan opleveren. Gratis en vrijblijvend.</p><CtaBlock/></div>
      <div className="foto-cta-foto foto-smile"><SmileOutline/><img src={bank.url} alt="Bouke van Qomversie met een collega op de bank" loading="lazy"/><SmileOutline front/></div>
    </div>
  </section>;
}

/* ResultCards owns the one-card-step slider and the shared video lightbox for homepage and styleguide. */
export function ResultCards() {
  const [visible, setVisible] = useState(2);
  const [index, setIndex] = useState(0);
  const [video, setVideo] = useState<{ url: string; poster: string | undefined; name: string }>();
  const [videoError, setVideoError] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touch = useRef<{ x: number; y: number } | undefined>(undefined);
  const maxIndex = Math.max(0, results.length - visible);
  useEffect(() => {
    const query = window.matchMedia('(max-width:760px)');
    const update = () => setVisible(query.matches ? 1 : 2);
    update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => { setIndex(current => Math.min(current, maxIndex)); }, [maxIndex]);
  const go = (next: number) => setIndex(Math.max(0, Math.min(maxIndex, next)));
  const openVideo = (item: { video: string; poster?: string; name: string }) => {
    setVideoError(false);
    setVideo({ url: item.video, poster: item.poster, name: item.name });
    dialogRef.current?.showModal();
  };
  useEffect(() => { if (video) videoRef.current?.play().catch(() => {}); }, [video]);
  const closeVideo = () => { videoRef.current?.pause(); dialogRef.current?.close(); setVideo(undefined); };
  const swipe = (event: TouchEvent<HTMLDivElement>) => {
    const start = touch.current; const end = event.changedTouches[0];
    if (start && end && Math.abs(start.x - end.clientX) > 50 && Math.abs(start.x - end.clientX) > Math.abs(start.y - end.clientY)) go(index + (start.x > end.clientX ? 1 : -1));
    touch.current = undefined;
  };
  const keyPage = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); go(index + (event.key === 'ArrowRight' ? 1 : -1)); }
  };
  return <div className="paginabreedte succes">
    <div className="succes-kop">
      <div className="succes-koptekst">
        <Label>WAT ONZE KLANTEN BEREIKEN</Label>
        <h2 className="kop-h2 succes-kop-titel">Succesverhalen</h2>
      </div>
      <div className="succes-zijkant">
        <p className="tekst intro">Geen loze beloftes, maar meetbare resultaten. Dit is wat ambitieuze ondernemers die met ons samenwerken écht bereiken.</p>
        <div className="succes-navigatie">
          <Button variant="round" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Vorig resultaat"><ArrowLeft aria-hidden="true"/></Button>
          <Button variant="round" onClick={() => go(index + 1)} disabled={index >= maxIndex} aria-label="Volgend resultaat"><ArrowRight aria-hidden="true"/></Button>
          <span className="succes-teller" aria-live="polite">{index + 1} / {results.length}</span>
        </div>
      </div>
    </div>
    <div className="succes-kaarten" tabIndex={0} aria-label="Klantresultaten" onKeyDown={keyPage} onTouchStart={event => { const point = event.touches[0]; if (point) touch.current = { x: point.clientX, y: point.clientY }; }} onTouchEnd={swipe}>
      <div className="succes-baan" style={{ ['--succes-zichtbaar' as string]: visible, ['--succes-index' as string]: index }}>
        {results.map((result, i) => <article className="succes-kaart" key={result.id} aria-hidden={i < index || i >= index + visible ? true : undefined}>
          {'video' in result && result.video ? <Button variant="ghost" className="succes-beeld succes-video" tabIndex={i < index || i >= index + visible ? -1 : undefined} onClick={() => openVideo(result)} aria-label={`Videoreview van ${result.name} afspelen`}><img src={result.poster} alt={result.name} loading="lazy"/><span className="video-afspelen"><Play aria-hidden="true"/></span></Button> : 'image' in result && result.image ? <div className={`succes-beeld${result.imageType === 'screenshot' ? ' succes-beeld-screenshot' : ''}`}><img src={result.image} alt="Shopify conversiegrafiek: 2,79%, 40% hoger dan de vorige periode" loading="lazy"/></div> : <div className="succes-beeld succes-icoon"><TrendingUp size={56} strokeWidth={2} aria-hidden="true"/></div>}
          <div className="succes-tekstvak">
            <p className="succes-klant">{result.name}</p>
            <h3 className="succes-titel" aria-label={`${result.value}${result.unit} ${result.description}`}><ArrowUp className="succes-pijl" aria-hidden="true"/><span className="succes-cijferwaarde"><CountUp value={result.value}/>{result.unit}</span></h3>
            <p className="succes-uitleg">{result.description}</p>
            <Button asChild variant="ghost" className="succes-caselink"><a href={result.caseUrl} tabIndex={i < index || i >= index + visible ? -1 : undefined}>Bekijk de case <ArrowRight aria-hidden="true"/></a></Button>
          </div>
          <span className="succes-uitgelicht"><span aria-hidden="true">✦</span>{result.kind}</span>
        </article>)}
      </div>
    </div>
    <dialog className="video-venster" ref={dialogRef} aria-label={video ? `Videoreview van ${video.name}` : 'Videoreview'} onCancel={closeVideo} onClick={event => { if (event.target === event.currentTarget) closeVideo(); }}>
      <Button variant="round" className="video-sluiten" aria-label="Video sluiten" onClick={closeVideo}><X/></Button>
      {videoError && <div className="video-fout"><h3>De videoreview is tijdelijk niet beschikbaar.</h3><p>Probeer het later opnieuw.</p></div>}
      {video && <video key={video.url} ref={videoRef} hidden={videoError} onError={() => setVideoError(true)} controls playsInline autoPlay preload="none" src={video.url} poster={video.poster} aria-label={`Videoreview van ${video.name}`}/>}
    </dialog>
  </div>;
}

/* SiteFooter: rounded white footer panel shared by homepage and styleguide. */
export function SiteFooter() {
  return <footer className="paginavoet"><div className="paginabreedte">
    <div className="paginavoet-kolommen">
      <div className="paginavoet-merk"><a href="#hero" aria-label="Qomversie, naar boven"><img className="logo" src={logo.url} alt="Qomversie logo" width="1920" height="528" loading="lazy"/></a><p>Digitale tools die jouw bedrijf laten groeien. Meer klanten, minder werkdruk.</p><div className="beoordeling"><Google/><Stars/><span>5.0 op Google</span></div><Button asChild variant="advice" className="paginavoet-knop"><a href="#contact">Gratis adviesgesprek</a></Button></div>
      <div><h3>Contact</h3><div className="paginavoet-links"><a href="tel:+31653509763"><Phone aria-hidden="true"/>06-53509763</a><a href="mailto:info@qomv.nl"><Mail aria-hidden="true"/>info@qomv.nl</a><span>KvK 82383081</span></div></div>
      <div><h3>Onze partners</h3><div className="paginavoet-links"><a href="https://wijmakendronebeelden.nl" target="_blank" rel="noreferrer">wijmakendronebeelden.nl</a><a href="https://websitebouwerfriesland.nl" target="_blank" rel="noreferrer">websitebouwerfriesland.nl</a></div></div>
      <div><h3>Info</h3><div className="paginavoet-links"><a href="https://www.qomv.nl/privacybeleid/" target="_blank" rel="noreferrer">Privacybeleid</a><a href="https://www.qomv.nl/cookiebeleid/" target="_blank" rel="noreferrer">Cookiebeleid</a><a href="#faq">Veelgestelde vragen</a></div></div>
      <div className="socials"><Button asChild variant="round"><a href="https://www.instagram.com/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op Instagram" title="Instagram"><Instagram/></a></Button><Button asChild variant="round"><a href="https://www.linkedin.com/company/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op LinkedIn" title="LinkedIn"><Linkedin/></a></Button><Button asChild variant="round"><a href="https://www.facebook.com/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op Facebook" title="Facebook"><Facebook/></a></Button></div>
    </div>
    <div className="paginavoet-onderbalk"><span>© Qomversie · Website laten bouwen in Friesland</span><span><a href="https://www.qomv.nl/privacybeleid/" target="_blank" rel="noreferrer">Privacybeleid</a> · <a href="https://www.qomv.nl/cookiebeleid/" target="_blank" rel="noreferrer">Cookiebeleid</a></span></div>
  </div></footer>;
}
