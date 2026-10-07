import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft, Phone, Star, MousePointer2, Clock3, Search, Smile, Check, Play, Plus, X, Layers, ShieldCheck, BadgeCheck, Handshake, Wallet, ChartNoAxesCombined, CalendarDays, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { faqs, results, services, aboutChecks } from '@/lib/homepage-content';
import logo from '@/assets/QOMV_Nieuwe_logo_2026-02.png.asset.json';
import hero from '@/assets/E-mail_header_2.png.asset.json';
import about from '@/assets/Wat-ons-uniek-maakt.webp.asset.json';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'Qomversie — Meer dan een mooie website.' },
  { name: 'description', content: 'Conversiegerichte websites en slimme aanvraagtools voor MKB-ondernemers in Friesland. Plan een gratis adviesgesprek van 30 minuten bij Qomversie.' },
  { property: 'og:title', content: 'Qomversie — Meer dan een mooie website.' },
  { property: 'og:description', content: 'Meer goede aanvragen en tijd voor je werk. Ontdek wat een conversiegerichte website en slimme aanvraagtool voor jouw bedrijf opleveren.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ] }), component: Index,
});

function Advice({ children = 'Gratis adviesgesprek', secondary = false }: { children?: ReactNode; secondary?: boolean }) {
 return <Button asChild variant={secondary ? 'quiet' : 'advice'}><a href="#contact">{children}<ArrowRight aria-hidden="true" /></a></Button>;
}
function Label({ children }: { children: ReactNode }) { return <div className="q-label">{children}</div>; }
function Stars() { return <span className="q-stars" aria-label="5 van 5 sterren">{Array.from({length:5},(_,i)=><Star key={i} aria-hidden="true" />)}</span>; }
function Google() { return <span className="q-google" aria-label="Google">G</span>; }
function Rating() { return <div className="q-rating"><Google/><Stars/><span>5.0 op Google</span></div>; }
function Checks({ items }: { items: string[] }) { return <ul className="q-checks">{items.map(item=><li key={item}><Check aria-hidden="true"/><span>{item}</span></li>)}</ul>; }
function Slider({ title, label, statement = false, children, id }: { title: string; label?: string; statement?: boolean; children: ReactNode; id: string }) {
 const ref = useRef<HTMLDivElement>(null);
 const [position,setPosition]=useState({start:true,end:false});
 const update = () => { const el=ref.current; if(el)setPosition({start:el.scrollLeft<5,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-5}); };
 useEffect(()=>{update();window.addEventListener('resize',update);return()=>window.removeEventListener('resize',update);},[]);
 const scroll=(direction:number)=>{ const el=ref.current;if(!el)return;const card=el.firstElementChild;el.scrollBy({left:direction*((card?.getBoundingClientRect().width??el.clientWidth)+24),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}); };
 return <section id={id} className={`q-container q-section q-reveal ${id==='cases'?'q-cases':''}`}><div className="q-heading-row"><div>{label&&<Label>{label}</Label>}<h2 className={statement?'q-statement':''}>{title}</h2></div><div className="q-slider-controls"><Button variant="round" disabled={position.start} onClick={()=>scroll(-1)} aria-label={`Vorige ${id}`} title="Vorige"><ArrowLeft/></Button><Button variant="round" disabled={position.end} onClick={()=>scroll(1)} aria-label={`Volgende ${id}`} title="Volgende"><ArrowRight/></Button></div></div><div className="q-slider" ref={ref} onScroll={update}>{children}</div></section>;
}
const benefits = [
 {Icon:MousePointer2,title:'Leads binnenhalen',text:'Sitebezoekers komen, maar doen niets. Onze tools zetten ze om in aanvragen 24/7.'},
 {Icon:Clock3,title:'Tijd terugwinnen',text:'Je verliest tijd aan slechte aanvragen. Je site doet het voorwerk, jij focust op je werk.'},
 {Icon:Search,title:'Gevonden worden',text:'Je klanten zoeken online, maar vinden je concurrent. Wij zorgen dat ze jou vinden.'},
];
const promises = [
 {Icon:Layers,title:'Eén partij voor alles',text:'Strategie, bouw én onderhoud. 1 partij, korte lijntjes, zonder gedoe.'},
 {Icon:ShieldCheck,title:'Zonder risico',text:'Gratis advies, resultaatgarantie en gespreid betalen.'},
 {Icon:BadgeCheck,title:'Resultaatgarantie',text:'Geen meetbaar resultaat? Dan werk ik door tot het wel werkt!'},
 {Icon:Handshake,title:'Jij doet je werk',text:'Geef alles uit handen, jij verder met ondernemen, wij doen dit.'},
 {Icon:Wallet,title:'Gespreid betalen',text:'Geen grote investering vooraf. Gespreid betalen mogelijk.'},
 {Icon:ChartNoAxesCombined,title:'Meetbaar',text:'Vaste stappen, meetbaar resultaat en meerdere optimalisaties.'},
];
const clients = ['Cowboy Magic','Hoogterp Verf','Het Groeicollectief','Studio Noeske'];
const caseData = [
 {name:'Cowboy Magic Europe',title:'Shopify CRO voor Cowboy Magic Europe',subtitle:'Cowboy Magic Europe'},
 {name:'Het Groeicollectief',title:'Webshop voor Het Groeicollectief',subtitle:'Het Groeicollectief'},
 {name:'Hoogterp Verf',title:'Webshop + AI-assistent voor Hoogterp Verf',subtitle:'Hoogterp Verf'},
];
function Index() {
 const [scrolled,setScrolled]=useState(false);const [pastHero,setPastHero]=useState(false);const dialogRef=useRef<HTMLDialogElement>(null);const videoRef=useRef<HTMLVideoElement>(null);
 useEffect(()=>{
  const onScroll=()=>{setScrolled(window.scrollY>30);const el=document.getElementById('hero');setPastHero((el?.getBoundingClientRect().bottom??1)<0);};onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.06});document.querySelectorAll('.q-reveal').forEach(el=>observer.observe(el));
  return()=>{window.removeEventListener('scroll',onScroll);observer.disconnect();};
 },[]);
 const openVideo=()=>{dialogRef.current?.showModal();videoRef.current?.play().catch(()=>{});};
 const closeVideo=()=>{videoRef.current?.pause();dialogRef.current?.close();};
 const structuredData = {'@context':'https://schema.org','@graph':[
  {'@type':'LocalBusiness',name:'Qomversie',url:'https://www.qomv.nl',telephone:'+31653509763',email:'info@qomv.nl',areaServed:{'@type':'AdministrativeArea',name:'Friesland'}},
  {'@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))},
 ]};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
  <header className={`q-header ${scrolled?'scrolled':''}`}><div className="q-container q-header-inner"><a href="#hero" aria-label="Qomversie, naar boven"><img className="q-logo" src={logo.url} alt="Qomversie" width="1920" height="528"/></a><div className="q-header-actions"><a className="q-phone" href="tel:+31653509763"><Phone aria-hidden="true"/>06-53509763</a><Advice/></div></div></header>
  <main>
   <section id="hero" className="q-container q-hero"><div className="q-hero-top"><div><Label>WELKOM BIJ QOMVERSIE</Label><h1>Meer dan een<br/><span className="q-highlight">mooie website.</span></h1></div><div className="q-hero-intro"><p>Wij bouwen <strong>conversiegerichte websites</strong> met op maat gemaakte <strong>aanvraagtools.</strong></p><p>Zo ontvang je niet alleen sneller, maar vooral betere aanvragen en bel jij alleen nog met serieuze mensen. Dat scheelt je uren aan offertes die niks opleveren.</p><div className="q-actions"><Advice/><Button asChild variant="quiet"><a href="#cases">Ons werk bekijken<ArrowRight aria-hidden="true"/></a></Button></div><Rating/></div></div>
    <div className="q-hero-photo"><img src={hero.url} alt="Bouke en zijn collega bespreken een aanvraag bij Qomversie" width="800" height="533" fetchPriority="high"/><a className="q-sticker" href="#contact" aria-label="Gratis adviesgesprek van 30 minuten"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id="sticker-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/></defs><text><textPath href="#sticker-circle" textLength="237">GRATIS ADVIESGESPREK • 30 MINUTEN • </textPath></text></svg><Smile aria-hidden="true" strokeWidth="1.5"/></a></div>
    <div className="q-benefits">{benefits.map(({Icon,title,text})=><article className="q-card q-benefit" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div>
   </section>
   <section id="vertrouwen" className="q-container q-trust q-reveal" aria-label="Ervaring en klanten"><h2 className="sr-only">Ervaring en klanten</h2><div className="q-stats"><div className="q-stat"><strong>12+</strong><span>Jaar ervaring in het vak</span></div><div className="q-stat"><strong>50+</strong><span>Projecten opgeleverd</span></div></div><div className="q-client-window" aria-label="Klantlogo’s volgen"><div className="q-client-track">{[...clients,...clients,...clients,...clients].map((name,i)=><div className="q-client" key={i} aria-hidden={i>=4}>{name}<small>KLANTLOGO VOLGT</small></div>)}</div></div></section>
   <div className="q-band" aria-label="Meer aanvragen, minder offertes tikken, korte lijntjes, nuchter en Fries, resultaatgarantie"><div className="q-band-track" aria-hidden="true">{Array.from({length:4},(_,i)=><span key={i}>Meer aanvragen <b>✦</b> Minder offertes tikken <b>✦</b> Korte lijntjes <b>✦</b> Nuchter en Fries <b>✦</b> Resultaatgarantie <b>✦</b></span>)}</div></div>
   <section id="succesverhalen" className="q-success q-section"><div className="q-container q-reveal"><Label>WAT ONZE KLANTEN BEREIKEN</Label><h2 className="q-statement">Succesverhalen</h2><p className="q-section-intro">Geen loze beloftes, maar meetbare resultaten. Dit is wat ambitieuze ondernemers die met ons samenwerken écht bereiken.</p><div className="q-results">{results.map((r,i)=><article className="q-card q-result" key={r.name}><span className="q-result-number">{r.number}</span><h3>{r.name}</h3><p>{r.text}</p>{i===1&&<Button variant="ghost" className="q-video-trigger" onClick={openVideo}><Play aria-hidden="true"/>Bekijk de videoreview</Button>}</article>)}</div></div></section>
   <Slider id="reviews" label="RECENSIES" title="Vertrouwd door onze klanten">{['Wim Konkoek','Tineke Veenstra','Studio Noeske'].map(name=><article className="q-card q-review" key={name}><span className="q-quote" aria-hidden="true">“</span><Stars/><p>Reviewtekst volgt.</p><div className="q-review-footer"><span>{name}</span><Google/></div></article>)}</Slider>
   <Slider id="cases" title="Cases waar we trots op zijn" statement>{caseData.map(c=><article className="q-case" key={c.name}><div className="q-case-media"><div className="q-case-placeholder">{c.name}<small>Projectfoto volgt</small></div></div><div className="q-case-caption"><h3>{c.title}</h3><p>{c.subtitle}</p></div></article>)}</Slider>
   <section id="over-ons" className="q-container q-section q-about q-reveal"><div className="q-about-photo"><img src={about.url} alt="Bouke en zijn collega aan het werk bij Qomversie" width="540" height="750" loading="lazy"/><span className="q-hi">Hoi!</span></div><div className="q-about-copy"><Label>OVER ONS</Label><h2>Hoi! Wij zijn Qomversie</h2><p>Ik weet hoe het is om als ondernemer alles zelf te doen en toch het gevoel te hebben dat je langzaam groeit. Daarom bouw ik resultaatgerichte websites voor Friese bedrijven die daadwerkelijk klanten en tijdwinst opleveren.</p><p>Geen groot bureau met lange wachttijden. Geen agency die alleen adviseert. Geen freelancer die alleen bouwt. Gewoon ik, met een vast team van specialisten. Korte lijntjes, snel schakelen, altijd bereikbaar.</p><p>Sindsdien hebben we:</p><Checks items={aboutChecks}/><Advice secondary>Laten we kennismaken</Advice></div></section>
   <section id="diensten" className="q-container q-section q-reveal"><Label>START MET GROEIEN!</Label><h2>Wat wil je bereiken?</h2><div className="q-services">{services.map(s=><a className="q-card q-service" href="#contact" key={s.title}><ArrowUpRight className="q-service-arrow" aria-hidden="true"/><h3>{s.title}</h3><div className="q-service-subtitle">{s.subtitle}</div><p>{s.text}</p><Checks items={s.checks}/><span className="q-button q-button-secondary inline-flex items-center">Gratis advies<ArrowRight aria-hidden="true"/></span></a>)}</div></section>
   <section id="beloftes" className="q-container q-section q-promises q-reveal"><Label>ONZE BELOFTES</Label><h2>Groeien zonder risico</h2><div className="q-promise-grid">{promises.map(({Icon,title,text})=><article className="q-promise" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
   <section id="werkwijze" className="q-container q-section q-process q-reveal"><Label>ONZE WERKWIJZE</Label><h2>Eerst begrijpen, dan bouwen</h2><div className="q-steps"><article className="q-step"><span className="q-step-number">01</span><h3>Gratis adviesgesprek</h3><p className="q-step-meta">30 minuten · Op locatie of videocall</p><p>We analyseren je huidige website en aanvraagproces. Je krijgt een concreet plan en een eerlijk advies.</p></article><article className="q-step"><span className="q-step-number">02</span><h3>Bouw</h3><p>1. Strategie: propositie aanscherpen, focus bepalen.<br/>2. Bouwen: website + aanvraagtool.<br/>3. Activeren: alles live, meten, finetunen.</p><p>Na 30 dagen meten we samen het resultaat.</p></article><article className="q-step"><span className="q-step-number">03</span><h3>Onderhoud</h3><p className="q-step-meta">Optioneel · Maandelijks opzegbaar</p><p>Daarna kies jij, zelf beheren of het aan ons overlaten. Kies je voor ons, dan onderhouden en optimaliseren wij je website en aanvraagtool continu. Vast maandtarief zonder contract, stoppen kan altijd.</p></article></div></section>
   <section id="faq" className="q-container q-section q-faq q-reveal"><div><Label>FAQ</Label><h2>Veelgestelde vragen</h2></div><div className="q-faq-list">{faqs.map(f=><details key={f.question}><summary>{f.question}<Plus aria-hidden="true"/></summary><p>{f.answer}</p></details>)}</div></section>
   <section id="contact" className="q-container q-contact-wrap q-reveal"><div className="q-contact"><Label>KLAAR OM TE GROEIEN?</Label><h2 className="q-statement">Plan je gratis adviesgesprek!</h2><p>Ontdek in 30 minuten hoeveel het jou kan opleveren.</p><div className="q-booking"><CalendarDays aria-hidden="true"/><h3>Gratis adviesgesprek</h3><p>30 minuten · Op locatie of videocall</p><p>De online agenda wordt binnenkort toegevoegd.</p><a href="tel:+31653509763" className="q-phone"><Phone aria-hidden="true"/>Bel om een gesprek te plannen<ArrowUpRight aria-hidden="true"/></a></div><p className="q-call">Liever even bellen? <a href="tel:+31653509763">06-53509763</a></p></div></section>
  </main>
  <footer className="q-container q-footer"><div className="q-footer-grid"><div><a href="#hero" aria-label="Qomversie, naar boven"><img className="q-logo" src={logo.url} alt="Qomversie" width="1920" height="528" loading="lazy"/></a><Rating/></div><div><h3>Contact</h3><div className="q-footer-links"><a href="tel:+31653509763">06-53509763</a><a href="mailto:info@qomv.nl">info@qomv.nl</a><span>KvK 82383081</span></div></div><div><h3>Onze partners</h3><div className="q-footer-links"><a href="https://wijmakendronebeelden.nl" target="_blank" rel="noreferrer">wijmakendronebeelden.nl</a><a href="https://websitebouwerfriesland.nl" target="_blank" rel="noreferrer">websitebouwerfriesland.nl</a></div></div><div><div className="q-footer-links"><a href="https://www.qomv.nl/privacybeleid/" target="_blank" rel="noreferrer">Privacybeleid</a><a href="https://www.qomv.nl/cookiebeleid/" target="_blank" rel="noreferrer">Cookiebeleid</a><a href="#faq">Veelgestelde vragen</a></div><div className="q-socials"><a href="https://www.instagram.com/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op Instagram"><Instagram/></a><a href="https://www.linkedin.com/company/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op LinkedIn"><Linkedin/></a><a href="https://www.facebook.com/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op Facebook"><Facebook/></a></div></div></div><div className="q-footer-bottom">© Qomversie</div></footer>
  <div className={`q-mobile-cta ${pastHero?'active':''}`}><Advice/></div>
  <dialog className="q-video-dialog" ref={dialogRef} onCancel={()=>videoRef.current?.pause()} onClick={e=>{if(e.target===e.currentTarget)closeVideo();}}><Button variant="round" className="q-video-close" aria-label="Video sluiten" onClick={closeVideo}><X/></Button><video ref={videoRef} controls playsInline preload="none" src="https://www.qomv.nl/wp-content/uploads/2026/05/Videoreview-Joke-Bleijerveld.mp4" aria-label="Videoreview van Joke Bleijerveld"/></dialog>
 </>;
}
