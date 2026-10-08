import { createFileRoute } from '@tanstack/react-router';
import { designVariables, designClasses, faqs, aboutChecks, sectionOrder } from '@/lib/homepage-content';
import { SectionHeader, CtaBlock, CaseCard, RotatingBadge, ShortcodeBlock, FaqItem, CheckList, SmileMark, SmileOutline, Workflow, Label, LogoStrip, ResultsGrid, HeroStats, PhotoCta } from '@/components/qomversie';

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
       <p className="q-note">Exacte smile-vorm uit het logo, zonder vulling, met een Ginger omtrek van constant 3px en ronde lijnhoeken. Eén identieke vorm in twee lagen: achter het medium en een gedeeltelijk vrijgegeven voorlaag, zodat de smile vóór en achter het medium langs loopt. Geen parallellogram. Plaatsing: alleen hero-portret, Over-onsfoto en rond de PhotoCta (deels vóór, deels achter het vlak). Niet bij cases en recensies. Geen smile-lijn bij de afspraakplanner. Niet klikbaar. Mobiel alleen hero en PhotoCta. Tokens: --q-smile-outline-stroke en --q-about-bulge.</p>
       <h3 className="q-h3">Over ons / q-about</h3><p className="q-note">Sand-vlak, twee kolommen: links label, kop, tekst, q-check-list--badge (ronde Ginger badges) en knop; rechts een staande foto 4:5 (q-about-photo) met hoeken 20px en de smile-hoek rechtsonder. SmileOutline wisselt voor/achter: linksonder vóór de foto, rechtsboven erachter. Zelfde opbouw bij het hero-portret.</p><h3 className="q-h3">LogoStrip / q-logo-strip</h3><p className="q-note">Witte strook na de hero: Inter SemiBold label met Ginger smile, rechts twee identieke logogroepen voor een doorlopende marquee. Logo's grijs op 50%, bij hover volle kleur; zachte randvervaging. Zichtbare placeholders tot aanlevering, animatie uit bij reduced motion.</p><LogoStrip/><h3 className="q-h3">Sectievolgorde</h3><p className="q-note">1 Hero (Sand) · 2 Klantlogo's (wit) · 3 Succesverhalen (donker) · 4 Over ons (Sand) · 5 Cases (wit) · 6 Wat wil je bereiken? (Sand) · 7 Recensies (wit) · 8 PhotoCta · 9 Groeien zonder risico (Sand) · 10 FAQ (wit) · 11 Afsluitende CTA (Sand) · 12 Footer (wit). Kaarten wit in Sand, Sand in wit.</p><h3 className="q-h3">Hero / q-hero-stats</h3><p className="q-note">Onder de knoppen een cijferrij: Lora 36px Zwartig, label klein in Inter, dunne verticale scheidingslijn. De drie voordeelkaarten liggen half over de onderrand van het hero-vlak (translateY 50%, z-index boven alles, zachte schaduw); de logostrook heeft extra ruimte boven. Mobiel blijven de kaarten in het vlak.</p><HeroStats/><h3 className="q-h3">ResultsGrid / q-results</h3><p className="q-note">Donker vlak. Bovenaan label, kop Succes|verhalen (omlijnd + gevuld, Sand) en intro (max. 560px); rechts twee ronde pijlknoppen ← → met teller, actief vanaf meer dan 6 resultaten. Daaronder masonry: 2 kolommen desktop, 1 mobiel, 20px ruimte, hoogte volgt inhoud. Blok: #2C3542, rand 1px Sand 8%, hoeken 20px met smile-hoek rechtsonder, verticaal Ginger-label met ✦ en projecttype half uit de rechterzijde. Met beeld: beeld 16:10 bovenaan op volle breedte. Zonder beeld (q-result-block--text): compact, cijfer 64px. Tekst: klantnaam hoofdletters Sand 70%, cijfer Lora 48px met Ginger ↑ 20px, uitleg 17px Sand 80%. Afspeelknop Sand met Zwartig driehoek. Elementor: Loop Grid in masonry-stand, gekoppeld aan berichttype "Resultaten" met velden klant, projecttype, cijfer, uitleg en optioneel beeld.</p><div className="q-panel q-panel--dark q-results-section"><ResultsGrid/></div><div className="q-panel q-panel--dark q-guide-panel"></div><h3 className="q-h3">PhotoCta / q-photo-cta</h3><p className="q-note">Brede foto met verloop Zwartig 80% naar transparant tot 60%. Tekstkolom 720px, 80px van links, verticaal gecentreerd met min. 96px boven en onder; kop Lora 600 64px op twee regels (omlijnd + gevuld), zin op één regel (max. 680px). SmileOutline 640×640px, midden op 70% breedte en halve hoogte, steekt boven en onder ca. 60px uit: bovenste deel achter het vlak, onderste deel ervoor. Nooit door tekst of knop. Mobiel: tekst volle breedte met 24px ruimte, smile 360×360px rechtsonder, alleen onderste deel zichtbaar.</p><PhotoCta/><h3 className="q-h3">Cases-carrousel</h3><p className="q-note">Witte sectie zonder achtergrondvlak. Label ONS WERK en kopregel links, rechts korte zin + "Bekijk alle cases →" en pijlknoppen. Alle kaarten even breed, witte q-case-tag linksboven, hover: foto zoomt licht en q-case-more schuift omhoog. Kleine teller 01 / 04 naast de pijlknoppen, geen voortgangslijn. De smile-lijn omvat de hele kaartenrij: achter de bovenrand, vóór de rechteronderhoek.</p><div className="q-case-track"><CaseCard name="Voorbeeldcase" line="Resultaatregel" tag="Webshop"/></div>
       <h3 className="q-h3">Afsluitende CTA / q-contact + q-planner</h3>
       <p className="q-note">Sand q-panel met smile-hoek. Desktop twee kolommen: links label, kop, tekst, drie geruststellingen (q-check-list--badge) en belregel; rechts q-planner zonder SmileOutline: wit vlak ca. 880 × 680px, zachte schaduw, afgeronde hoeken, met [shortcode: hubspot-agenda]. Mobiel: tekst boven, planner eronder op volle breedte.</p>
       <h3 className="q-h3">Kleurschema per sectie</h3>
       <ol className="q-guide-scheme">{sectionOrder.map(x=><li key={x}>{x}</li>)}</ol>
      <p className="q-note">Kaarten volgen de achtergrond: op Sand wit, op wit Sand. Resultaatblokken iets lichter Zwartig op donker. Footer wit zonder lijnen. Blauw alleen voor tekstlinks.</p>
    </section>
    <section><h2 className="q-h2">Niet in gebruik</h2><h3 className="q-h3">Workflow / q-workflow</h3><p className="q-note">De volledige werkwijze met adviesknop is tijdelijk van de homepage verwijderd en hier bewaard om later terug te zetten.</p><Workflow/></section>
  </main>;
}
