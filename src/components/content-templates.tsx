import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ChevronRight, Clock3, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CtaBlock, Label, SectionHeader, SiteFooter, CheckList, FaqItem } from '@/components/qomversie';
import { articleSections } from '@/lib/template-content';
import { faqs } from '@/lib/homepage-content';
import logo from '@/assets/QOMV_Nieuwe_logo_2026-02.png.asset.json';
import bank from '@/assets/E-mail_header_2.png.asset.json';
import portrait from '@/assets/Bouke-portret.webp.asset.json';
import team from '@/assets/Ons_team_2.jpeg.asset.json';

function TemplateShell({ children }: { children: ReactNode }) {
  return <><header className="paginakop"><div className="paginabreedte paginakop-binnen"><Link to="/" aria-label="Qomversie, naar de homepage"><img className="logo" src={logo.url} alt="Qomversie" width="1920" height="528" /></Link><div className="paginakop-acties"><a className="telefoon" href="tel:+31653509763"><Phone aria-hidden="true"/>06-53509763</a><CtaBlock href="/#contact"/></div></div></header><main className="inhoudssjabloon">{children}</main><SiteFooter homeHref="/"/></>;
}

function Breadcrumb({ title }: { title: string }) {
  return <nav className="kruimelpad" aria-label="Kruimelpad"><Link to="/">Home</Link><ChevronRight aria-hidden="true"/><span>{title}</span></nav>;
}

function TemplateCta() {
  return <section className="sectie vlak-zand vlak-donker sjabloon-cta"><div className="paginabreedte"><div><Label>LATEN WE KENNISMAKEN</Label><h2 className="kop-h2">Jouw volgende stap?</h2><p className="tekst">Plan je gratis adviesgesprek. Eerlijk advies, zonder verplichtingen.</p></div><CtaBlock href="/#contact"/></div></section>;
}

export function PostTemplate() {
  return <TemplateShell>
    <article>
      <header className="vlak-zand sjabloon-kop"><div className="paginabreedte"><Breadcrumb title="Bericht"/><div className="sjabloon-titel"><Label>WEBSITES · VOORBEELDBERICHT</Label><h1 className="kop-h1">Een website die voor je werkt.</h1><p className="tekst sjabloon-intro">Een mooie website is een begin. Maar hoe zorg je ervoor dat bezoekers ook de volgende stap zetten?</p><div className="bericht-meta"><span className="bericht-auteur"><img src={portrait.url} alt="" width="40" height="40"/>Bouke · Qomversie</span><span>Publicatiedatum volgt</span><span><Clock3 aria-hidden="true"/>3 minuten leestijd</span></div></div></div></header>
      <figure className="paginabreedte bericht-beeld"><img src={bank.url} alt="Bouke van Qomversie op de bank" width="1600" height="900"/><figcaption>Een persoonlijke aanpak, van de eerste vraag tot de volgende stap.</figcaption></figure>
      <div className="paginabreedte bericht-indeling"><aside className="inhoudsopgave"><nav aria-label="In dit bericht"><p>In dit bericht</p>{articleSections.map((s,i)=><a href={`#${s.id}`} key={s.id}><span>0{i+1}</span>{s.title}<ArrowRight aria-hidden="true"/></a>)}</nav></aside><div className="leesinhoud"><p className="leesintro">Je website is vaak het eerste contact met een mogelijke klant. Juist daarom verdient hij meer aandacht dan alleen een mooi ontwerp.</p>{articleSections.map((s,i)=><section id={s.id} key={s.id}><h2>{s.title}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}{s.list&&<ul>{s.list.map(item=><li key={item}>{item}</li>)}</ul>}{i===0&&<blockquote>Niet méér vertellen, maar duidelijker vertellen.</blockquote>}</section>)}<div className="auteurregel"><img src={portrait.url} alt="Bouke van Qomversie" width="72" height="72"/><div><span>Over de auteur</span><h3>Bouke · Qomversie</h3><p>Conversiegerichte websites en slimme aanvraagtools voor Friese ondernemers.</p><a href="/#over-ons">Meer over Qomversie <ArrowRight aria-hidden="true"/></a></div></div></div></div>
    </article>
    <TemplateCta/>
  </TemplateShell>;
}

export function PageTemplate() {
  return <TemplateShell>
    <header className="vlak-zand sjabloon-kop"><div className="paginabreedte"><Breadcrumb title="Losse pagina"/><div className="sjabloon-titel"><Label>QOMVERSIE · VOORBEELDPAGINA</Label><h1 className="kop-h1">Samen werken aan jouw groei.</h1><p className="tekst sjabloon-intro">Een heldere aanpak, korte lijntjes en een website die past bij jouw bedrijf.</p><div className="knoppenrij"><CtaBlock href="/#contact"/><CtaBlock variant="secondary" href="#aanpak">Onze aanpak</CtaBlock></div></div></div></header>
    <section className="sectie sectie-wit"><div className="paginabreedte pagina-inleiding leesinhoud"><Label>PERSOONLIJK & PRAKTISCH</Label><h2>Ruimte voor jouw verhaal.</h2><p className="leesintro">Je wilt vooruit met je bedrijf. Dan is het prettig als iemand met je meedenkt én het werk uit handen neemt.</p><p>Bij Qomversie beginnen we met luisteren. Wat doe je, wie wil je bereiken en waar loop je tegenaan? Vanuit die vragen bepalen we samen wat er nodig is.</p></div></section>
    <section id="aanpak" className="sectie vlak-zand"><div className="paginabreedte pagina-inhoud"><div><SectionHeader label="ONZE AANPAK" title="Van idee naar een heldere aanpak"/><p className="tekst">Geen ingewikkeld traject, maar een logisch plan. We brengen je verhaal terug naar de kern en vertalen het naar een website die werkt voor jouw bezoekers.</p><CheckList badge items={['Een duidelijke boodschap voor je klanten','Een logische route naar een aanvraag','Persoonlijk contact en korte lijntjes']}/><CtaBlock href="/#contact" variant="secondary">Laten we kennismaken</CtaBlock></div><figure><img src={team.url} alt="Bouke en het team van Qomversie" width="800" height="1000" loading="lazy"/></figure></div></section>
    <section className="sectie sectie-wit"><div className="paginabreedte pagina-inleiding leesinhoud"><h2>Een volgende stap die bij je past.</h2><p>Misschien heb je een nieuwe website nodig. Misschien kan je bestaande website beter. We kijken naar jouw situatie en geven eerlijk advies, ook als je ons nu niet nodig hebt.</p><h3>Duidelijkheid vanaf het begin</h3><p>We bespreken wat we gaan doen en waarom. Zo weet je waar je aan toe bent en kun jij verder met ondernemen.</p><a href="/#cases">Bekijk ons werk <ArrowRight aria-hidden="true"/></a></div></section>
    <section className="sectie vlak-zand"><div className="paginabreedte faq-sectie"><SectionHeader label="GOED OM TE WETEN" title="Veelgestelde vragen"/><div className="faq-lijst">{faqs.slice(1,4).map(f=><FaqItem key={f.question} {...f}/>)}</div></div></section>
    <TemplateCta/>
  </TemplateShell>;
}

export function TemplateLinks() {
  return <div className="knoppenrij"><Button asChild variant="quiet"><Link to="/bericht-sjabloon">Berichtsjabloon<ArrowRight aria-hidden="true"/></Link></Button><Button asChild variant="quiet"><Link to="/pagina-sjabloon">Paginasjabloon<ArrowRight aria-hidden="true"/></Link></Button></div>;
}