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
    <section><h2 className="q-h2">Typografie</h2><Label>LABEL</Label><p className="q-h1">H1 Meer dan een <em>mooie</em> website.</p><p className="q-h2">H2 kop</p><p className="q-h3">H3 kop</p><p className="q-note">H2: Lora 500, Zwartig, rechtop, 48px / mobiel 32px (wit in blauw, Sand in donker). H3: Lora 500. Alleen "mooie" in de H1 is Lora Italic Ginger.</p><p className="q-text">Bodytekst in Inter.</p></section>
    <section><h2 className="q-h2">Componenten</h2>
      <h3 className="q-h3">SectionHeader</h3><SectionHeader label="LABEL" title="Sectiekop"/>
      <h3 className="q-h3">CtaBlock</h3><div className="q-actions"><CtaBlock/><CtaBlock variant="secondary">Secundair</CtaBlock></div><CtaBlock note="30 minuten · vrijblijvend"/>
      <h3 className="q-h3">RotatingBadge</h3><div className="q-guide-badge"><RotatingBadge id="guide-badge"/></div>
      <h3 className="q-h3">CheckList</h3><CheckList items={aboutChecks.slice(0, 2)}/>
      <h3 className="q-h3">ShortcodeBlock</h3><ShortcodeBlock code="reviews" note="Hier komt de reviews-widget"/>
      <h3 className="q-h3">CaseCard</h3><div className="q-case-track"><CaseCard name="Voorbeeldcase" line="Resultaatregel"/></div>
      <h3 className="q-h3">FaqItem</h3><div className="q-faq-list"><FaqItem {...faqs[0]}/></div>
      <h3 className="q-h3">Tijdlijn (q-steps)</h3>
      <div className="q-steps">{steps.map((s, i) => <article className="q-step" key={s.title}><span className="q-step-dot" aria-hidden="true">{i + 1}</span><div className="q-step-body"><div className="q-step-head"><h3 className="q-h3">{s.title}</h3><span className="q-step-pill">{s.meta}</span></div>{'blocks' in s && s.blocks ? <div className="q-step-blocks">{s.blocks.map(b => <div key={b.word}><strong>{b.word}</strong><span>{b.line}</span></div>)}</div> : <p className="q-text">{s.text}</p>}</div></article>)}</div>
      <h3 className="q-h3">SmileMark</h3>
      <div className="q-actions"><SmileMark/><SmileMark className="q-smile q-guide-smile"/></div>
      <pre className="q-card q-guide-code">{'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M20 0A20 20 0 0 1 0 20V14A14 14 0 0 0 14 0Z" fill="#FF6700"/></svg>'}</pre>
      <p className="q-note">Labels: 14×14px, 10px tot de tekst, altijd Ginger. Stickertje: 28×28px wit.</p>
      <h3 className="q-h3">Lijnensysteem (q-section · q-container · q-cross)</h3>
      <p className="q-note">.q-section: 1px bovenrand over volle breedte. .q-container: 1200px, 1px rand links/rechts, 48px binnenruimte (mobiel: lijnen 16px van de rand, 20px binnenruimte). .q-cross: 7×7px Ginger vierkantje op elk kruispunt. Lijnkleur: Zwartig 12% op Sand/wit, wit 20% in blauw, Sand 15% in donker.</p>
      <div className="q-guide-lines"><div className="q-section q-section--flush"><div className="q-guide-lines-inner">Sectie</div></div><div className="q-section q-section--flush q-section--blue"><div className="q-guide-lines-inner">Blauwe sectie</div></div></div>
    </section>
  </main>;
}
