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
 return <section id="cases" className="sectie sectie-wit cases">
  <div className="paginabreedte kop-rij"><SectionHeader label="ONS WERK" title="Cases waar we trots op zijn"/><div className="cases-zijkant"><p className="tekst">Een greep uit ons werk voor Friese ondernemers.</p><div className="cases-acties"><CtaBlock variant="secondary" href="#cases">Bekijk alle cases</CtaBlock><div className="slider-knoppen"><span className="case-teller" aria-live="polite">{String(pos.index+1).padStart(2,'0')} / {String(cases.length).padStart(2,'0')}</span><Button variant="round" disabled={pos.start} onClick={()=>scroll(-1)} aria-label="Vorige case"><ArrowLeft/></Button><Button variant="round" disabled={pos.end} onClick={()=>scroll(1)} aria-label="Volgende case"><ArrowRight/></Button></div></div></div></div>
  <div className="cases-carrousel"><div className="case-rij" ref={ref} onScroll={update}>{cases.map(c=><CaseCard key={c.name} {...c} />)}</div></div>
 </section>;
}

function Index() {
 const [scrolled,setScrolled]=useState(false);const [pastHero,setPastHero]=useState(false);
 useEffect(()=>{
  const onScroll=()=>{setScrolled(window.scrollY>30);const el=document.getElementById('hero');setPastHero((el?.getBoundingClientRect().bottom??1)<0);};onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.06});document.querySelectorAll('.inschuiven').forEach(el=>observer.observe(el));
  return()=>{window.removeEventListener('scroll',onScroll);observer.disconnect();};
 },[]);
 const structuredData = {'@context':'https://schema.org','@graph':[
  {'@type':'LocalBusiness',name:'Qomversie',url:'https://www.qomv.nl',telephone:'+31653509763',email:'info@qomv.nl',areaServed:{'@type':'AdministrativeArea',name:'Friesland'},address:{'@type':'PostalAddress',addressRegion:'Friesland',addressCountry:'NL'},aggregateRating:{'@type':'AggregateRating',ratingValue:'5.0',reviewCount:23,bestRating:'5'}},
  {'@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))},
 ]};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
  <header className={`paginakop ${scrolled?'scrolled':''}`}><div className="paginabreedte paginakop-binnen"><a href="#hero" aria-label="Qomversie, naar boven"><img className="logo" src={logo.url} alt="Qomversie logo, websites bouwen in Friesland" width="1920" height="528"/></a><div className="paginakop-acties"><a className="telefoon" href="tel:+31653509763"><Phone aria-hidden="true"/>06-53509763</a><CtaBlock/></div></div></header>
  <main>
   <div className="vlak-zand hero-vlak">
   <section id="hero" className="sectie sectie-zonder-ruimte paginabreedte hero">
    
    <div className="hero-tekst">
     <p className="pil"><Google/><Stars/><span>5.0 · 23 Google reviews</span></p>
     <Label>WEBSITE LATEN BOUWEN IN FRIESLAND</Label>
     <h1 className="kop-h1">Meer dan een <em>mooie</em> website.</h1>
     <p className="tekst">Wij bouwen <strong>conversiegerichte websites</strong> met op maat gemaakte <strong>aanvraagtools.</strong></p>
     <p className="tekst">Zo ontvang je niet alleen sneller, maar vooral betere aanvragen en bel jij alleen nog met serieuze mensen. Dat scheelt je uren aan offertes die niks opleveren.</p>
     <div className="knoppenrij"><CtaBlock/><CtaBlock variant="secondary" href="#cases">Ons werk bekijken</CtaBlock></div>
     <HeroStats/>
    </div>
    <div className="hero-foto foto-smile"><SmileOutline/><img className="portret" src={portrait.url} alt="Bouke van Qomversie, website laten bouwen in Friesland" width="540" height="750"/><SmileOutline front/><RotatingBadge id="hero-badge"/></div>
   </section>
   <section className="sectie sectie-zonder-ruimte hero-vervolg" aria-label="Wat je eraan hebt">
    <div className="paginabreedte hero-vervolg-binnen">
     <div className="voordelen">{benefits.map(({Icon,title,text})=><article className="kaart" key={title}><Icon aria-hidden="true"/><h3 className="kop-h3">{title}</h3><p className="tekst">{text}</p></article>)}</div>
    </div>
   </section>

   </div>
   <LogoStrip/>
   <section id="succesverhalen" className="sectie sectie-wit succes-sectie"><ResultCards/></section>
      <section id="over-ons" className="sectie vlak-zand"><div className="paginabreedte over-ons inschuiven">
    <div className="over-ons-tekst"><SectionHeader label="OVER ONS" title="Hoi! Wij zijn Qomversie"/><p className="tekst">Ik weet hoe het is om als ondernemer alles zelf te doen en toch het gevoel te hebben dat je langzaam groeit. Daarom bouw ik resultaatgerichte websites voor Friese bedrijven die daadwerkelijk klanten en tijdwinst opleveren.</p><p className="tekst">Geen groot bureau met lange wachttijden. Geen agency die alleen adviseert. Geen freelancer die alleen bouwt. Gewoon ik, met een vast team van specialisten. Korte lijntjes, snel schakelen, altijd bereikbaar.</p><p className="tekst">Sindsdien hebben we:</p><CheckList badge items={aboutChecks}/><CtaBlock variant="secondary">Laten we kennismaken</CtaBlock></div>
    <div className="over-ons-foto foto-smile"><SmileOutline/><img src={team.url} alt="Bouke van Qomversie, websites bouwen in Friesland" width="800" height="1000" loading="lazy"/><SmileOutline front/></div>
   </div></section>
   <CaseCarousel/>
   <section id="diensten" className="sectie vlak-zand"><div className="paginabreedte inschuiven"><SectionHeader label="START MET GROEIEN!" title="Wat wil je bereiken?"/><div className="diensten">{services.map((s,i)=><a className="kaart" href="#contact" key={s.title}><span className="diensten-nummer">0{i+1}</span><ArrowUpRight className="diensten-pijl" aria-hidden="true"/><h3 className="kop-h3">{s.title}</h3><p className="diensten-subtitel">{s.subtitle}</p><p className="tekst">{s.text}</p><CheckList items={s.checks}/><span className="knop knop-secundair">Gratis advies<ArrowRight aria-hidden="true"/></span></a>)}</div></div></section>
      <section id="reviews" className="sectie sectie-wit"><div className="paginabreedte inschuiven"><SectionHeader label="RECENSIES" title="Vertrouwd door onze klanten"/><div className="reviews-blok"><ShortcodeBlock code="reviews" note="Hier komt de reviews-widget"/></div></div></section>
   <PhotoCta/>
   <section id="beloftes" className="sectie vlak-zand"><div className="paginabreedte beloftes inschuiven"><div className="beloftes-intro"><SectionHeader label="ONZE BELOFTES" title="Groeien zonder risico"><p className="tekst">Geen gedoe, geen verrassingen. Dit kun je van ons verwachten.</p></SectionHeader><CtaBlock/></div><div className="beloftes-raster">{promises.map(({Icon,title,text})=><article className="beloftes-kaart" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
   <section id="faq" className="sectie sectie-wit"><div className="paginabreedte faq-sectie inschuiven"><SectionHeader label="FAQ" title="Veelgestelde vragen"/><div className="faq-lijst">{faqs.map(f=><FaqItem key={f.question} {...f}/>)}</div></div></section>
   <section id="contact" className="sectie vlak-zand contact-kolommen inschuiven">
     <div className="paginabreedte contact"><div className="contact-tekst"><SectionHeader label="KLAAR OM TE GROEIEN?" title="Plan je gratis adviesgesprek!"/><p className="tekst">Ontdek in 30 minuten hoeveel het jou kan opleveren.</p><CheckList badge items={['Gratis en vrijblijvend','30 minuten, op locatie of via video','Eerlijk advies, ook als je ons nu niet nodig hebt']}/><p className="belregel">Liever even bellen? <a href="tel:+31653509763">06-53509763</a></p></div><div className="planner-kader"><div className="planner"><ShortcodeBlock code="hubspot-agenda" note="Hier komt de HubSpot-afspraakplanner"/></div></div></div>
    </section>
  </main>
  <SiteFooter/>
  <div className={`mobiele-knop ${pastHero?'active':''}`}><CtaBlock/></div>

 </>;
}
