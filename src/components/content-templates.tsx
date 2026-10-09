import { useEffect, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUp, Check, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CtaBlock, SiteFooter, SmileOutline } from '@/components/qomversie';
import { examplePost, relatedPosts } from '@/lib/template-content';
import logo from '@/assets/QOMV_Nieuwe_logo_2026-02.png.asset.json';
import portrait from '@/assets/Bouke-portret.webp.asset.json';
import bank from '@/assets/E-mail_header_2.png.asset.json';

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

export function PostTemplate() {
  const p = examplePost;
  return <TemplateShell>
    <article>
      <header className="vlak-zand vlak-donker bericht-kop">
        <div className="paginabreedte bericht-kop-raster">
          <div className="bericht-kop-tekst">
            <nav className="kruimelpad" aria-label="Kruimelpad"><Link to="/">Home</Link><ChevronRight aria-hidden="true" /><a href="#">{p.category}</a><ChevronRight aria-hidden="true" /><span aria-current="page">{p.title}</span></nav>
            {p.label && <p className="bericht-label">{p.label}</p>}
            <h1 className="kop-h1">{p.title}</h1>
            <p className="bericht-samenvatting">{p.excerpt}</p>
            <BerichtResultaat text={p.result} />
            <div className="bericht-meta"><span className="bericht-auteur"><img src={portrait.url} alt="" width="40" height="40" />{p.author}</span><span>{p.date}</span></div>
            <div className="knoppenrij"><CtaBlock href="/#contact" /><Button asChild variant="light" size={null}><a href="tel:+31653509763"><Phone aria-hidden="true" />Bel direct</a></Button></div>
          </div>
          <div className="bericht-uitgelicht foto-smile"><SmileOutline /><img src={bank.url} alt="Uitgelichte afbeelding van het bericht" width="1200" height="900" /><SmileOutline front /></div>
        </div>
      </header>

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

export function TemplateLinks() {
  return <div className="knoppenrij"><Button asChild variant="quiet"><Link to="/bericht-sjabloon">Berichtsjabloon<ArrowRight aria-hidden="true" /></Link></Button></div>;
}
