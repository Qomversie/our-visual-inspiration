import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft, Phone, MousePointer2, Clock3, Search, Layers, ShieldCheck, BadgeCheck, Handshake, Wallet, ChartNoAxesCombined } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { faqs, services, aboutChecks, cases } from '@/lib/homepage-content';
import { SectionHeader, CtaBlock, CaseCard, RotatingBadge, ShortcodeBlock, FaqItem, CheckList, Stars, Google, Label, SmileOutline, LogoStrip, ResultCards, HeroStats, PhotoCta, SiteFooter } from '@/components/qomversie';
import logo from '@/assets/QOMV_Nieuwe_logo_2026-02.png.asset.json';
import portrait from '@/assets/Bouke-portret.webp.asset.json';
import team from '@/assets/Ons_team_2.jpeg.asset.json';

const TITLE = 'Website laten bouwen in Friesland | Qomversie';
const DESCRIPTION = 'Website laten bouwen in Friesland? Qomversie bouwt conversiegerichte websites met slimme aanvraagtools die klanten opleveren. Plan je gratis adviesgesprek.';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: TITLE }, { name: 'description', content: DESCRIPTION },
  { property: 'og:title', content: TITLE }, { property: 'og:description', content: DESCRIPTION },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
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
 const [pos,setPos]=useState({start:true,end:false,index:0});
 const update=()=>{const el=ref.current;if(!el)return;const kids=[...el.children] as HTMLElement[];const base=kids[0]?.offsetLeft??0;let index=0;kids.forEach((k,i)=>{if(k.offsetLeft-base<=el.scrollLeft+8)index=i;});const end=el.scrollLeft+el.clientWidth>=el.scrollWidth-5;setPos({start:el.scrollLeft<5,end,index:end?kids.length-1:index});};
 useEffect(()=>{update();window.addEventListener('resize',update);return()=>window.removeEventListener('resize',update);},[]);
 const scroll=(d:number)=>{const el=ref.current;if(!el)return;const kids=[...el.children] as HTMLElement[];const target=kids[Math.max(0,Math.min(kids.length-1,pos.index+d))];el.scrollTo({left:(target?.offsetLeft??0)-(kids[0]?.offsetLeft??0),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});};
 return <section id="cases" className="q-section q-section--white q-cases">
  <div className="q-container q-heading-row"><SectionHeader label="ONS WERK" title="Cases waar we trots op zijn"/><div className="q-cases-aside"><p className="q-text">Een greep uit ons werk voor Friese ondernemers.</p><div className="q-cases-actions"><CtaBlock variant="secondary" href="#cases">Bekijk alle cases</CtaBlock><div className="q-slider-controls"><span className="q-case-count" aria-live="polite">{String(pos.index+1).padStart(2,'0')} / {String(cases.length).padStart(2,'0')}</span><Button variant="round" disabled={pos.start} onClick={()=>scroll(-1)} aria-label="Vorige case"><ArrowLeft/></Button><Button variant="round" disabled={pos.end} onClick={()=>scroll(1)} aria-label="Volgende case"><ArrowRight/></Button></div></div></div></div>
  <div className="q-cases-carousel"><div className="q-case-track" ref={ref} onScroll={update}>{cases.map(c=><CaseCard key={c.name} {...c} />)}</div></div>
 </section>;
}

function Index() {
 const [scrolled,setScrolled]=useState(false);const [pastHero,setPastHero]=useState(false);
 useEffect(()=>{
  const onScroll=()=>{setScrolled(window.scrollY>30);const el=document.getElementById('hero');setPastHero((el?.getBoundingClientRect().bottom??1)<0);};onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.06});document.querySelectorAll('.q-reveal').forEach(el=>observer.observe(el));
  return()=>{window.removeEventListener('scroll',onScroll);observer.disconnect();};
 },[]);
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
     <HeroStats/>
    </div>
    <div className="q-hero-photo q-smile-outline-host"><SmileOutline/><img className="q-portrait" src={portrait.url} alt="Bouke van Qomversie, website laten bouwen in Friesland" width="540" height="750"/><SmileOutline front/><RotatingBadge id="hero-badge"/></div>
   </section>
   <section className="q-section q-section--flush q-hero-follow" aria-label="Wat je eraan hebt">
    <div className="q-container q-hero-follow-inner">
     <div className="q-benefits">{benefits.map(({Icon,title,text})=><article className="q-card" key={title}><Icon aria-hidden="true"/><h3 className="q-h3">{title}</h3><p className="q-text">{text}</p></article>)}</div>
    </div>
   </section>

   </div>
   <LogoStrip/>
   <section id="succesverhalen" className="q-section q-section--white q-results-section"><ResultCards/></section>
      <section id="over-ons" className="q-section q-panel"><div className="q-container q-about q-reveal">
    <div className="q-about-copy"><SectionHeader label="OVER ONS" title="Hoi! Wij zijn Qomversie"/><p className="q-text">Ik weet hoe het is om als ondernemer alles zelf te doen en toch het gevoel te hebben dat je langzaam groeit. Daarom bouw ik resultaatgerichte websites voor Friese bedrijven die daadwerkelijk klanten en tijdwinst opleveren.</p><p className="q-text">Geen groot bureau met lange wachttijden. Geen agency die alleen adviseert. Geen freelancer die alleen bouwt. Gewoon ik, met een vast team van specialisten. Korte lijntjes, snel schakelen, altijd bereikbaar.</p><p className="q-text">Sindsdien hebben we:</p><CheckList badge items={aboutChecks}/><CtaBlock variant="secondary">Laten we kennismaken</CtaBlock></div>
    <div className="q-about-photo q-smile-outline-host"><SmileOutline/><img src={team.url} alt="Bouke van Qomversie, websites bouwen in Friesland" width="800" height="1000" loading="lazy"/><SmileOutline front/></div>
   </div></section>
   <CaseCarousel/>
   <section id="diensten" className="q-section q-panel"><div className="q-container q-reveal"><SectionHeader label="START MET GROEIEN!" title="Wat wil je bereiken?"/><div className="q-services">{services.map((s,i)=><a className="q-card" href="#contact" key={s.title}><span className="q-service-number">0{i+1}</span><ArrowUpRight className="q-service-arrow" aria-hidden="true"/><h3 className="q-h3">{s.title}</h3><p className="q-service-subtitle">{s.subtitle}</p><p className="q-text">{s.text}</p><CheckList items={s.checks}/><span className="q-btn q-btn--secondary">Gratis advies<ArrowRight aria-hidden="true"/></span></a>)}</div></div></section>
      <section id="reviews" className="q-section q-section--white"><div className="q-container q-reveal"><SectionHeader label="RECENSIES" title="Vertrouwd door onze klanten"/><div className="q-reviews-block"><ShortcodeBlock code="reviews" note="Hier komt de reviews-widget"/></div></div></section>
   <PhotoCta/>
   <section id="beloftes" className="q-section q-panel"><div className="q-container q-promises q-reveal"><div className="q-promises-intro"><SectionHeader label="ONZE BELOFTES" title="Groeien zonder risico"><p className="q-text">Geen gedoe, geen verrassingen. Dit kun je van ons verwachten.</p></SectionHeader><CtaBlock/></div><div className="q-promise-grid">{promises.map(({Icon,title,text})=><article className="q-promise" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
   <section id="faq" className="q-section q-section--white"><div className="q-container q-faq-section q-reveal"><SectionHeader label="FAQ" title="Veelgestelde vragen"/><div className="q-faq-list">{faqs.map(f=><FaqItem key={f.question} {...f}/>)}</div></div></section>
   <section id="contact" className="q-section q-panel q-contact-wrap q-reveal">
     <div className="q-container q-contact"><div className="q-contact-copy"><SectionHeader label="KLAAR OM TE GROEIEN?" title="Plan je gratis adviesgesprek!"/><p className="q-text">Ontdek in 30 minuten hoeveel het jou kan opleveren.</p><CheckList badge items={['Gratis en vrijblijvend','30 minuten, op locatie of via video','Eerlijk advies, ook als je ons nu niet nodig hebt']}/><p className="q-call">Liever even bellen? <a href="tel:+31653509763">06-53509763</a></p></div><div className="q-planner-wrap"><div className="q-planner"><ShortcodeBlock code="hubspot-agenda" note="Hier komt de HubSpot-afspraakplanner"/></div></div></div>
    </section>
  </main>
  <SiteFooter/>
  <div className={`q-mobile-cta ${pastHero?'active':''}`}><CtaBlock/></div>

 </>;
}
