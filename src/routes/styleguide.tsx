import { createFileRoute } from '@tanstack/react-router';
import { designVariables, designClasses, faqs, aboutChecks, sectionOrder } from '@/lib/homepage-content';
import { SectionHeader, CtaBlock, CaseCard, RotatingBadge, ShortcodeBlock, FaqItem, CheckList, SmileMark, SmileArc, Workflow, Label, LogoStrip, ResultsCarousel, HeroStats, PhotoCta } from '@/components/qomversie';

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
       <h3 className="q-h3">SmileArc / q-arc</h3>
       <div className="q-guide-outline-demo q-arc-host"><SmileArc/><div className="q-guide-photo"/><SmileArc front/></div>
       <p className="q-note">Eén vloeiende boog: de buitenrand van de smile uit het logo, zonder rechte uiteinden. SVG: viewBox 0 0 560 560, path M558 2A556 556 0 0 1 2 558, stroke Ginger 3px, ronde lijnkap, non-scaling-stroke. Techniek: wrapper position relative en overflow visible; twee identieke kopieën op dezelfde plek. Kopie 1 achter het vlak (z-index 0, vlak/foto z-index 1); kopie 2 ervoor (z-index 2) met clip-path inset(45% 0 0 0), zodat alleen de onderste helft over het beeld loopt. Posities: PhotoCta 560×560px, top -64px, right 14%. Hero-portret en Over-onsfoto: 1,2× de fotohoogte, top -40px, right -48px. Mobiel (&lt;768px): alleen kopie 2, 280×280px, bottom -40px, right 16px; alleen hero en PhotoCta. Niet klikbaar.</p>
       <h3 className="q-h3">Over ons / q-about</h3><p className="q-note">Sand-vlak, twee kolommen: links label, kop, tekst, q-check-list--badge (ronde Ginger badges) en knop; rechts een staande foto 4:5 (q-about-photo) met hoeken 20px en de smile-hoek rechtsonder. SmileArc loopt bovenaan achter en onderaan vóór de foto langs. Zelfde opbouw bij het hero-portret.</p><h3 className="q-h3">LogoStrip / q-logo-strip</h3><p className="q-note">Witte strook na de hero: Inter SemiBold label met Ginger smile, rechts twee identieke logogroepen voor een doorlopende marquee. Logo's grijs op 50%, bij hover volle kleur; zachte randvervaging. Zichtbare placeholders tot aanlevering, animatie uit bij reduced motion.</p><LogoStrip/><h3 className="q-h3">Sectievolgorde</h3><p className="q-note">1 Hero (Sand) · 2 Klantlogo's (wit) · 3 Succesverhalen (donker) · 4 Over ons (Sand) · 5 Cases (wit) · 6 Wat wil je bereiken? (Sand) · 7 Recensies (wit) · 8 PhotoCta · 9 Groeien zonder risico (Sand) · 10 FAQ (wit) · 11 Afsluitende CTA (Sand) · 12 Footer (wit). Kaarten wit in Sand, Sand in wit.</p><h3 className="q-h3">Hero / q-hero-stats</h3><p className="q-note">Onder de knoppen een cijferrij: Lora 36px Zwartig, label klein in Inter, dunne verticale scheidingslijn. De drie voordeelkaarten liggen half over de onderrand van het hero-vlak (translateY 50%, z-index boven alles, zachte schaduw); de logostrook heeft extra ruimte boven. Mobiel blijven de kaarten in het vlak.</p><HeroStats/><h3 className="q-h3">ResultsCarousel / q-results</h3><p className="q-note">Donker vlak met smile-hoek. Bovenaan label, kop Succes|verhalen (omlijnd + gevuld, Sand) en intro. Slider met één project per slide en zachte schuifovergang; daaronder gecentreerd twee ronde pijlknoppen met teller 01 / 03, geen voortgangsbalk; mobiel swipen. Slide: links (1/3) klantnaam hoofdletters Sand 70%, kop Lora 36px (max. drie regels), uitleg Sand 80% en dienstlabels (pill, rand Sand 30%). Rechts (2/3) beeldvlak 460px met smile-hoek, in drie varianten: één groot beeld, twee beelden (tweede iets hoger) of Sand merkvlak met klantlogo. Video: still met ronde Sand afspeelknop; klik opent een lightbox (donkere achtergrond, sluitknop rechtsboven, Esc of ernaast klikken) met geluid. Badges: 1-2 Sand kaartjes (16px hoeken, zachte schaduw) half over de rechterrand, 12px ertussen, Ginger ↑ + cijfer Lora 36px Zwartig, uitleg klein Zwartig 75%. Elementor: Loop Carousel gekoppeld aan berichttype "Resultaten" (klant, kop, uitleg, labels, 0-2 beelden, 1-2 badges).</p><div className="q-panel q-panel--dark q-results-section"><ResultsCarousel/></div><div className="q-panel q-panel--dark q-guide-panel"></div><h3 className="q-h3">PhotoCta / q-photo-cta</h3><p className="q-note">Brede foto met verloop Zwartig 80% naar transparant tot 60%. Tekstkolom 720px, 80px van links, verticaal gecentreerd met min. 96px boven en onder; kop Lora 600 64px op twee regels (omlijnd + gevuld), zin op één regel (max. 680px). Verloop tot 60% breedte. SmileArc 560×560px, top -64px, right 14%: over de rechterhelft van de foto, ver van tekst en knop. Mobiel: tekst volle breedte met 24px ruimte, kop mag 3-4 regels; boog alleen voorlaag 280×280px rechtsonder.</p><PhotoCta/><h3 className="q-h3">Cases-carrousel</h3><p className="q-note">Witte sectie zonder achtergrondvlak. Label ONS WERK en kopregel links, rechts korte zin + "Bekijk alle cases →" en pijlknoppen. Alle kaarten even breed, witte q-case-tag linksboven, hover: foto zoomt licht en q-case-more schuift omhoog. Kleine teller 01 / 04 naast de pijlknoppen, geen voortgangslijn. De smile-lijn omvat de hele kaartenrij: achter de bovenrand, vóór de rechteronderhoek.</p><div className="q-case-track"><CaseCard name="Voorbeeldcase" line="Resultaatregel" tag="Webshop"/></div>
       <h3 className="q-h3">Afsluitende CTA / q-contact + q-planner</h3>
       <p className="q-note">Sand q-panel met smile-hoek. Desktop twee kolommen: links label, kop, tekst, drie geruststellingen (q-check-list--badge) en belregel; rechts q-planner zonder SmileOutline: wit vlak ca. 880 × 680px, zachte schaduw, afgeronde hoeken, met [shortcode: hubspot-agenda]. Mobiel: tekst boven, planner eronder op volle breedte.</p>
       <h3 className="q-h3">Kleurschema per sectie</h3>
       <ol className="q-guide-scheme">{sectionOrder.map(x=><li key={x}>{x}</li>)}</ol>
      <p className="q-note">Kaarten volgen de achtergrond: op Sand wit, op wit Sand. Resultaatblokken iets lichter Zwartig op donker. Footer wit zonder lijnen. Blauw alleen voor tekstlinks.</p>
    </section>
    <section><h2 className="q-h2">Niet in gebruik</h2><h3 className="q-h3">Workflow / q-workflow</h3><p className="q-note">De volledige werkwijze met adviesknop is tijdelijk van de homepage verwijderd en hier bewaard om later terug te zetten.</p><Workflow/></section>
  </main>;
}
