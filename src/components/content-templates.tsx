// ============= Full file contents =============

import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Check, ChevronRight, Clock3, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CtaBlock, SiteFooter } from '@/components/qomversie';
import { articleSections, otherPosts } from '@/lib/template-content';
import logo from '@/assets/QOMV_Nieuwe_logo_2026-02.png.asset.json';
import portrait from '@/assets/Bouke-portret.webp.asset.json';

function TemplateShell({ children }: { children: ReactNode }) {
  return <><header className="paginakop"><div className="paginabreedte paginakop-binnen"><Link to="/" aria-label="Qomversie, naar de homepage"><img className="logo" src={logo.url} alt="Qomversie" width="1920" height="528" /></Link><div className="paginakop-acties"><a className="telefoon" href="tel:+31653509763"><Phone aria-hidden="true"/>06-53509763</a><CtaBlock href="/#contact"/></div></div></header><main className="inhoudssjabloon">{children}</main><SiteFooter homeHref="/"/></>;
}

function Breadcrumb({ title }: { title: string }) {
  return <nav className="kruimelpad" aria-label="Kruimelpad"><Link to="/">Home</Link><ChevronRight aria-hidden="true"/><span>{title}</span></nav>;
}

export function PostTemplate() {
  return <TemplateShell>
    <article>
      <header className="vlak-zand vlak-donker berichtkop">
        <div className="paginabreedte"><div className="berichtkop-binnen">
          <Breadcrumb title="Bericht"/>
          <div className="berichtkop-tags"><span>WEBSITES</span><span>VOORBEELDBERICHT</span></div>
          <h1 className="kop-h1">Een website die voor je werkt.</h1>
          <p className="berichtkop-intro">Korte samenvatting van het bericht: in één of twee zinnen waarom dit de moeite waard is om te lezen.</p>
          <div className="bericht-meta"><span className="bericht-auteur"><img src={portrait.url} alt="" width="40" height="40"/>Bouke · Qomversie</span><span>Publicatiedatum volgt</span><span><Clock3 aria-hidden="true"/>3 minuten leestijd</span></div>
          <div className="knoppenrij"><CtaBlock href="/#contact"/><Button asChild variant="light" size={null}><a href="tel:+31653509763"><Phone aria-hidden="true"/>Bel direct</a></Button></div>
        </div></div>
      </header>
      <div className="paginabreedte bericht-indeling">
        <div className="leesinhoud">
          <p className="leesintro">Je website is vaak het eerste contact met een mogelijke klant. Juist daarom verdient hij meer aandacht dan alleen een mooi ontwerp.</p>
          {articleSections.map((s,i)=><section id={s.id} key={s.id}>
            <h2>{s.title}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}
            {i===0&&<figure className="bericht-beeld"><img src={portrait.url} alt="Bouke van Qomversie" width="800" height="1000"/><figcaption>Uitgelichte afbeelding van het bericht: staand of vierkant, onder de tekst.</figcaption></figure>}{s.list&&<ul>{s.list.map(item=><li key={item}>{item}</li>)}</ul>}{i===0&&<blockquote>Niet méér vertellen, maar duidelijker vertellen.</blockquote>}
          </section>)}
        </div>
        <aside className="zijkolom"><div className="zijkolom-plak">
          <div className="advieskaart">
            <div className="advieskaart-kop"><img src={portrait.url} alt="" width="52" height="52"/><h3>Hulp nodig bij je website?</h3></div>
            <ul>{['Persoonlijk contact met Bouke','Eerlijk advies, zonder verplichtingen','Voor Friese ondernemers'].map(t=><li key={t}><Check aria-hidden="true"/>{t}</li>)}</ul>
            <CtaBlock href="/#contact"/>
            <a className="advieskaart-tel" href="tel:+31653509763"><Phone aria-hidden="true"/>06-53509763</a>
          </div>
          <nav className="inhoudsopgave" aria-label="Op deze pagina"><p>OP DEZE PAGINA</p>{articleSections.map(s=><a href={`#${s.id}`} key={s.id}>{s.title}<ArrowRight aria-hidden="true"/></a>)}</nav>
          <nav className="andere-berichten" aria-label="Andere berichten"><p>ANDERE BERICHTEN</p>{otherPosts.map(o=><a href="#" key={o.title}><strong>{o.title}</strong><span>{o.meta}</span></a>)}<small>Voorbeeldtitels — in Elementor gevuld met recente berichten.</small></nav>
        </div></aside>
      </div>
    </article>
  </TemplateShell>;
}

export function TemplateLinks() {
  return <div className="knoppenrij"><Button asChild variant="quiet"><Link to="/bericht-sjabloon">Berichtsjabloon<ArrowRight aria-hidden="true"/></Link></Button></div>;
}
