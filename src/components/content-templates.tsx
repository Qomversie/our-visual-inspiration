import { useEffect, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUp, Building2, Check, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CheckList, CtaBlock, FaqItem, ShortcodeBlock, SiteFooter, SmileMark, SmileOutline } from '@/components/qomversie';
import { alleProjecten, blogPaginaIntro, blogPosts, contactPagina, examplePost, faqGroups, faqPaginaIntro, portfolioPaginaIntro, relatedPosts, tekstpagina } from '@/lib/template-content';
import logo from '@/assets/QOMV_Nieuwe_logo_2026-02.png.asset.json';
import portrait from '@/assets/Bouke-portret.webp.asset.json';
import bank from '@/assets/E-mail_header_2.png.asset.json';
import staand from '@/assets/case-joke-bleijerveld.jpg.asset.json';
import vierkant from '@/assets/Ons_team_2.jpeg.asset.json';

/* Header and footer mirror the homepage exactly; only the logo link points to "/". */
function TemplateShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <>
    <header className={`paginakop ${scrolled ? 'scrolled' : ''}`}><div className="paginabreedte paginakop-binnen"><Link to="/" aria-label="Qomversie, naar de homepage"><img className="logo" src={logo.url} alt="Qomversie logo, websites bouwen in Friesland" width="1920" height="528" /></Link><div className="paginakop-acties"><a className="telefoon" href="tel:+31653509763"><Phone aria-hidden="true" />06-53509763</a><CtaBlock href="/#contact" /></div></div></header>
    <main className="inhoudssjabloon">{children}</main>
    <SiteFooter homeHref="/" />
  </>;
}

function BerichtResultaat({ text }: { text?: string | undefined }) {
  if (!text) return null;
  return <p className="bericht-resultaat"><ArrowUp aria-hidden="true" />{text}</p>;
}

/* Featured image is a small uncropped mockup: portrait (4:5) and square (1:1) both stay fully visible. */
function BerichtKop({ image, width, height }: { image: string; width: number; height: number }) {
  const p = examplePost;
  return <header className="vlak-zand bericht-kop">
    <div className="paginabreedte bericht-kop-raster">
      <div className="bericht-kop-tekst">
        <nav className="kruimelpad" aria-label="Kruimelpad"><Link to="/">Home</Link><ChevronRight aria-hidden="true" /><a href="#">{p.category}</a><ChevronRight aria-hidden="true" /><span aria-current="page">{p.title}</span></nav>
        {p.label && <p className="bericht-label">{p.label}</p>}
        <h1 className="kop-h1">{p.title}</h1>
        <p className="bericht-samenvatting">{p.excerpt}</p>
        <BerichtResultaat text={p.result} />
        <div className="bericht-meta"><span className="bericht-auteur"><img src={portrait.url} alt="" width="40" height="40" />{p.author}</span><span>{p.date}</span></div>
        <div className="knoppenrij"><CtaBlock href="/#contact" /><CtaBlock variant="secondary" href="tel:+31653509763">Bel direct</CtaBlock></div>
      </div>
      <div className="bericht-uitgelicht foto-smile"><SmileOutline /><img src={image} alt="Uitgelichte afbeelding van het bericht" width={width} height={height} /><SmileOutline front /></div>
    </div>
  </header>;
}

export function PostTemplate() {
  return <TemplateShell>
    <article>
      <BerichtKop image={staand.url} width={960} height={1200} />
      <p className="paginabreedte bericht-voorbeeld-label">Voorbeeld met vierkante uitgelichte afbeelding (1:1):</p>
      <BerichtKop image={vierkant.url} width={800} height={800} />

      <div className="paginabreedte bericht-indeling">
        {/* Inhoud komt in WordPress uit Post Content; dit is voorbeeldopmaak van alle elementen. */}
        <div className="bericht-inhoud">
          <p>Je website is vaak het eerste contact met een mogelijke klant. Juist daarom verdient hij <strong>meer aandacht</strong> dan alleen een mooi ontwerp. Lees ook <a href="#">hoe we werken</a>.</p>
          <h2>Begin met een duidelijke boodschap</h2>
          <p>Een bezoeker wil snel weten of hij bij jou aan het juiste adres is. Vertel daarom direct wat je doet, voor wie je dat doet en wat het oplevert.</p>
          <h3>Wat een bezoeker eerst ziet</h3>
          <p>Geef de belangrijkste informatie eerst en laat de rest van je pagina daarop aansluiten.</p>
          <ul><li>Eén duidelijke actie per onderdeel.</li><li>Een formulier dat alleen vraagt wat nodig is.</li><li>Heldere verwachtingen over wat er daarna gebeurt.</li></ul>
          <blockquote><p>Niet méér vertellen, maar duidelijker vertellen.</p></blockquote>
          <h4>Stappen om te beginnen</h4>
          <ol><li>Schrijf op wat je klant wil bereiken.</li><li>Kies per pagina één doel.</li><li>Meet wat er gebeurt en verbeter.</li></ol>
          <figure><img src={bank.url} alt="Voorbeeldafbeelding in de tekst" width="1200" height="900" loading="lazy" /><figcaption>Afbeelding met bijschrift, geplaatst vanuit het bericht zelf.</figcaption></figure>
          <table><thead><tr><th>Onderdeel</th><th>Voor</th><th>Na</th></tr></thead><tbody><tr><td>Conversie</td><td>1,2%</td><td>1,7%</td></tr><tr><td>Aanvragen per maand</td><td>14</td><td>22</td></tr></tbody></table>
          <hr />
          <p>Voorbeeldcijfers en -teksten; in WordPress komt alle inhoud uit het bericht.</p>
        </div>
        <aside className="bericht-zijbalk">
          <div className="bericht-hulpkaart">
            <div className="bericht-hulpkaart-kop"><img src={portrait.url} alt="" width="52" height="52" /><h3>Hulp nodig bij je website?</h3></div>
            <ul>{['Persoonlijk contact met Bouke', 'Eerlijk advies, zonder verplichtingen', 'Voor Friese ondernemers'].map(t => <li key={t}><Check aria-hidden="true" />{t}</li>)}</ul>
            <CtaBlock href="/#contact" />
            <a className="bericht-hulpkaart-tel" href="tel:+31653509763"><Phone aria-hidden="true" />06-53509763</a>
          </div>
          <nav className="bericht-andere" aria-label="Andere berichten"><p>ANDERE BERICHTEN</p>{relatedPosts.map(r => <a href="#" key={r.title}><strong>{r.title}</strong>{r.label && <span>{r.label}</span>}</a>)}<small>Voorbeeldtitels — in WordPress gevuld met recente berichten.</small></nav>
        </aside>
      </div>

    </article>
  </TemplateShell>;
}

/* ===== Inhoudspagina's (pagina-) ===== */

/* Lage paginakop, herbruikbaar op alle inhoudspagina's. Duidelijk lager dan de berichtkop, zonder foto. */
function PaginaKop({ title, intro }: { title: string; intro?: string }) {
  return <div className="pagina-kop"><div className="paginabreedte pagina-kop-binnen">
    <nav className="kruimelpad" aria-label="Kruimelpad"><Link to="/">Home</Link><ChevronRight aria-hidden="true" /><span aria-current="page">{title}</span></nav>
    <h1 className="pagina-kop-titel"><SmileMark className="smile-icoon pagina-kop-smile" />{title}</h1>
    {intro && <p className="pagina-intro">{intro}</p>}
  </div></div>;
}

/* 1. Tekstpagina: alleen leestekst, in WordPress uit de pagina zelf. */
export function TekstPaginaTemplate() {
  return <TemplateShell>
    <PaginaKop title={tekstpagina.title} />
    <div className="paginabreedte pagina-leesblok">
      <p className="pagina-bijgewerkt">{tekstpagina.updated}</p>
      <div className="bericht-inhoud">
        <p>De inhoud komt in WordPress uit de pagina zelf; dit is voorbeeldopmaak van alle elementen. Lees ook <a href="#">hoe we werken</a>.</p>
        <h2>Kop twee in de leestekst</h2>
        <p>Een alinea met <strong>vetgedrukte tekst</strong> en een gewone zin over het beleid van Qomversie.</p>
        <ul><li>Een punt uit de lijst.</li><li>Nog een punt uit de lijst.</li></ul>
        <h3>Kop drie</h3>
        <table><thead><tr><th>Onderdeel</th><th>Toelichting</th></tr></thead><tbody><tr><td>Gegevens</td><td>Welke gegevens we bewaren</td></tr><tr><td>Bewaartermijn</td><td>Hoe lang we gegevens bewaren</td></tr></tbody></table>
        <p>Een afsluitende alinea met een <a href="#">voorbeeldlink</a>.</p>
      </div>
      <div className="pagina-vragen">
        <h2 className="kop-h3">Vragen over deze pagina?</h2>
        <p className="tekst-klein">Mail <a href="mailto:info@qomv.nl">info@qomv.nl</a> of bel <a href="tel:+31653509763">06-53509763</a>.</p>
      </div>
    </div>
  </TemplateShell>;
}

/* 2. FAQ-pagina: echte vragen in groepen, open en dicht met details/summary. */
export function FaqPaginaTemplate() {
  return <TemplateShell>
    <PaginaKop title="Veelgestelde vragen" intro={faqPaginaIntro} />
    <div className="paginabreedte pagina-faq">
      <nav className="pagina-faq-ankers" aria-label="FAQ-groepen">{faqGroups.map(g => <a href={`#${g.id}`} key={g.id}>{g.name}</a>)}</nav>
      <div className="pagina-faq-groepen">
        {faqGroups.map(g => <section className="faq-groep" key={g.id} id={g.id}><h2 className="kop-h3">{g.name}</h2><div className="faq-lijst">{g.items.map(f => <FaqItem key={f.question} {...f} />)}</div></section>)}
        <p className="tekst-klein">De vragen zijn echt; de antwoorden zijn voorbeelden en worden in WordPress per vraag gevuld.</p>
      </div>
    </div>
  </TemplateShell>;
}

/* 3. Bevestiging: na het plannen van een gratis adviesgesprek; zelfde paginakop als de andere sjablonen. */
export function BevestigingTemplate() {
  return <TemplateShell>
    <PaginaKop title="Je adviesgesprek staat gepland" intro="Je ontvangt zo een bevestiging per mail met alle gegevens van het gesprek." />
    <div className="paginabreedte pagina-leesblok">
      <div className="bericht-inhoud">
        <p>Je hebt een gratis adviesgesprek van 30 minuten gepland met Bouke. Dit is wat je kunt verwachten:</p>
        <ol><li>Je krijgt een bevestiging per mail.</li><li>Bouke bekijkt je website vooraf.</li><li>In het gesprek gaan we direct met je website aan de slag.</li></ol>
        <p>Vragen of wil je het gesprek verzetten? Mail <a href="mailto:info@qomv.nl">info@qomv.nl</a> of bel <a href="tel:+31653509763">06-53509763</a>.</p>
      </div>
      <div className="knoppenrij">
        <Button asChild variant="quiet"><Link to="/">Terug naar de homepage</Link></Button>
      </div>
    </div>
  </TemplateShell>;
}

/* 4. Blogoverzicht: voorbeeldkaarten; in WordPress een lus over de categorie Blogs. */
export function BlogPaginaTemplate() {
  return <TemplateShell>
    <PaginaKop title="Blog" intro={blogPaginaIntro} />
    <div className="paginabreedte pagina-lijst">
      <div className="blog-raster">
        {blogPosts.map(p => <article className="blog-kaart" key={p.title}>
          <a className="blog-beeldhouder" href="#" tabIndex={-1} aria-hidden="true">{p.image ? <img src={p.image} alt="" loading="lazy" /> : null}</a>
          <div className="blog-tekst">
            <h3><a href="#">{p.title}</a></h3>
            <p className="blog-samenvatting">{p.excerpt}</p>
            <p className="blog-meta"><span>{p.date}</span><a className="blog-meer" href="#">Lees verder<ArrowRight aria-hidden="true" /></a></p>
          </div>
        </article>)}
      </div>
      <p className="tekst-klein">Voorbeeldkaarten; in WordPress gevuld met berichten uit de categorie Blogs, allemaal op één pagina.</p>
    </div>
  </TemplateShell>;
}

/* Portfolio: alle projecten in één compact raster, nieuwste eerst; projecten zonder foto tonen een klein vlak. */
export function PortfolioTemplate() {
  return <TemplateShell>
    <PaginaKop title="Portfolio" intro={portfolioPaginaIntro} />
    <div className="paginabreedte pagina-lijst">
      <section className="pagina-sectie" aria-labelledby="portfolio-projecten"><h2 className="kop-h2" id="portfolio-projecten">Alle projecten</h2>
        <div className="pagina-cases">{alleProjecten.map((p, i) => <article className="pagina-case" key={`${p.name}-${i}`}>
          {p.image
            ? <img src={p.image} alt={`Project voor ${p.name}, website gebouwd door Qomversie in Friesland`} loading="lazy" />
            : <div className="pagina-case-beeld" role="img" aria-label={`Projectfoto ${p.name} volgt`}><span>Projectfoto volgt</span></div>}
          <h3>{p.name}</h3><p>{p.line}</p>
        </article>)}</div>
        <p className="tekst-klein">Nieuwste projecten staan bovenaan; zolang een foto nog niet is aangeleverd, tonen we een klein leeg vlak.</p>
      </section>
    </div>
  </TemplateShell>;
}

/* 6. Contactpagina: gegevens links, afsprakenplanner rechts. */
export function ContactPaginaTemplate() {
  return <TemplateShell>
    <PaginaKop title="Contact" intro={contactPagina.intro} />
    <div className="paginabreedte pagina-contactraster">
      <div className="pagina-contactgegevens">
        <ul className="pagina-gegevens">
          <li><Phone aria-hidden="true" /><a href="tel:+31653509763">06-53509763</a></li>
          <li><Mail aria-hidden="true" /><a href="mailto:info@qomv.nl">info@qomv.nl</a></li>
          <li><MapPin aria-hidden="true" /><span>Friesland en Noord-Nederland</span></li>
          <li><Building2 aria-hidden="true" /><span>KvK 82383081</span></li>
        </ul>
        <figure className="pagina-contactfoto"><img src={portrait.url} alt="Bouke van Qomversie" width="540" height="750" loading="lazy" /><figcaption>Je spreekt altijd direct met mij</figcaption></figure>
        <CheckList badge items={contactPagina.points} />
      </div>
      <div className="pagina-planner"><div className="planner"><ShortcodeBlock code="hubspot-agenda" note="Hier komt de afsprakenplanner" /></div></div>
    </div>
  </TemplateShell>;
}

const templateRoutes = [
  { to: '/bericht-sjabloon', label: 'Berichtsjabloon' },
  { to: '/tekstpagina-sjabloon', label: 'Tekstpagina' },
  { to: '/faq-sjabloon', label: 'FAQ-pagina' },
  { to: '/bevestiging-sjabloon', label: 'Bevestiging' },
  { to: '/blog-sjabloon', label: 'Blogoverzicht' },
  { to: '/portfolio-sjabloon', label: 'Portfolio' },
  { to: '/contact-sjabloon', label: 'Contactpagina' },
] as const;

export function TemplateLinks() {
  return <div className="knoppenrij">{templateRoutes.map(r => <Button asChild variant="quiet" key={r.to}><Link to={r.to}>{r.label}<ArrowRight aria-hidden="true" /></Link></Button>)}</div>;
}
