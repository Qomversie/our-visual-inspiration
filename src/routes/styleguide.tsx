import { createFileRoute } from '@tanstack/react-router';
import { designVariables, designClasses, faqs, aboutChecks, sectionOrder } from '@/lib/homepage-content';
import { SectionHeader, CtaBlock, CaseCard, RotatingBadge, ShortcodeBlock, FaqItem, CheckList, SmileMark, SmileOutline, Workflow, Label, LogoStrip, ResultsPanel, HeroStats, PhotoCta } from '@/components/qomversie';

export const Route = createFileRoute('/styleguide')({
  head: () => ({ meta: [
    { title: 'Styleguide voor Elementor | Qomversie' },
    { name: 'description', content: 'Bouwtekening van de Qomversie-homepage: variabelen, classes en componenten voor Elementor Pro.' },
    { property: 'og:title', content: 'Styleguide voor Elementor | Qomversie' },
    { property: 'og:description', content: 'Variabelen, classes en componenten van de Qomversie-homepage.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }),
  component: Styleguide,
});

function Styleguide() {
  return <main className="q-container q-section q-guide">
    <h1 className="q-h1">Styleguide</h1>
    <section><h2 className="q-h2">Variabelen</h2><div className="q-guide-grid">{designVariables.map(([name, value]) => <div className="q-card" key={name}>{name.startsWith('--q-') && value.startsWith('#') && <span className="q-swatch" style={{ background: `var(${name})` }} />}<code>{name}</code><p className="q-note">{value}</p></div>)}</div></section>
    <section><h2 className="q-h2">Classes</h2><div className="q-guide-grid">{designClasses.map(c => <code className="q-card" key={c}>.{c}</code>)}</div></section>
    <section><h2 className="q-h2">Typografie</h2><Label>LABEL</Label><p className="q-h1">H1 Meer dan een <em>mooie</em> website.</p><SectionHeader title="Cases waar we trots op zijn"/><p className="q-h3">H3 kop</p><p className="q-note">H2: Lora 600, 64px / mobiel 38px, regelhoogte 1.05, gevuld in Zwartig. Alleen de kop Succesverhalen heeft een eerste omlijnde regel (1px Sand) en een tweede gevulde regel in het donkere vlak. Regelafbrekingen staan in de contentdata (homepage-content.ts). H3: Lora 500. Alleen "mooie" in de H1 is Lora Italic Ginger.</p><p className="q-text">Bodytekst in Inter.</p></section>
    <section><h2 className="q-h2">Componenten</h2>
      <h3 className="q-h3">SectionHeader</h3><SectionHeader label="LABEL" title="Sectiekop"/>
      <h3 className="q-h3">CtaBlock</h3><div className="q-actions"><CtaBlock/><CtaBlock variant="secondary">Secundair</CtaBlock></div><CtaBlock note="30 minuten · vrijblijvend"/>
      <h3 className="q-h3">RotatingBadge</h3><div className="q-guide-badge"><RotatingBadge id="guide-badge"/></div>
      <h3 className="q-h3">CheckList</h3><CheckList items={aboutChecks.slice(0, 2)}/>
      <h3 className="q-h3">ShortcodeBlock</h3><ShortcodeBlock code="reviews" note="Hier komt de reviews-widget"/>
      <h3 className="q-h3">CaseCard</h3><div className="q-case-track"><CaseCard name="Voorbeeldcase" line="Resultaatregel"/></div>
      <h3 className="q-h3">FaqItem</h3><div className="q-faq-list">{faqs[0] && <FaqItem {...faqs[0]}/>}</div>
      <h3 className="q-h3">SmileMark</h3>
      <div className="q-actions"><SmileMark/><SmileMark className="q-smile q-guide-smile"/></div>
      <pre className="q-card q-guide-code">{'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M20 0A20 20 0 0 1 0 20V14A14 14 0 0 0 14 0Z" fill="#FF6700"/></svg>'}</pre>
      <p className="q-note">Labels: 14×14px, 10px tot de tekst, altijd Ginger. Stickertje: 28×28px wit.</p>
      <h3 className="q-h3">Sectievlak (q-panel / q-panel--dark)</h3>
       <p className="q-note">Witte pagina. Sand-vlakken op 24px van de schermrand (mobiel 12px), 24px wit tussen vlakken. Hoeken 40px / mobiel 32px; rechtsonder 160px / mobiel 80px. De extra ronde hoek volgt de smile in het logo.</p>
       <div className="q-panel q-guide-panel"><SectionHeader title="Wat wil je bereiken?"/><div className="q-card">Kaart: hoeken 20px, rechtsonder 56px.</div></div>
       <div className="q-panel q-panel--dark q-guide-panel"><SectionHeader title="Plan je gratis adviesgesprek!"/></div>
       <h3 className="q-h3">Smile-hoek voor foto's</h3><div className="q-guide-photo"/>
       <p className="q-note">Foto's, portret, casekaarten en video: hoeken 20px; rechtsonder 96px / mobiel 56px. Knoppen en kleine elementen behouden hun vorm. Contentbreedte maximaal 1360px; tekst maximaal 65ch.</p>
       <SectionHeader title="Succesverhalen"/>
       <h3 className="q-h3">SmileOutline / q-smile-outline</h3>
       <div className="q-guide-outline-demo q-smile-outline-host"><SmileOutline/><div className="q-guide-photo"/><SmileOutline front/></div>
       <p className="q-note">Exacte smile-vorm uit het logo, zonder vulling, met een Ginger omtrek van constant 3px en ronde lijnhoeken. Eén identieke vorm in twee lagen: achter de foto en een gedeeltelijk vrijgegeven voorlaag, zodat de smile vóór en achter de foto langs loopt. Geen parallellogram. Formaat circa 120% van de foto. Plaatsing: hero (linksonder en rechtsboven uitstekend), Over ons (over de grens met het tekstvlak), geen smile-lijn bij de afspraakplanner. Niet klikbaar. Mobiel alleen hero, 70% van het desktopformaat. Tokens: --q-smile-outline-stroke en --q-about-bulge.</p>
       <h3 className="q-h3">Over ons / q-about</h3><p className="q-note">Sand-vlak, twee kolommen: links label, kop, tekst, q-check-list--badge (ronde Ginger badges) en knop; rechts een staande foto 4:5 (q-about-photo) met hoeken 20px en de smile-hoek rechtsonder. SmileOutline wisselt voor/achter: linksonder vóór de foto, rechtsboven erachter. Zelfde opbouw bij het hero-portret.</p><h3 className="q-h3">LogoStrip / q-logo-strip</h3><p className="q-note">Witte strook na de hero: Inter SemiBold label met Ginger smile, rechts twee identieke logogroepen voor een doorlopende marquee. Logo's grijs op 50%, bij hover volle kleur; zachte randvervaging. Zichtbare placeholders tot aanlevering, animatie uit bij reduced motion.</p><LogoStrip/><h3 className="q-h3">Sectievolgorde</h3><p className="q-note">1 Hero (Sand) · 2 Klantlogo's (wit) · 3 Succesverhalen (donker) · 4 Over ons (Sand) · 5 Cases (wit) · 6 Wat wil je bereiken? (Sand) · 7 Recensies (wit) · 8 Groeien zonder risico (Sand) · 9 PhotoCta · 10 FAQ (wit) · 11 Afsluitende CTA (Sand) · 12 Footer (wit). Kaarten wit in Sand, Sand in wit.</p><h3 className="q-h3">Hero / q-hero-stats</h3><p className="q-note">Onder de knoppen een cijferrij: Lora 36px Zwartig, label klein in Inter, dunne verticale scheidingslijn. De drie voordeelkaarten liggen half over de onderrand van het hero-vlak (translateY 50%, z-index boven alles, zachte schaduw); de logostrook heeft extra ruimte boven. Mobiel blijven de kaarten in het vlak.</p><HeroStats/><h3 className="q-h3">ResultsPanel / q-results-panel</h3><p className="q-note">Donker vlak. Links (1/3) label, kop Succes|verhalen (omlijnd + gevuld in Sand), intro en twee ronde pijlknoppen met Sand rand. Rechts (2/3) staande tegels van 380×520px als carrousel die tot de rechterrand van het vlak doorloopt. Mobiel tekst boven, tegels als swipebare rij.</p><div className="q-panel q-panel--dark q-guide-panel"><ResultsPanel/></div><h3 className="q-h3">PhotoCta / q-photo-cta</h3><p className="q-note">Brede foto (bankfoto) 24px van de rand (mobiel 12px), 560px hoog (mobiel 480px), panelhoeken met smile-hoek rechtsonder, object-fit cover. Verloop Zwartig 80% naar transparant over de linkerhelft. Label, kop "Geen gedoe, | gewoon resultaat." (omlijnd + gevuld in Sand), één zin en de adviesknop naar de planner. SmileOutline loopt over de rechteronderhoek.</p><PhotoCta/><h3 className="q-h3">Cases-carrousel</h3><p className="q-note">Witte sectie zonder achtergrondvlak. Label ONS WERK en kopregel links, rechts korte zin + "Bekijk alle cases →" en pijlknoppen. Alle kaarten even breed, witte q-case-tag linksboven, hover: foto zoomt licht en q-case-more schuift omhoog. Kleine teller 01 / 04 naast de pijlknoppen, geen voortgangslijn.</p><div className="q-case-track"><CaseCard name="Voorbeeldcase" line="Resultaatregel" tag="Webshop"/></div>
       <h3 className="q-h3">Afsluitende CTA / q-contact + q-planner</h3>
       <p className="q-note">Sand q-panel met smile-hoek. Desktop twee kolommen: links label, kop, tekst, drie geruststellingen (q-check-list--badge) en belregel; rechts q-planner zonder SmileOutline: wit vlak ca. 880 × 680px, zachte schaduw, afgeronde hoeken, met [shortcode: hubspot-agenda]. Mobiel: tekst boven, planner eronder op volle breedte.</p>
       <h3 className="q-h3">Kleurschema per sectie</h3>
       <ol className="q-guide-scheme">{sectionOrder.map(x=><li key={x}>{x}</li>)}</ol>
      <p className="q-note">Kaarten volgen de achtergrond: op Sand wit, op wit Sand. Resultaattegels iets lichter Zwartig op donker. Footer wit zonder lijnen. Blauw alleen voor tekstlinks.</p>
    </section>
    <section><h2 className="q-h2">Niet in gebruik</h2><h3 className="q-h3">Workflow / q-workflow</h3><p className="q-note">De volledige werkwijze met adviesknop is tijdelijk van de homepage verwijderd en hier bewaard om later terug te zetten.</p><Workflow/></section>
  </main>;
}
