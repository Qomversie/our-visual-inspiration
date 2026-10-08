import { createFileRoute } from '@tanstack/react-router';
import { designVariables, designClasses, faqs, aboutChecks, steps } from '@/lib/homepage-content';
import { SectionHeader, CtaBlock, CaseCard, RotatingBadge, ShortcodeBlock, FaqItem, CheckList, SmileMark, Label } from '@/components/qomversie';

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
    <section><h2 className="q-h2">Typografie</h2><Label>LABEL</Label><p className="q-h1">H1 Meer dan een <em>mooie</em> website.</p><SectionHeader title="Cases waar we trots op zijn"/><p className="q-h3">H3 kop</p><p className="q-note">H2: Lora 600, 64px / mobiel 38px, regelhoogte 1.05, gevuld in Zwartig; in het donkere vlak Sand. Regelafbrekingen staan in de contentdata (homepage-content.ts). H3: Lora 500. Alleen "mooie" in de H1 is Lora Italic Ginger.</p><p className="q-text">Bodytekst in Inter.</p></section>
    <section><h2 className="q-h2">Componenten</h2>
      <h3 className="q-h3">SectionHeader</h3><SectionHeader label="LABEL" title="Sectiekop"/>
      <h3 className="q-h3">CtaBlock</h3><div className="q-actions"><CtaBlock/><CtaBlock variant="secondary">Secundair</CtaBlock></div><CtaBlock note="30 minuten · vrijblijvend"/>
      <h3 className="q-h3">RotatingBadge</h3><div className="q-guide-badge"><RotatingBadge id="guide-badge"/></div>
      <h3 className="q-h3">CheckList</h3><CheckList items={aboutChecks.slice(0, 2)}/>
      <h3 className="q-h3">ShortcodeBlock</h3><ShortcodeBlock code="reviews" note="Hier komt de reviews-widget"/>
      <h3 className="q-h3">CaseCard</h3><div className="q-case-track"><CaseCard name="Voorbeeldcase" line="Resultaatregel"/></div>
      <h3 className="q-h3">FaqItem</h3><div className="q-faq-list">{faqs[0] && <FaqItem {...faqs[0]}/>}</div>
      <h3 className="q-h3">Tijdlijn (q-steps)</h3>
      <div className="q-steps">{steps.map((s, i) => <article className="q-step" key={s.title}><span className="q-step-dot" aria-hidden="true">{i + 1}</span><div className="q-step-body"><div className="q-step-head"><h3 className="q-h3">{s.title}</h3><span className="q-step-pill">{s.meta}</span></div>{'blocks' in s && s.blocks ? <div className="q-step-blocks">{s.blocks.map(b => <div key={b.word}><strong>{b.word}</strong><span>{b.line}</span></div>)}</div> : <p className="q-text">{s.text}</p>}</div></article>)}</div>
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
       <h3 className="q-h3">Kleurschema per sectie</h3>
       <table className="q-guide-scheme"><tbody>{[['Hero → cijfers/logo’s → foto met kaarten','Eén Sand-vlak (q-panel)'],['Succesverhalen','Wit (q-section--white)'],['Vertrouwd door onze klanten','Sand'],['Cases','Wit'],['Over ons','Sand'],['Wat wil je bereiken?','Wit'],['Groeien zonder risico','Sand'],['Werkwijze','Wit'],['Veelgestelde vragen','Sand'],['Afsluitende CTA','q-panel q-panel--dark op wit'],['Footer','Sand q-panel met smile-hoek; Even / sparren?, grote contactlinks, kolommen en ronde socialknoppen']].map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody></table>
      <p className="q-note">Kaarten volgen de achtergrond: op Sand wit, op wit Sand. Blauw alleen voor tekstlinks.</p>
    </section>
  </main>;
}
