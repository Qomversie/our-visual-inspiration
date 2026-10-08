import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft, Phone, MousePointer2, Clock3, Search, Play, X, Layers, ShieldCheck, BadgeCheck, Handshake, Wallet, ChartNoAxesCombined, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { faqs, results, services, aboutChecks, cases, clients, steps } from '@/lib/homepage-content';
import { SectionHeader, CtaBlock, CaseCard, RotatingBadge, ShortcodeBlock, FaqItem, CheckList, Stars, Google, Label } from '@/components/qomversie';
import logo from '@/assets/QOMV_Nieuwe_logo_2026-02.png.asset.json';
import couch from '@/assets/E-mail_header_2.png.asset.json';
import portrait from '@/assets/Bouke-portret.webp.asset.json';
import team from '@/assets/Ons_team_2.jpeg.asset.json';

const TITLE = 'Website laten bouwen in Friesland | Qomversie';
const DESCRIPTION = 'Website laten bouwen in Friesland? Qomversie bouwt conversiegerichte websites met slimme aanvraagtools die klanten opleveren. Plan je gratis adviesgesprek.';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: TITLE }, { name: 'description', content: DESCRIPTION },
  { property: 'og:title', content: TITLE }, { property: 'og:description', content: DESCRIPTION },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  { property: 'og:image', content: portrait.url }, { name: 'twitter:image', content: portrait.url },
 ] }), component: Index,
});

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

function CaseCarousel() {
 const ref=useRef<HTMLDivElement>(null);
 const [pos,setPos]=useState({start:true,end:false});
 const update=()=>{const el=ref.current;if(el)setPos({start:el.scrollLeft<5,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-5});};
 useEffect(()=>{update();window.addEventListener('resize',update);return()=>window.removeEventListener('resize',update);},[]);
 const scroll=(d:number)=>{const el=ref.current;if(!el)return;const card=el.firstElementChild;el.scrollBy({left:d*((card?.getBoundingClientRect().width??400)+24),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});};
 return <section id="cases" className="q-section q-section--white q-cases">
  <div className="q-container q-heading-row"><SectionHeader title="Cases waar we trots op zijn"/><div className="q-slider-controls"><Button variant="round" disabled={pos.start} onClick={()=>scroll(-1)} aria-label="Vorige case"><ArrowLeft/></Button><Button variant="round" disabled={pos.end} onClick={()=>scroll(1)} aria-label="Volgende case"><ArrowRight/></Button></div></div>
  <div className="q-case-track" ref={ref} onScroll={update}>{cases.map(c=><CaseCard key={c.name} {...c}/>)}</div>
 </section>;
}

function Index() {
 const [scrolled,setScrolled]=useState(false);const [pastHero,setPastHero]=useState(false);const [videoError,setVideoError]=useState(false);const dialogRef=useRef<HTMLDialogElement>(null);const videoRef=useRef<HTMLVideoElement>(null);
 useEffect(()=>{
  const onScroll=()=>{setScrolled(window.scrollY>30);const el=document.getElementById('hero');setPastHero((el?.getBoundingClientRect().bottom??1)<0);};onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.06});document.querySelectorAll('.q-reveal').forEach(el=>observer.observe(el));
  return()=>{window.removeEventListener('scroll',onScroll);observer.disconnect();};
 },[]);
 const openVideo=()=>{dialogRef.current?.showModal();videoRef.current?.play().catch(()=>{});};
 const closeVideo=()=>{videoRef.current?.pause();dialogRef.current?.close();};
 const structuredData = {'@context':'https://schema.org','@graph':[
  {'@type':'LocalBusiness',name:'Qomversie',url:'https://www.qomv.nl',telephone:'+31653509763',email:'info@qomv.nl',areaServed:{'@type':'AdministrativeArea',name:'Friesland'},address:{'@type':'PostalAddress',addressRegion:'Friesland',addressCountry:'NL'},aggregateRating:{'@type':'AggregateRating',ratingValue:'5.0',reviewCount:23,bestRating:'5'}},
  {'@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))},
 ]};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
  <header className={`q-header ${scrolled?'scrolled':''}`}><div className="q-container q-header-inner"><a href="#hero" aria-label="Qomversie, naar boven"><img className="q-logo" src={logo.url} alt="Qomversie logo, websites bouwen in Friesland" width="1920" height="528"/></a><div className="q-header-actions"><a className="q-phone" href="tel:+31653509763"><Phone aria-hidden="true"/>06-53509763</a><CtaBlock/></div></div></header>
  <main>
   <div className="q-panel q-hero-panel">
   <section id="hero" className="q-section q-section--flush q-container q-hero">
    
    <div className="q-hero-copy">
     <p className="q-pill"><Google/><Stars/><span>5.0 · 23 Google reviews</span></p>
     <Label>WEBSITE LATEN BOUWEN IN FRIESLAND</Label>
     <h1 className="q-h1">Meer dan een <em>mooie</em> website.</h1>
     <p className="q-text">Wij bouwen <strong>conversiegerichte websites</strong> met op maat gemaakte <strong>aanvraagtools.</strong></p>
     <p className="q-text">Zo ontvang je niet alleen sneller, maar vooral betere aanvragen en bel jij alleen nog met serieuze mensen. Dat scheelt je uren aan offertes die niks opleveren.</p>
     <div className="q-actions"><CtaBlock/><CtaBlock variant="secondary" href="#cases">Ons werk bekijken</CtaBlock></div>
     <p className="q-note">Gratis · 30 minuten · vrijblijvend</p>
    </div>
    <div className="q-hero-photo"><img className="q-portrait" src={portrait.url} alt="Bouke van Qomversie, website laten bouwen in Friesland" width="540" height="750"/><RotatingBadge id="hero-badge"/></div>
   </section>
   <section className="q-section q-section--flush q-hero-follow" aria-label="Wat je eraan hebt">
    <div className="q-container q-hero-follow-inner">
     <img className="q-follow-photo" src={couch.url} alt="Bouke en zijn collega van Qomversie bespreken een website op de bank" width="800" height="533" loading="lazy"/>
     <div className="q-benefits">{benefits.map(({Icon,title,text})=><article className="q-card" key={title}><Icon aria-hidden="true"/><h3 className="q-h3">{title}</h3><p className="q-text">{text}</p></article>)}</div>
    </div>
   </section>
   <section id="vertrouwen" className="q-section q-section--flush q-container q-trust" aria-label="Ervaring en klanten"><h2 className="sr-only">Ervaring en klanten</h2><div className="q-stats"><div className="q-stat"><strong>12+</strong><span>Jaar ervaring in het vak</span></div><div className="q-stat"><strong>50+</strong><span>Projecten opgeleverd</span></div></div><div className="q-client-window" aria-label="Klantlogo’s volgen"><div className="q-client-track">{[...clients,...clients,...clients,...clients].map((name,i)=><div className="q-client" key={i} aria-hidden={i>=4}>{name}<small>KLANTLOGO VOLGT</small></div>)}</div></div></section>
   </div>
   <section id="succesverhalen" className="q-section q-section--white">
    <div className="q-container q-reveal">
     <SectionHeader label="WAT ONZE KLANTEN BEREIKEN" title="Succesverhalen"><p className="q-text q-intro">Geen loze beloftes, maar meetbare resultaten. Dit is wat ambitieuze ondernemers die met ons samenwerken écht bereiken.</p></SectionHeader>
     <div className="q-results">
      <article className="q-card q-res q-res--main">
       <h3 className="q-res-client">{results[0]?.name}</h3>
       <p className="q-res-number">{results[0]?.number}</p>
       <p className="q-res-text">{results[0]?.text}</p>
       <div className="q-browser"><div className="q-browser-frame"><div className="q-browser-bar"><i/><i/><i/><span>Conversiepercentage · Shopify</span></div><div className="q-browser-screen" role="img" aria-label="Screenshot van de conversiegrafiek volgt">Screenshot conversiegrafiek volgt</div></div></div>
      </article>
      <article className="q-card q-res q-res--video">
       <div className="q-res-body"><h3 className="q-res-client">{results[1]?.name}</h3><p className="q-res-number">{results[1]?.number}</p><p className="q-res-text">{results[1]?.text}</p></div>
       <Button variant="ghost" type="button" className="q-bento-video" onClick={openVideo} aria-label="Videoreview van Joke Bleijerveld afspelen"><span className="q-video-play"><Play aria-hidden="true"/></span><small>Videostill volgt</small></Button>
      </article>
      <article className="q-card q-res q-res--time">
       <h3 className="q-res-client">{results[2]?.name}</h3>
       <p className="q-res-number">{results[2]?.number}</p>
       <p className="q-res-text">{results[2]?.text}</p>
       <div className="q-time" role="img" aria-label="Voorheen 2 weken werk, nu 1 dag">
        <div className="q-time-row"><b>Voorheen</b><span className="q-time-bar"/><span>2 weken</span></div>
        <div className="q-time-row q-time-row--now"><b>Nu</b><span className="q-time-bar"/><span>1 dag</span></div>
       </div>
      </article>
     </div>
    </div>
   </section>
   <section id="reviews" className="q-section q-panel"><div className="q-container q-reveal"><SectionHeader label="RECENSIES" title="Vertrouwd door onze klanten"/><ShortcodeBlock code="reviews" note="Hier komt de reviews-widget"/></div></section>
   <CaseCarousel/>
   <section id="over-ons" className="q-section q-panel"><div className="q-container q-about q-reveal"><div className="q-about-photo"><img src={team.url} alt="Bouke van Qomversie, websites bouwen in Friesland" width="800" height="800" loading="lazy"/></div><div className="q-about-copy"><SectionHeader label="OVER ONS" title="Hoi! Wij zijn Qomversie"/><p className="q-text">Ik weet hoe het is om als ondernemer alles zelf te doen en toch het gevoel te hebben dat je langzaam groeit. Daarom bouw ik resultaatgerichte websites voor Friese bedrijven die daadwerkelijk klanten en tijdwinst opleveren.</p><p className="q-text">Geen groot bureau met lange wachttijden. Geen agency die alleen adviseert. Geen freelancer die alleen bouwt. Gewoon ik, met een vast team van specialisten. Korte lijntjes, snel schakelen, altijd bereikbaar.</p><p className="q-text">Sindsdien hebben we:</p><CheckList items={aboutChecks}/><CtaBlock variant="secondary">Laten we kennismaken</CtaBlock></div></div></section>
   <section id="diensten" className="q-section q-section--white"><div className="q-container q-reveal"><SectionHeader label="START MET GROEIEN!" title="Wat wil je bereiken?"/><div className="q-services">{services.map((s,i)=><a className="q-card q-card--sand" href="#contact" key={s.title}><span className="q-service-number">0{i+1}</span><ArrowUpRight className="q-service-arrow" aria-hidden="true"/><h3 className="q-h3">{s.title}</h3><p className="q-service-subtitle">{s.subtitle}</p><p className="q-text">{s.text}</p><CheckList items={s.checks}/><span className="q-btn q-btn--secondary">Gratis advies<ArrowRight aria-hidden="true"/></span></a>)}</div></div></section>
   <section id="beloftes" className="q-section q-panel"><div className="q-container q-promises q-reveal"><div className="q-promises-intro"><SectionHeader label="ONZE BELOFTES" title="Groeien zonder risico"><p className="q-text">Geen gedoe, geen verrassingen. Dit kun je van ons verwachten.</p></SectionHeader><CtaBlock/></div><div className="q-promise-grid">{promises.map(({Icon,title,text})=><article className="q-promise" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
   <section id="werkwijze" className="q-container q-section q-section--white">
    
    <div className="q-reveal">
     <SectionHeader label="ONZE WERKWIJZE" title="Eerst begrijpen, dan bouwen"/>
     <div className="q-steps">{steps.map((s,i)=><article className="q-step" key={s.title}><span className="q-step-dot" aria-hidden="true">{i+1}</span><div className="q-step-body"><div className="q-step-head"><h3 className="q-h3">{s.title}</h3><span className="q-step-pill">{s.meta}</span></div>{'blocks' in s&&s.blocks?<div className="q-step-blocks">{s.blocks.map(b=><div key={b.word}><strong>{b.word}</strong><span>{b.line}</span></div>)}</div>:<p className="q-text">{s.text}</p>}</div></article>)}</div>
     <div className="q-center"><CtaBlock note="30 minuten · vrijblijvend · op locatie of videocall"/></div>
    </div>
   </section>
   <section id="faq" className="q-section q-panel"><div className="q-container q-faq-section q-reveal"><SectionHeader label="FAQ" title="Veelgestelde vragen"/><div className="q-faq-list">{faqs.map(f=><FaqItem key={f.question} {...f}/>)}</div></div></section>
   <section id="contact" className="q-section q-section--flush q-panel q-panel--dark q-contact-wrap q-reveal">
    <div className="q-container q-contact"><SectionHeader label="KLAAR OM TE GROEIEN?" title="Plan je gratis adviesgesprek!"/><p className="q-text">Ontdek in 30 minuten hoeveel het jou kan opleveren.</p><ShortcodeBlock code="agenda" note="Hier komt de online agenda"/><p className="q-call">Liever even bellen? <a href="tel:+31653509763">06-53509763</a></p></div>
   </section>
  </main>
  <footer className="q-section q-section--flush q-section--white q-container q-footer"><div className="q-footer-grid"><div><a href="#hero" aria-label="Qomversie, naar boven"><img className="q-logo" src={logo.url} alt="Qomversie logo" width="1920" height="528" loading="lazy"/></a><div className="q-rating"><Google/><Stars/><span>5.0 op Google</span></div></div><div><h3>Contact</h3><div className="q-footer-links"><a href="tel:+31653509763">06-53509763</a><a href="mailto:info@qomv.nl">info@qomv.nl</a><span>KvK 82383081</span></div></div><div><h3>Onze partners</h3><div className="q-footer-links"><a href="https://wijmakendronebeelden.nl" target="_blank" rel="noreferrer">wijmakendronebeelden.nl</a><a href="https://websitebouwerfriesland.nl" target="_blank" rel="noreferrer">websitebouwerfriesland.nl</a></div></div><div><div className="q-footer-links"><a href="https://www.qomv.nl/privacybeleid/" target="_blank" rel="noreferrer">Privacybeleid</a><a href="https://www.qomv.nl/cookiebeleid/" target="_blank" rel="noreferrer">Cookiebeleid</a><a href="#faq">Veelgestelde vragen</a></div><div className="q-socials"><a href="https://www.instagram.com/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op Instagram"><Instagram/></a><a href="https://www.linkedin.com/company/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op LinkedIn"><Linkedin/></a><a href="https://www.facebook.com/qomversie/" target="_blank" rel="noreferrer" aria-label="Qomversie op Facebook"><Facebook/></a></div></div></div><div className="q-footer-bottom">© Qomversie</div></footer>
  <div className={`q-mobile-cta ${pastHero?'active':''}`}><CtaBlock/></div>
  <dialog className="q-video-dialog" ref={dialogRef} onCancel={()=>videoRef.current?.pause()} onClick={e=>{if(e.target===e.currentTarget)closeVideo();}}><Button variant="round" className="q-video-close" aria-label="Video sluiten" onClick={closeVideo}><X/></Button>{videoError&&<div className="q-video-error"><h3>De videoreview is tijdelijk niet beschikbaar.</h3><p>Probeer het later opnieuw.</p><Button asChild variant="quiet"><a href="https://www.qomv.nl/wp-content/uploads/2026/05/Videoreview-Joke-Bleijerveld.mp4" target="_blank" rel="noreferrer">Open de videolink<ArrowUpRight/></a></Button></div>}<video ref={videoRef} hidden={videoError} onError={()=>setVideoError(true)} controls playsInline preload="none" src="https://www.qomv.nl/wp-content/uploads/2026/05/Videoreview-Joke-Bleijerveld.mp4" aria-label="Videoreview van Joke Bleijerveld"/></dialog>
 </>;
}
